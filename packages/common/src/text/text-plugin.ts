import { WithPluginOptions } from '@plait/core';
import { TextPlugin } from './types';

export interface WithTextPluginOptions extends WithPluginOptions {
    textPlugins?: TextPlugin[];
}
