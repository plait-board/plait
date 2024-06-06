import { Node } from 'slate';
import { CustomText, ParagraphElement } from './types';

export function measureElement(
    element: ParagraphElement,
    options: {
        fontSize: number;
        fontFamily: string;
        lineHeight: number;
    },
    containerMaxWidth: number = 10000
) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    const textEntries = Node.texts(element);
    const lines: CustomText[][] = [[]];
    for (const textEntry of textEntries) {
        const [text] = textEntry;
        const textString = Node.string(text);
        const textArray = textString.split('\n');
        textArray.forEach((segmentTextString: string, index: number) => {
            const segmentText = { ...text, text: segmentTextString };
            if (index === 0) {
                const currentLine = lines[lines.length - 1];
                currentLine.push(segmentText);
            } else {
                const newLine: CustomText[] = [];
                newLine.push(segmentText);
                lines.push(newLine);
            }
        });
    }
    let width = 0;
    let height = 0;
    lines.forEach((lineTexts: CustomText[], index: number) => {
        let lineWidth = 0;
        lineTexts.forEach((text: CustomText) => {
            const font = getFont(text, { fontFamily: options.fontFamily, fontSize: options.fontSize });
            ctx.font = font;
            const textMetrics = ctx.measureText(text.text);
            lineWidth += textMetrics.width;
        });
        if (lineWidth <= containerMaxWidth) {
            if (lineWidth > width) {
                width = lineWidth;
            }
            height += options.lineHeight;
        } else {
            width = containerMaxWidth;
            const lineWrapNumber = Math.ceil(lineWidth / containerMaxWidth);
            height += options.lineHeight * lineWrapNumber;
        }
    });
    return { width, height };
}

const getFont = (
    text: CustomText,
    options: {
        fontSize: number;
        fontFamily: string;
    }
) => {
    return `${text.italic ? 'italic ' : ''} ${text.bold ? 'bold ' : ''} ${text['font-size'] || options.fontSize}px ${options.fontFamily} `;
};
