import { RenderComponentRef } from '@plait/common';
import { PlaitBoard } from '@plait/core';
import { EmojiData, EmojiItem } from '../interfaces/element-data';
import { MindElement } from '../interfaces/element';

export type EmojiComponentRef = RenderComponentRef<EmojiProps>;

export interface EmojiProps {
    board: PlaitBoard;
    emojiItem: EmojiItem;
    element: MindElement<EmojiData>;
    fontSize: number;
}
