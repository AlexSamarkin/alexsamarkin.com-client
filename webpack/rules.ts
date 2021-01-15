import { resolve } from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const getRules = (env: 'development' | 'production') => [
    {
        test: /\.tsx?$/,
        use: [
            {
                loader: 'babel-loader'
            },
            {
                loader: 'ts-loader',
                options: { transpileOnly: true }
            }
        ],
        exclude: resolve(__dirname, '..', 'node_modules'),
        include: resolve(__dirname, '..', 'src')
    },
    {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        loader: 'file-loader',
        options: { outputPath: 'build/images' }
    },
    {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        loader: 'file-loader',
        options: { outputPath: 'build/fonts' }
    },
    {
        test: /\.(scss|css)$/,
        use: [
            { loader: env === 'production' ? MiniCssExtractPlugin.loader : 'style-loader' },
            { loader: 'css-loader' },
            { loader: 'resolve-url-loader' },
            { loader: 'sass-loader' }
        ]
    },
    {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader'
    }
];