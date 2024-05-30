import { ComponentRef, PlaitBoard } from '@plait/core';
import { AngularBoard } from '../interfaces/board';
import { PlaitTextBoard } from '@plait/common';
import { PlaitRichtextComponent } from '@plait/text';

export const withAngular = (board: PlaitBoard & PlaitTextBoard) => {
    board.renderText = <TextProps>(container: Element | DocumentFragment, props: TextProps) => {
        const viewContainerRef = AngularBoard.getViewContainerRef(board);
        const componentRef = viewContainerRef.createComponent(PlaitRichtextComponent);
        for (const key in props) {
            const value = props[key];
            (componentRef.instance as TextProps)[key] = value;
        }
        container.appendChild(componentRef.instance.nativeElement());
        const ref: ComponentRef<TextProps> = {
            destroy: () => {
                componentRef.destroy();
            },
            update: (props: Partial<TextProps>) => {
                for (const key in props) {
                    const value = props[key];
                    (componentRef.instance as any)[key] = value;
                }
                // solve image lose on move node
                if (container.children.length === 0) {
                    container.append(componentRef.instance.nativeElement());
                }
                componentRef.changeDetectorRef.detectChanges();
            }
        };
        return ref;
    };
    return board;
};
