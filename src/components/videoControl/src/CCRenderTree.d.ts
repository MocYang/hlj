<<<<<<< HEAD
import CCRenderObject from "./CCRenderObject";
declare global {
    interface Element {
        HikCCRenderObject: CCRenderObject | undefined;
    }
}
declare class CCRenderTree {
    win: Window;
    private rootLayer;
    private absZindexNow;
    constructor(win: Window, rootEle?: Element | null);
    buildTree(rootEle?: Element | null): void;
    getAllCovered(ele: Element): Element[];
    getAllCoveredByAbsZIndex(absZIndex: number): Element[];
    private initRenderObject;
    private layerTreeBuilder;
    private runTreeBuilder;
    private absoluteZIndexBuilder;
    private runAbsZIndexBuilder;
}
export default CCRenderTree;
=======
import CCRenderObject from "./CCRenderObject";
declare global {
    interface Element {
        HikCCRenderObject: CCRenderObject | undefined;
    }
}
declare class CCRenderTree {
    win: Window;
    private rootLayer;
    private absZindexNow;
    constructor(win: Window, rootEle?: Element | null);
    buildTree(rootEle?: Element | null): void;
    getAllCovered(ele: Element): Element[];
    getAllCoveredByAbsZIndex(absZIndex: number): Element[];
    private initRenderObject;
    private layerTreeBuilder;
    private runTreeBuilder;
    private absoluteZIndexBuilder;
    private runAbsZIndexBuilder;
}
export default CCRenderTree;
>>>>>>> cc04770de46141d43f763beb6813d08c222386d6
