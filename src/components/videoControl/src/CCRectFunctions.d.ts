<<<<<<< HEAD
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
=======
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
>>>>>>> cc04770de46141d43f763beb6813d08c222386d6
