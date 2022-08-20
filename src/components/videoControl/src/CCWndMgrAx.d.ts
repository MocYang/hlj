declare global {
    interface HTMLElement {
        bindWindow: any;
    }
}
declare class CCWndMgrAx {
    constructor();
    init(url: string): Promise<string>;
    uninit(): void;
    bindWindow(winId: number, element: string, type: number): void;
    unbindWindow(winId: number): void;
    updateAllWindow(): void;
    createAxObject(elementId: string): HTMLObjectElement;
}
declare let wndMgrAx: CCWndMgrAx;
export { wndMgrAx, CCWndMgrAx };
