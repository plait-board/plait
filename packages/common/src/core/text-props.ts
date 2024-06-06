import { PlaitBoard } from '@plait/core';
import { Editor, Element } from 'slate';

export interface TextProps {
    board: PlaitBoard;
    text: Element;
    readonly?: boolean;
    onChange?: (data: TextData) => void;
    afterInit?: (data: Editor) => void;
    onComposition?: (data: CompositionEvent) => void;
    onExitEdit?: () => void;
}

export type TextData = { newText: Element };
