import { PlaitBoard } from '@plait/core';
import { Editor, Element, Operation } from 'slate';
import { TextPlugin } from './with-text';
import { RenderComponentRef } from '../core/render-component';

export type TextComponentRef = RenderComponentRef<TextProps>;

export interface TextProps {
    board: PlaitBoard;
    text: Element;
    textPlugins?: TextPlugin[];
    readonly?: boolean;
    onChange?: (data: TextChangeData) => void;
    afterInit?: (data: Editor) => void;
    onComposition?: (data: CompositionEvent) => void;
    onExitEdit?: () => void;
}

export type TextChangeData = { newText: Element; operations: Operation[] };
