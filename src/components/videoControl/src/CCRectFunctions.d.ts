interface EleRect {
    left: number;
    top: number;
    right: number;
    bottom: number;
    parent?: EleRect;
    hidden?: number;
    fullScreen?: number;
}
declare function getFinalRect(ele: Element): EleRect;
interface ViewRect {
    rect?: EleRect;
    parentFrame?: ViewRect;
}
declare function getRenderViewRect(): ViewRect;
export { EleRect, getFinalRect, ViewRect, getRenderViewRect };
