// 一些需要框架组件渲染的场景基于 HydrationComponent 封装
// Plait 框架内部只感知 HydrationComponent 的存在
export interface ComponentRef<T> {
    destroy: () => void;
    update: (props: Partial<T>) => void;
}

export interface ComponentContext<T> {
    props: T;
    foreignObject: SVGForeignObjectElement;
    componentType: any;
}
