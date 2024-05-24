import { PlaitBoard, PlaitElement, RectangleClient } from '@plait/core';
import { CommonImageItem } from '../utils';

export interface ImageProps {
    board: PlaitBoard;
    imageItem: CommonImageItem;
    element: PlaitElement;
    isFocus?: boolean,
    getRectangle: () => RectangleClient;
}
