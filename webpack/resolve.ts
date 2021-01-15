import { resolve as pathResolve } from 'path';

export const resolve = {
    extensions: ['.ts', '.tsx', '.js', '.json', '.css', '.scss', '.graphql'],
    alias: {
        '@app': pathResolve(__dirname, './src'),
        '@components': pathResolve(__dirname, '..', './src/components'),
        '@containers': pathResolve(__dirname, '..', './src/containers'),
        '@pages': pathResolve(__dirname, '..', './src/pages'),
    }
}