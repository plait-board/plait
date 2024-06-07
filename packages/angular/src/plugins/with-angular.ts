import { ComponentRef, PlaitBoard } from '@plait/core';
import { AngularBoard } from '../interfaces/board';
import { PlaitTextBoard, TextProps } from '@plait/common';
import { PlaitRichtextComponent } from '@plait/text';
import { AngularEditor } from 'slate-angular';

export const withAngular = (board: PlaitBoard & PlaitTextBoard) => {
    board.renderText = (container: Element | DocumentFragment, props: TextProps) => {
        const viewContainerRef = AngularBoard.getViewContainerRef(board);
        const componentRef = viewContainerRef.createComponent(PlaitRichtextComponent);
        for (const key in props) {
            const value = props[key as keyof TextProps];
            (componentRef.instance as any)[key as keyof TextProps] = value as any;
        }
        container.appendChild(componentRef.instance.nativeElement());
        componentRef.changeDetectorRef.detectChanges();
        const ref: ComponentRef<TextProps> = {
            destroy: () => {
                componentRef.destroy();
            },
            update: (props: Partial<TextProps>) => {
                const beforeReadonly = componentRef.instance.readonly;
                for (const key in props) {
                    const value = props[key as keyof TextProps];
                    (componentRef.instance as any)[key] = value;
                }
                // solve image lose on move node
                if (container.children.length === 0) {
                    container.append(componentRef.instance.nativeElement());
                }
                componentRef.changeDetectorRef.detectChanges();
                if (beforeReadonly === true && props.readonly === false) {
                    AngularEditor.focus(componentRef.instance.editor);
                } else if (beforeReadonly === false && props.readonly === true) {
                    AngularEditor.blur(componentRef.instance.editor);
                }
            }
        };
        return ref;
    };
    return board;
};
