class CCWndMgrAx {
    constructor() { }
    init(url) {
        const isIE = "ActiveXObject" in window;
        return isIE ? Promise.resolve("has ActiveXObject") : Promise.reject("not have ActiveXObject");
    }
    uninit() {
    }
    bindWindow(winId, element, type) {
        const AxWinContainer = document.getElementById(element);
        if (AxWinContainer) {
            AxWinContainer.bindWindow(winId);
        }
    }
    unbindWindow(winId) { }
    updateAllWindow() { }
    createAxObject(elementId) {
        const ccAxInst = document.createElement("object");
        ccAxInst.id = elementId;
        ccAxInst.setAttribute("classid", "CLSID:2A80F380-ABE6-4ECC-A3D1-3C1FB2EB7408");
        return ccAxInst;
    }
}
let wndMgrAx = new CCWndMgrAx;
export { wndMgrAx, CCWndMgrAx };
