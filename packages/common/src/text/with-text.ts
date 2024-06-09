import { PlaitBoard, WithPluginOptions } from '@plait/core';
import { TextComponentRef, TextProps } from './text-component';
import { Editor } from 'slate';

export interface PlaitTextBoard {
    renderText: (container: Element | DocumentFragment, props: TextProps) => TextComponentRef;
}

export const withText = <T extends PlaitBoard = PlaitBoard>(board: T) => {
    const newBoard = board as T & PlaitTextBoard;

    newBoard.renderText = (container: Element | DocumentFragment, props: TextProps) => {
        throw new Error('No implementation for renderText method.');
    };
    return newBoard;
};

export interface WithTextPluginOptions extends WithPluginOptions {
    textPlugins?: TextPlugin[];
}

export type TextPlugin = (editor: Editor) => Editor;
