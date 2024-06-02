import { PlaitBoard } from '@plait/core';
import { Element } from 'slate';

export interface TextProps {
    board: PlaitBoard;
    text: Element;
    readonly?: boolean;
    onChange?: (data: TextData) => void;
    onComposition?: (data: TextSizeData) => void;
    onExitEdit?: () => void;
    registerGetSize?: (getSizeFn: getSizeFnType) => void;
}

export type getSizeFnType = () => TextSizeData;

export type TextData = { newText: Element } & TextSizeData;

export type TextSizeData = { width: number; height: number };