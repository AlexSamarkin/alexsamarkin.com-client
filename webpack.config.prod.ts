import config from './webpack.config.common';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { merge } from 'webpack-merge';
import { resolve } from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { WebpackManifestPlugin } from 'webpack-manifest-plugin';
import WorkboxPlugin from 'workbox-webpack-plugin';

const isAnalyze = process.env.ANALYZE === 'true';

const plugins = [
    new WebpackManifestPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        minify: true,
        template: resolve(__dirname, 'public/index.html'),
        scriptLoading: 'defer',
    }),
    new WorkboxPlugin.GenerateSW({
        clientsClaim: true,
        skipWaiting: true,
    }),
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        attributes: {
            as: 'style',
            rel: 'preload',
        },
    }),
    new CopyWebpackPlugin({
        patterns: [
            { from: resolve(__dirname, 'src/assets'), to: resolve(__dirname, 'build/assets') },
            { from: resolve(__dirname, 'public/favicons'), to: resolve(__dirname, 'build') },
            { from: resolve(__dirname, 'public/robots.txt'), to: resolve(__dirname, 'build/robots.txt') },
            {
                from: resolve(__dirname, 'public/manifest.webmanifest'),
                to: resolve(__dirname, 'build/manifest.webmanifest'),
            },
        ],
    }),
];

if (isAnalyze) {
    plugins.push(new BundleAnalyzerPlugin());
}

export default merge(config, {
    mode: 'production',
    output: {
        path: resolve(__dirname, 'build'),
        filename: '[name].[contenthash].js',
        publicPath: '/',
    },
    performance: {
        hints: false,
    },
    optimization: {
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: {
            chunks: 'all',
            minSize: 1000 * 600,
            cacheGroups: {
                vendor: {
                    name: 'node_vendors', // part of the bundle name and
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                },
            },
        },
    },
    plugins,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                    {
                        loader: 'ts-loader',
                        options: { transpileOnly: true },
                    },
                ],
                exclude: resolve(__dirname, 'node_modules'),
                include: resolve(__dirname, 'src'),
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)?$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)?$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader, options: { publicPath: '' } },
                    { loader: 'css-loader', options: { url: false } },
                    { loader: 'resolve-url-loader' },
                    { loader: 'sass-loader' },
                ],
            },
            {
                test: /\.(graphql|gql)$/,
                exclude: /node_modules/,
                loader: 'graphql-tag/loader',
            },
        ],
    },
});
