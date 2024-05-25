import { PlaitBoard } from '@plait/core';
import { Element } from 'slate';

export interface TextProps {
    board: PlaitBoard;
    text: Element;
    readonly?: boolean;
    onChange: (data: { width: number; height: number; newText: Element }) => void;
    onComposition: (data: { width: number; height: number }) => void;
    onExitEdit: () => void;
    registerGetSize: (getSizeFn: getSizeFnType) => void;
}

export type getSizeFnType = () => { width: number; height: number };
