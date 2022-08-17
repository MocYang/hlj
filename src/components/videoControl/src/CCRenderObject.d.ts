import { EleRect } from "./CCRectFunctions";
declare global {
    interface Element {
        HikCCRenderObject: CCRenderObject | undefined;
    }
}
declare class CCRenderObject {
    element: Element;
    private domFlowIndex;
    private ownerWindow;
    private position;
    private zIndex;
    private iZIndex;
    private withZIndex;
    hikccAbsoluteZIndex: number;
    constructor(element: Element, domFlowIndex: number);
    compare(other: CCRenderObject): number;
    renderRect(): EleRect;
    getZIndex(): number;
    isStaticPosition(): boolean;
    isWithZIndex(): boolean;
    isNeedToUpdate(): boolean;
    update(domFlowIndex: number): CCRenderObject;
}
export default CCRenderObject;
