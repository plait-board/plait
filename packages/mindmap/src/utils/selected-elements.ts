import { PlaitBoard, PLAIT_BOARD_TO_COMPONENT } from '@plait/core';
import { MindmapNodeElement } from '../interfaces';
import { coerceArray } from './util';
import { MINDMAP_ELEMENT_TO_COMPONENT, SELECTED_MINDMAP_ELEMENTS } from './weak-maps';

export function clearAllSelectedMindmapElements(board: PlaitBoard) {
    let selectedElements = getSelectedMindmapElements(board);
    deleteSelectedMindmapElements(board, selectedElements);
    SELECTED_MINDMAP_ELEMENTS.delete(board);
}

export function addSelectedMindmapElements(board: PlaitBoard, elementOrElements: MindmapNodeElement | MindmapNodeElement[]) {
    if (hasSelectedMindmapElement(board, elementOrElements)) {
        deleteSelectedMindmapElements(board, elementOrElements);
    }
    let selectedElements = getSelectedMindmapElements(board);
    SELECTED_MINDMAP_ELEMENTS.set(board, [...selectedElements, ...coerceArray(elementOrElements)]);
    setTimeout(() => {
        scrollToNode(board, coerceArray(elementOrElements));
    });
}

export function hasSelectedMindmapElement(board: PlaitBoard, elementOrElements: MindmapNodeElement | MindmapNodeElement[]) {
    let selectedElements = getSelectedMindmapElements(board);
    const selectedElementIds = selectedElements.map(node => node && node.id);
    return coerceArray(elementOrElements).every(node => selectedElementIds?.includes(node.id));
}

export function deleteSelectedMindmapElements(board: PlaitBoard, elementOrElements: MindmapNodeElement | MindmapNodeElement[]) {
    if (!hasSelectedMindmapElement(board, elementOrElements)) {
        return;
    }
    let selectedElements = getSelectedMindmapElements(board);
    const nodeIds = coerceArray(elementOrElements).map(node => node.id);
    selectedElements = selectedElements.filter(node => !nodeIds.includes(node.id));
    SELECTED_MINDMAP_ELEMENTS.set(board, selectedElements);
}

export function getSelectedMindmapElements(board: PlaitBoard) {
    let selectedElements = SELECTED_MINDMAP_ELEMENTS.get(board);
    return selectedElements || [];
}

export function scrollToNode(board: PlaitBoard, elements: MindmapNodeElement[]) {
    if (elements) {
        const mindmapNodeComponent = MINDMAP_ELEMENT_TO_COMPONENT.get(elements[0]);
        const boardComponent = PLAIT_BOARD_TO_COMPONENT.get(board);
        if (mindmapNodeComponent) {
            boardComponent!.scrollToRectangle({
                x: mindmapNodeComponent.node.x,
                y: mindmapNodeComponent.node.y,
                width: mindmapNodeComponent.node.width,
                height: mindmapNodeComponent.node.height
            });
        }
    }
}
