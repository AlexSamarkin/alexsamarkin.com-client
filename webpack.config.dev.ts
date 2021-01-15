import config from './webpack.config.common';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { merge } from 'webpack-merge';
import { resolve } from 'path';
import { getRules } from './webpack/rules';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default merge(config, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        host: '0.0.0.0',
        disableHostCheck: true,
        port: 3030
    },
    output: {
        path: resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    performance: {
        hints: 'warning'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            minify: false,
            template: resolve(__dirname, 'public/index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: resolve(__dirname, 'src/assets/images'), to: resolve(__dirname, 'build/assets') },
                { from: resolve(__dirname, 'src/assets/icons'), to: resolve(__dirname, 'build/assets') }
            ]
        })
    ],
    module: {
        rules: getRules('development')
    }
});