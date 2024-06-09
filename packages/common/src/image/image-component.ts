import { PlaitBoard, PlaitElement, RectangleClient } from '@plait/core';
import { CommonImageItem } from '../utils/image';
import { RenderComponentRef } from '../core/render-component';

export type ImageComponentRef = RenderComponentRef<ImageProps>;

export interface ImageProps {
    board: PlaitBoard;
    imageItem: CommonImageItem;
    element: PlaitElement;
    isFocus?: boolean;
    getRectangle: () => RectangleClient;
}
