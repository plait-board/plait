export interface ComponentRef<T> {
    destroy: () => void;
    update: (props: Partial<T>) => void;
}

export interface ComponentContext<T> {
    props: T;
    foreignObject: SVGForeignObjectElement;
    componentType: any;
}
