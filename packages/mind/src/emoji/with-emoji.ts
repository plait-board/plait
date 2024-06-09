import { PlaitBoard } from "@plait/core";
import { EmojiComponentRef, EmojiProps } from "./emoji-component";

export interface PlaitMindEmojiBoard {
    renderEmoji: (container: Element | DocumentFragment, props: EmojiProps) => EmojiComponentRef;
}

export const withEmoji = <T extends PlaitBoard = PlaitBoard>(board: T) => {
    const newBoard = board as T & PlaitMindEmojiBoard;

    newBoard.renderEmoji = (container: Element | DocumentFragment, props: EmojiProps) => {
        throw new Error('No implementation for renderEmoji method.');
    };
    return newBoard;
};
