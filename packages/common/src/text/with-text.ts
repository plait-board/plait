import { ComponentRef, PlaitBoard } from '@plait/core';
import { TextProps } from '../core/text-props';

export interface PlaitTextBoard {
    renderText: (container: Element | DocumentFragment, props: TextProps) => ComponentRef<TextProps>;
}

export const withText = (board: PlaitBoard) => {
    const newBoard = board as PlaitBoard & PlaitTextBoard;

    newBoard.renderText = (container: Element | DocumentFragment, props: TextProps) => {
        throw new Error('No implementation for renderText method.');
    };
    return newBoard;
};
