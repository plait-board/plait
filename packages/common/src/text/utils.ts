import { Element } from 'slate';
import { Alignment, CustomText, ParagraphElement } from "./types";

export const buildText = (text: string | Element, align?: Alignment, properties?: Partial<CustomText>) => {
    properties = properties || {};
    const plaitText = typeof text === 'string' ? { children: [{ text, ...properties }] } : text;
    if (align) {
        (plaitText as ParagraphElement).align = align;
    }
    return plaitText;
};
