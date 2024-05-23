import { HydrationContext, PlaitBoard } from "@plait/core";
import { AngularBoard } from "../interfaces/board";

export const withAngular = (board: PlaitBoard) => {
    board.renderHydration = (context: HydrationContext) => {
        const viewContainerRef = AngularBoard.getViewContainerRef(board);
        const componentRef = viewContainerRef.createComponent<any>(context.componentType);
        for (const key in context.props) {
            if (context.props.hasOwnProperty(key)) {
                const value = context.props[key];
                componentRef.instance[key] = value;
            }
        }
        context.foreignObject.appendChild(componentRef.instance.nativeElement());
        return {
            destroy: () => {
                componentRef.destroy();
            },
            update: (props: any) => {
                for (const key in props) {
                    if (props.hasOwnProperty(key)) {
                        const value = props[key];
                        componentRef.instance[key] = value;
                    }
                }
                // solve image lose on move node
                if (context.foreignObject.children.length === 0) {
                    context.foreignObject.append(componentRef.instance.nativeElement());
                }
                componentRef.changeDetectorRef.detectChanges();
            }
        };
    };
    return board;
};
