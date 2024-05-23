// 一些需要框架组件渲染的场景基于 HydrationComponent 封装
// Plait 框架内部只感知 HydrationComponent 的存在
export interface HydrationComponent<T> {
    instance: T;

    
}