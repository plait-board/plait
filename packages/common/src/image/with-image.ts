import { PlaitBoard } from '@plait/core';
import { ImageComponentRef, ImageProps } from './image-component';

export interface PlaitImageBoard {
    renderImage: (container: Element | DocumentFragment, props: ImageProps) => ImageComponentRef;
}

export const withImage = <T extends PlaitBoard = PlaitBoard>(board: T) => {
    const newBoard = board as T & PlaitImageBoard;

    newBoard.renderImage = (container: Element | DocumentFragment, props: ImageProps) => {
        throw new Error('No implementation for renderImage method.');
    };
    return newBoard;
};
