import {
    ComponentContext,
    ComponentRef,
    IS_TEXT_EDITABLE,
    MERGING,
    PlaitBoard,
    PlaitOptionsBoard,
    Point,
    RectangleClient,
    createForeignObject,
    createG,
    setAngleForG,
    toHostPoint,
    toViewBoxPoint,
    updateForeignObject,
    updateForeignObjectWidth
} from '@plait/core';
import { fromEvent, timer } from 'rxjs';
import { Editor, Element } from 'slate';
import { TextProps, getSizeFnType } from '../core/text-props';
import { PlaitTextBoard } from './with-text';
import { measureElement } from './text-measure';
import { getLineHeightByFontSize } from './utils';

export interface TextManageRef {
    newText?: Element;
    width: number;
    height: number;
}

export class TextManage {
    isEditing = false;

    editor!: Editor;

    text!: Element;

    g!: SVGGElement;

    foreignObject!: SVGForeignObjectElement;

    componentRef!: ComponentRef<TextProps>;

    exitCallback?: (() => void) | null;

    getSize: getSizeFnType = () => {
        throw new Error('Exception: can not resolve getSize');
    };

    constructor(
        private board: PlaitBoard,
        private options: {
            getRectangle: () => RectangleClient;
            onChange?: (textChangeRef: TextManageRef) => void;
            getRenderRectangle?: () => RectangleClient;
            getMaxWidth?: () => number;
        }
    ) {
        if (!this.options.getMaxWidth) {
            this.options.getMaxWidth = () => 999;
        }
    }

    draw(text: Element) {
        this.text = text;
        const _rectangle = this.options.getRectangle();
        this.g = createG();
        this.foreignObject = createForeignObject(_rectangle.x, _rectangle.y, _rectangle.width, _rectangle.height);
        this.g.append(this.foreignObject);
        this.g.classList.add('text');
        const props = {
            board: this.board,
            text,
            onChange: (data: { width: number; height: number; newText: Element }) => {
                this.text = data.newText;
                const computedStyle = window.getComputedStyle(this.foreignObject.children[0]);
                const fontFamily = computedStyle.fontFamily;
                const fontSize = parseFloat(computedStyle.fontSize);
                const { width, height } = measureElement(
                    this.editor.children[0] as Element,
                    {
                        fontSize: fontSize,
                        fontFamily,
                        lineHeight: getLineHeightByFontSize(fontSize)
                    },
                    this.options.getMaxWidth!()
                );
                this.options.onChange && this.options.onChange({ ...data, width, height });
                MERGING.set(this.board, true);
            },
            afterInit: (editor: Editor) => {
                this.editor = editor;
            },
            onComposition: (data: { width: number; height: number }) => {
                this.options.onChange && this.options.onChange(data);
                MERGING.set(this.board, true);
            },
            onExitEdit: () => {
                this.exitCallback && this.exitCallback();
            },
            registerGetSize: (getSizeFn: getSizeFnType) => {
                this.getSize = getSizeFn;
            }
        };
        this.componentRef = ((this.board as unknown) as PlaitTextBoard).renderText(this.foreignObject, props);
    }

    updateRectangleWidth(width: number) {
        updateForeignObjectWidth(this.g, width);
    }

    updateAngle(centerPoint: Point, angle: number = 0) {
        setAngleForG(this.g, centerPoint, angle);
    }

    updateRectangle(rectangle?: RectangleClient) {
        const { x, y, width, height } = rectangle || this.options.getRectangle();
        updateForeignObject(this.g, width, height, x, y);
    }

    updateText(newText: Element) {
        this.text = newText;
        const props = {
            text: newText
        };
        this.componentRef.update(props);
    }

    edit(callback?: () => void) {
        this.isEditing = true;
        IS_TEXT_EDITABLE.set(this.board, true);
        const props: Partial<TextProps> = {
            readonly: false
        };
        // TODO: autofocus
        this.componentRef.update(props);
        const mousedown$ = fromEvent<MouseEvent>(document, 'mousedown').subscribe((event: MouseEvent) => {
            const point = toViewBoxPoint(this.board, toHostPoint(this.board, event.x, event.y));
            const textRec = this.options.getRenderRectangle ? this.options.getRenderRectangle() : this.options.getRectangle();
            const clickInText = RectangleClient.isHit(RectangleClient.getRectangleByPoints([point, point]), textRec);
            const isAttached = (event.target as HTMLElement).closest('.plait-board-attached');

            if (!clickInText && !isAttached) {
                // handle composition input state, like: Chinese IME Composition Input
                timer(0).subscribe(() => {
                    exitCallback();
                });
            }
        });
        const exitCallback = () => {
            this.updateRectangle();
            mousedown$.unsubscribe();
            IS_TEXT_EDITABLE.set(this.board, false);
            MERGING.set(this.board, false);
            callback && callback();
            const props = {
                readonly: true
            };
            this.componentRef.update(props);
            this.exitCallback = null;
            this.isEditing = false;
        };
        this.exitCallback = exitCallback;
        return exitCallback;
    }

    destroy() {
        this.g?.remove();
        this.componentRef?.destroy();
    }
}
