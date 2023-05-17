import { RectangleClient } from '@plait/core';
import { EmojiData, MindElement, PlaitMind } from '../../interfaces';
import { getRectangleByNode } from '../../utils/graph';
import { NodeSpace } from '../../utils/node-space';
import { PlaitMindBoard } from '../with-extend-mind';

export function getEmojisWidthHeight(board: PlaitMindBoard, element: MindElement<EmojiData>) {
    const options = board.getMindOptions();
    const count = element.data.emojis.length;
    const fontSize = getEmojiFontSize(element);
    return {
        width: fontSize * count + count * 2 * options.emojiPadding + (count - 1) * options.spaceBetweenEmojis,
        height: element.height
    };
}

export function getEmojiFontSize(element: MindElement<EmojiData>) {
    if (PlaitMind.isMind(element)) {
        return 18 + 2;
    } else {
        return 14 + 2;
    }
}

export function getEmojiRectangle(board: PlaitMindBoard, element: MindElement<EmojiData>): RectangleClient {
    let { x, y } = getRectangleByNode(MindElement.getNode(element));
    x = x + NodeSpace.getEmojiLeftSpace(board, element);
    const { width, height } = getEmojisWidthHeight(board, element);
    return {
        x,
        y,
        width,
        height
    };
}
