import { ACTIVE_STROKE_WIDTH, PlaitBoard, PlaitElement, RectangleClient, getSelectedElements, isSelectionMoving } from '@plait/core';
import { ActiveGenerator } from '../generators';
import { CommonImageItem, canResize, getElementOfFocusedImage } from '../utils';

export abstract class ImageBaseComponent {
    _imageItem!: CommonImageItem;

    _isFocus!: boolean;

    initialized = false;

    activeGenerator!: ActiveGenerator;

    element!: PlaitElement;

    set imageItem(value: CommonImageItem) {
        this.afterImageItemChange(this._imageItem, value);
        this._imageItem = value;
        this.drawFocus();
    }

    get imageItem() {
        return this._imageItem;
    }

    board!: PlaitBoard;

    set isFocus(value: boolean) {
        this._isFocus = value;
        this.drawFocus();
    }

    get isFocus() {
        return this._isFocus;
    }

    abstract afterImageItemChange(previous: CommonImageItem, current: CommonImageItem): void;

    getRectangle!: () => RectangleClient;

    hasResizeHandle!: () => boolean;

    initialize(): void {
        this.activeGenerator = new ActiveGenerator(this.board, {
            getStrokeWidth: () => {
                const selectedElements = getSelectedElements(this.board);
                if (!(selectedElements.length === 1 && !isSelectionMoving(this.board))) {
                    return ACTIVE_STROKE_WIDTH;
                } else {
                    return ACTIVE_STROKE_WIDTH;
                }
            },
            getStrokeOpacity: () => {
                const selectedElements = getSelectedElements(this.board);
                if ((selectedElements.length === 1 && !isSelectionMoving(this.board)) || !selectedElements.length) {
                    return 1;
                } else {
                    return 0.5;
                }
            },
            getRectangle: () => {
                return this.getRectangle();
            },
            hasResizeHandle: () => {
                const isSelectedImageElement = canResize(this.board, this.element);
                const isSelectedImage = !!getElementOfFocusedImage(this.board);
                return isSelectedImage || isSelectedImageElement;
            }
        });
        this.initialized = true;
    }

    drawFocus() {
        if (this.initialized) {
            const activeG = PlaitBoard.getElementActiveHost(this.board);
            this.activeGenerator.processDrawing(this.element as PlaitElement, activeG, { selected: this._isFocus });
        }
    }

    destroy(): void {
        if (this.activeGenerator) {
            this.activeGenerator.destroy();
        }
    }
}
