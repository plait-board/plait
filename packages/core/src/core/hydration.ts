// 一些需要框架组件渲染的场景基于 HydrationComponent 封装
// Plait 框架内部只感知 HydrationComponent 的存在
export interface HydrationRef {
    destroy: () => void;
    update: (props: any) => void;
}

export interface HydrationContext {
    props: any;
    foreignObject: SVGForeignObjectElement;
    componentType: any;
}
