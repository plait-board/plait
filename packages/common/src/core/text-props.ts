import { PlaitBoard } from '@plait/core';
import { Editor, Element, Operation } from 'slate';

export interface TextProps {
    board: PlaitBoard;
    text: Element;
    readonly?: boolean;
    onChange?: (data: TextChangeData) => void;
    afterInit?: (data: Editor) => void;
    onComposition?: (data: CompositionEvent) => void;
    onExitEdit?: () => void;
}

export type TextChangeData = { newText: Element; operations: Operation[] };
