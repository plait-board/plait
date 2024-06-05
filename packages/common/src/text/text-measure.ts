import { Node } from 'slate';
import { CustomText, ParagraphElement } from './types';

export function measureDiv(div: HTMLElement) {
    const boundaryBox = {
        left: Number.MAX_VALUE,
        top: Number.MAX_VALUE,
        right: Number.NEGATIVE_INFINITY,
        bottom: Number.NEGATIVE_INFINITY
    };
    for (let index = 0; index < div.childElementCount; index++) {
        const element = div.children.item(index);
        const nodeRectangle = element?.getBoundingClientRect();
        if (nodeRectangle) {
            boundaryBox.left = Math.min(boundaryBox.left, nodeRectangle.x);
            boundaryBox.top = Math.min(boundaryBox.top, nodeRectangle.y);
            boundaryBox.right = Math.max(boundaryBox.right, nodeRectangle.x + nodeRectangle.width);
            boundaryBox.bottom = Math.max(boundaryBox.bottom, nodeRectangle.y + nodeRectangle.height);
        }
    }
    const width = boundaryBox.right - boundaryBox.left;
    // FIREFOX the height of inline span is less than the height of paragraph
    const height = div.getBoundingClientRect().height;
    return { width, height };
}

export function measureElement(
    element: ParagraphElement,
    options: {
        fontSize: number;
        fontFamily: string;
        lineHeight: number;
    },
    containerMaxWidth: number
) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    const texts = Node.texts(element);
    let width = 0;
    let currentLineWidth = 0;
    let height = options.lineHeight;
    // let lineMaxWidth = 0;
    for (const textEntry of texts) {
        const [text] = textEntry;
        const font = getFont(text, options);
        ctx.font = font;
        const textString = Node.string(text);
        const textArray = textString.split('\n');
        textArray.forEach((segmentText: string, index: number) => {
            const textMetrics = ctx.measureText(segmentText);
            currentLineWidth += textMetrics.width;
            if (currentLineWidth > containerMaxWidth) {
                
            }
            // if (lineMaxWidth > containerMaxWidth) {
            //     width = containerMaxWidth;
            // }
            if (index > 0) {
                height += options.lineHeight;
                width = 0;
            }
        });
    }
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
