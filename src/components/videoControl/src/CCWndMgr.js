import CCWebSocket from "./CCWebSocket";
import { CCWndInfo, AUTO_ZINDEX_ELEMENT, MUTABLE_ELEMENT } from "./CCWndInfo";
import { CCAddWndReq, CCChangeWndReq } from "./CCWndMgrReq";
import { wndMgrAx } from "./CCWndMgrAx";
import { getFinalRect, getRenderViewRect } from "./CCRectFunctions";
import { updateRenderTree, getAllCoveredEleRectArray } from "./CCRenderTreeUpdater";
const Update_NonMutable = 0;
const Update_Mutable = 1;
const Update_All = 2;
let s_windowX = 0;
let s_windowY = 0;
class CCWndMgr {
    constructor() {
        this.bVisableNow = false;
        this.observerArray = [];
        this.strTitle = window.top.document.title;
        this.strTitleChanged = this.strTitle + "_" + Date.now() + "_" + Math.random();
        this.pending = new Set();
        this.toRetry = new Array();
        this.wnds = new Map();
        this.loopId = 0;
    }
    //初始化
    init(url) {
        if (!this.webSocket) {
            this.webSocket = new CCWebSocket(url);
            this.webSocket.connectedPromise.then(() => {
                this._initEventListener();
                this._updateRenderTree();
                this.loopId = window.setInterval(() => {
                    this._loop();
                }, 16);
            }, () => {
                this.webSocket = undefined;
            });
            this.webSocket.watchError(function (errInfo) {
                console.log('CCWndMgr cc_onclose :' + JSON.stringify(errInfo));
                console.log(errInfo);
            });
        }
        return this.webSocket.connectedPromise;
    }
    //反初始化
    uninit() {
        if (this.webSocket) {
            this._uninitEventListener();
            this.webSocket.close();
            if (this.loopId) {
                clearInterval(this.loopId);
                this.loopId = 0;
            }
            this.webSocket = undefined;
        }
    }
    bindWindow(winId, element, type) {
        return new Promise((resolve, reject) => {
            if (!this.webSocket) {
                reject("has not connected to cc");
                return;
            }
            let wndInfo = this.wnds.get(winId);
            if (wndInfo) {
                reject("this winId is already bind");
                return;
            }
            console.log("bind window type:" + type);
            wndInfo = new CCWndInfo(element, type);
            this.wnds.set(winId, wndInfo);
            let params = { winId, titleName: this.strTitleChanged };
            let req = new CCAddWndReq(this.webSocket, params, this.strTitleChanged);
            req.setReceiver((error, rsp) => {
                console.log("bind window result:" + JSON.stringify(rsp));
                let errCode = error;
                let errInfo = rsp;
                do {
                    if (errCode) {
                        break;
                    }
                    if (!rsp.hasOwnProperty("winId")) {
                        errCode = 1;
                        errInfo = "bind window fail,rsp has no container id!";
                        break;
                    }
                    this.pending.delete(req);
                    wndInfo.setContainerId(rsp.winId);
                    if (wndInfo.hasDeleted()) {
                        this._delWindow(wndInfo);
                        this.wnds.delete(winId);
                        reject("the element has been deleted before to bind!");
                    }
                    else {
                        if (req.isVisibilityChanged()) {
                            this._changeAllWindow();
                        }
                        else {
                            this._updateContainer();
                        }
                        resolve(winId);
                    }
                } while (0);
                if (errCode) {
                    if (req.isVisibilityChanged()) {
                        //窗口可见状态变化过，需要重试
                        this._innerSendRequest(req);
                    }
                    else {
                        this.pending.delete(req);
                        this.wnds.delete(winId);
                        reject(errInfo);
                    }
                }
                if (0 === this.pending.size) {
                    window.top.document.title = this.strTitle;
                }
            });
            this.pending.add(req);
            this._innerSendRequest(req);
        });
    }
    unbindWindow(winId) {
        let wndInfo = this.wnds.get(winId);
        if (wndInfo) {
            this._delWindow(wndInfo);
            this.wnds.delete(winId);
        }
    }
    updateAllWindow() {
        this._updateContainer(Update_All);
    }
    createAxObject(elementId) {
        return null;
    }
    _innerSendRequest(req) {
        if (this.bVisableNow) {
            req.request();
        }
        else {
            this.toRetry.push(req);
        }
    }
    _changeAllWindow() {
        if (0 === this.wnds.size) {
            return;
        }
        let paramsSend = { titleName: this.strTitleChanged };
        let paramsArray = [];
        this.wnds.forEach(function (wndInfo, clientWinId) {
            let containerId = wndInfo.getContainerId();
            if (containerId) {
                wndInfo.setContainerId(0);
                paramsArray.push({ winId: containerId, winKey: clientWinId });
            }
        });
        if (0 === paramsArray.length) {
            return;
        }
        paramsSend.winInfo = paramsArray;
        let req = new CCChangeWndReq(this.webSocket, paramsSend, this.strTitleChanged);
        req.setReceiver((error, rsp) => {
            console.log("change window result:" + JSON.stringify(rsp));
            if (0 === error) {
                this.pending.delete(req);
                for (const obj of rsp) {
                    let wndInfo = this.wnds.get(obj.winKey);
                    if (!wndInfo) {
                        continue;
                    }
                    wndInfo.setContainerId(obj.winId);
                    if (wndInfo.hasDeleted()) {
                        this._delWindow(wndInfo);
                        this.wnds.delete(obj.winKey);
                    }
                }
                if (req.isVisibilityChanged()) {
                    this._changeAllWindow();
                }
                else {
                    this._updateContainer();
                }
            }
            else {
                this._innerSendRequest(req);
            }
            if (0 === this.pending.size) {
                window.top.document.title = this.strTitle;
            }
        });
        this.pending.add(req);
        this._innerSendRequest(req);
    }
    _delWindow(wndInfo) {
        if (0 === wndInfo.getContainerId()) {
            wndInfo.signDeleted();
            return;
        }
        let params = { winId: wndInfo.getContainerId() };
        this.webSocket.callMethod("cc.delWindow", params);
    }
    _updateContainer(filter = Update_NonMutable) {
        let paramsArray = [];
        let elementTmp = null;
        let maxAbsZIndex = -1;
        let tmpAbsZIndex = -1;
        this.wnds.forEach((wndInfo, clientWinId) => {
            if (wndInfo.getContainerId()
                && (Update_All === filter || filter === (wndInfo.isMutable() ? Update_Mutable : Update_NonMutable))) {
                elementTmp = document.getElementById(wndInfo.getElementId());
                if (!elementTmp) {
                    console.log("_updateContainer,Element(" + wndInfo.getElementId() + ") not found! del its wnd");
                    this._delWindow(wndInfo);
                    this.wnds.delete(clientWinId);
                }
                else {
                    let nowRc = getFinalRect(elementTmp);
                    let params = {};
                    params.visible = this.bVisableNow ? 1 : 0;
                    params.winId = wndInfo.getContainerId();
                    if (this.bVisableNow) {
                        params.elementRect = nowRc;
                    }
                    if (wndInfo.isAutoZIndex()) {
                        tmpAbsZIndex = elementTmp.HikCCRenderObject.hikccAbsoluteZIndex;
                        if (maxAbsZIndex < tmpAbsZIndex) {
                            maxAbsZIndex = tmpAbsZIndex;
                        }
                    }
                    paramsArray.push(params);
                }
            }
        });
        //uos浏览器需要前端实时发送浏览器外壳的宽高
        let browParams = {};
        browParams.subHeight = window.top.outerHeight - window.top.innerHeight;
        browParams.subWidth = window.top.outerWidth - window.top.innerWidth;
        browParams.devicePixelRatio = window.devicePixelRatio;
        if (paramsArray.length) {
            this.webSocket.notifyMsg("cc.updateWindow", {
                allCovered: getAllCoveredEleRectArray(maxAbsZIndex),
                renderView: getRenderViewRect(),
                browserWrap: browParams,
                winInfo: paramsArray
            });
        }
    }
    _updateRenderTree() {
        updateRenderTree();
        this._updateContainer();
    }
    _loop() {
        let xNow = window.screenX;
        let yNow = window.screenY;
        if (xNow !== s_windowX
            || yNow !== s_windowY) {
            s_windowX = xNow;
            s_windowY = yNow;
            this._updateContainer();
        }
        else {
            this._updateContainer(Update_Mutable);
        }
    }
    _initEventListener() {
        //全屏
        document.addEventListener("fullscreenchange", onFullScreenChange, true);
        //显示/隐藏
        document.addEventListener("visibilitychange", onVisibilityChange, true);
        this.bVisableNow = (document.visibilityState === 'visible');
        //初始化所有窗口的事件监听器
        this._initAllWindowEventListener();
    }
    _initAllWindowEventListener() {
        for (let win_now = window;; win_now = win_now.parent) {
            this._initWindowEventListener(win_now);
            if (win_now === window.top) {
                break;
            }
        }
        console.log("initAllWindowEventListener end");
    }
    _initWindowEventListener(win_now) {
        let doc_now = win_now.document;
        let allEle = doc_now.querySelectorAll("*");
        win_now.addEventListener("resize", updateAllNonMutableWindow, true);
        doc_now.addEventListener("scroll", updateAllNonMutableWindow, true);
        allEle.forEach((ele) => {
            let s = win_now.getComputedStyle(ele);
            if (s) {
                let a = s.getPropertyValue("overflow");
                if (a != "visible") {
                    ele.addEventListener("scroll", updateAllNonMutableWindow, true);
                    //console.log("registerDOMWithOverflow:" + ele.nodeName + "#" + ele.id);
                }
            }
        });
        let MutationObserver = win_now.MutationObserver || win_now.WebKitMutationObserver;
        let observer = new MutationObserver(mutationObserverCallback);
        let options = {
            'childList': true,
            'attributes': true,
            'attributeFilter': ['style', 'class', 'hikcc_cover'],
            'subtree': true
        };
        observer.observe(doc_now.documentElement, options);
        this.observerArray.push(observer);
    }
    _uninitEventListener() {
        document.removeEventListener("fullscreenchange", onFullScreenChange, true);
        document.removeEventListener("visibilitychange", onVisibilityChange, true);
        this._uninitAllWindowEventListener();
    }
    _uninitAllWindowEventListener() {
        for (let i = 0, len = this.observerArray.length; i < len; i++) {
            this.observerArray[i].disconnect();
        }
        this.observerArray = [];
        console.log("uninitAllWindowEventListener end");
    }
    _visibilityChangeEvent() {
        for (const req of this.pending) {
            req.changeVisibility(true);
        }
        if (this.bVisableNow) {
            for (const req of this.toRetry) {
                req.request();
            }
            this.toRetry = [];
            this._changeAllWindow();
        }
        else {
            this._updateContainer();
        }
    }
}
const isIE = "ActiveXObject" in window;
let wndMgr = isIE ? wndMgrAx : new CCWndMgr;
function onFullScreenChange() {
    if (document.fullscreenElement) {
        console.log(`Element: ${document.fullscreenElement.id} entered full-screen mode.`);
    }
    wndMgr._updateRenderTree();
}
function onVisibilityChange() {
    console.log("document.visibilityState : " + document.visibilityState);
    if (document.visibilityState === 'visible') {
        wndMgr.bVisableNow = true;
    }
    else {
        wndMgr.bVisableNow = false;
    }
    wndMgr._visibilityChangeEvent();
}
function updateAllNonMutableWindow() {
    wndMgr._updateContainer();
}
function doWhenNodeAdded(addedNodes) {
    for (let addedNode of addedNodes) {
        if (addedNode.nodeType == 1) {
            let nodeStyle = addedNode.ownerDocument.defaultView.getComputedStyle(addedNode);
            if (nodeStyle) {
                let property = nodeStyle.getPropertyValue("overflow");
                if (property != "visible") {
                    addedNode.addEventListener("scroll", updateAllNonMutableWindow, true);
                    //console.log("addedNode overflow:" + property + " registerDOMWithOverflow:" + addedNode.nodeName + "#" + addedNode.id);
                }
            }
        }
    }
}
function doWhenNodeStyleOrClassChanged(domNode) {
    let bNeedToUpdateRenderTree = false;
    if (domNode.nodeType == 1) {
        let ele = domNode;
        if (ele.HikCCRenderObject) {
            bNeedToUpdateRenderTree = ele.HikCCRenderObject.isNeedToUpdate();
        }
        else {
            bNeedToUpdateRenderTree = true;
        }
    }
    return bNeedToUpdateRenderTree;
}
function mutationObserverCallback(mutations, observer) {
    let bNeedToUpdateRenderTree = false;
    for (let mutation of mutations) {
        if (mutation.type === 'childList') {
            //'A child node has been added or removed.'
            bNeedToUpdateRenderTree = true;
            doWhenNodeAdded(mutation.addedNodes);
        }
        else if (bNeedToUpdateRenderTree === false && mutation.type === 'attributes') {
            if (mutation.attributeName !== "hikcc_cover") {
                //a node's style or class has changed
                bNeedToUpdateRenderTree = doWhenNodeStyleOrClassChanged(mutation.target);
            }
            else {
                bNeedToUpdateRenderTree = true;
            }
        }
    }
    if (bNeedToUpdateRenderTree) {
        wndMgr._updateRenderTree();
    }
    else {
        wndMgr._updateContainer();
    }
}
export default wndMgr;
export { wndMgr as CCWndMgr, AUTO_ZINDEX_ELEMENT, MUTABLE_ELEMENT };
