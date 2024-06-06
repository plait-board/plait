import { Element } from 'slate';
import { Alignment, CustomText, ParagraphElement } from './types';

export const buildText = (text: string | Element, align?: Alignment, properties?: Partial<CustomText>) => {
    properties = properties || {};
    const plaitText = typeof text === 'string' ? { children: [{ text, ...properties }] } : text;
    if (align) {
        (plaitText as ParagraphElement).align = align;
    }
    return plaitText;
};

export const getLineHeightByFontSize = (fontSize: number) => {
    if (fontSize === 14) {
        return 20;
    }
    if (fontSize === 18) {
        return 25;
    }
    return fontSize * 1.5;
};
