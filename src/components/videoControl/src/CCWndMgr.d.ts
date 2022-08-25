import { CCWndInfo, AUTO_ZINDEX_ELEMENT, MUTABLE_ELEMENT } from "./CCWndInfo";
import { CCWndMgrReq } from "./CCWndMgrReq";
import { CCWndMgrAx } from "./CCWndMgrAx";
declare class CCWndMgr {
    private webSocket;
    bVisableNow: boolean;
    private observerArray;
    private strTitle;
    private strTitleChanged;
    private pending;
    private toRetry;
    private wnds;
    private loopId;
    constructor();
    init(url: string): Promise<string>;
    uninit(): void;
    bindWindow(winId: number, element: string, type: number): Promise<number>;
    unbindWindow(winId: number): void;
    updateAllWindow(): void;
    createAxObject(elementId: string): null;
    _innerSendRequest(req: CCWndMgrReq): void;
    _changeAllWindow(): void;
    _delWindow(wndInfo: CCWndInfo): void;
    _updateContainer(filter?: number): void;
    _updateRenderTree(): void;
    _loop(): void;
    _initEventListener(): void;
    _initAllWindowEventListener(): void;
    _initWindowEventListener(win_now: Window): void;
    _uninitEventListener(): void;
    _uninitAllWindowEventListener(): void;
    _visibilityChangeEvent(): void;
}
declare let wndMgr: CCWndMgrAx | CCWndMgr;
export default wndMgr;
export { wndMgr as CCWndMgr, AUTO_ZINDEX_ELEMENT, MUTABLE_ELEMENT };
