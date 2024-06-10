import { PlaitBoard, PlaitElement, PlaitOperation, PlaitTheme, Viewport, Selection, ComponentType } from '@plait/core';
import { BOARD_TO_COMPONENT } from '../utils/weak-maps';
import { BoardComponentInterface } from '../board/board.component.interface';
import { RenderComponentRef } from '@plait/common';
import { ComponentRef } from '@angular/core';

export interface AngularBoard {
    renderComponent: <T, K extends { nativeElement: () => HTMLElement }>(
        type: ComponentType<K>,
        container: Element | DocumentFragment,
        props: T
    ) => { ref: RenderComponentRef<T>; componentRef: ComponentRef<K> };
}

export const AngularBoard = {
    getComponent(board: PlaitBoard) {
        return BOARD_TO_COMPONENT.get(board) as BoardComponentInterface;
    },
    getViewContainerRef(board: PlaitBoard) {
        return (BOARD_TO_COMPONENT.get(board) as BoardComponentInterface).viewContainerRef;
    }
};

export interface OnChangeData {
    children: PlaitElement[];
    operations: PlaitOperation[];
    viewport: Viewport;
    selection: Selection | null;
    theme: PlaitTheme;
}
