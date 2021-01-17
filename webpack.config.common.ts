import * as wp from 'webpack';
import { entry } from './webpack/entry';
import { resolve } from './webpack/resolve';

const config: wp.Configuration = {
    entry,
    resolve,
};

export default config;
