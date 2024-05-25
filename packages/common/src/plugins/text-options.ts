import { WithPluginOptions } from '@plait/core';
import { Editor } from 'slate';

export type TextPlugin = (editor: Editor) => Editor;

export interface WithTextOptions extends WithPluginOptions {
    textPlugins?: TextPlugin[];
}
