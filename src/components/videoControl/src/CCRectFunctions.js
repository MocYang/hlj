function getElementRectOps(window, element) {
    let retObj = {
        dZoom: 1,
        bHidden: element.hidden,
        bStyleVisible: true,
        strPosition: "static",
        bAbsPosition: false,
        bVisibleOverflow: true
    };
    let elementStyle = window.getComputedStyle(element);
    if (!elementStyle) {
        return retObj;
    }
    retObj.strPosition = elementStyle.getPropertyValue("position");
    let strZoom = elementStyle.getPropertyValue("zoom");
    let strDisplay = elementStyle.getPropertyValue("display");
    let strVisibility = elementStyle.getPropertyValue("visibility");
    let strOverflow = elementStyle.getPropertyValue("overflow");
    if (strZoom.length && "1" !== strZoom) {
        retObj.dZoom = parseFloat(strZoom);
    }
    if ("none" === strDisplay) {
        retObj.bHidden = true;
    }
    if ("hidden" === strVisibility) {
        retObj.bStyleVisible = false;
    }
    if ("static" !== retObj.strPosition
        && "relative" !== retObj.strPosition) {
        retObj.bAbsPosition = true;
    }
    if ("visible" !== strOverflow
        && "auto" !== strOverflow) {
        retObj.bVisibleOverflow = false;
    }
    return retObj;
}
function getElementRect(element) {
    let rect = element.getBoundingClientRect();
    let f = window.devicePixelRatio;
    return {
        left: rect.left * f,
        top: rect.top * f,
        right: rect.right * f,
        bottom: rect.bottom * f
    };
}
function getElementClientRect(element) {
    let rect = element.getBoundingClientRect();
    let f = window.devicePixelRatio;
    let left = rect.left * f;
    let right = left + element.clientWidth * f;
    let top = rect.top * f;
    let bottom = top + element.clientHeight * f;
    return { left, right, top, bottom };
}
function getFinalRect(ele) {
    let window = ele.ownerDocument.defaultView;
    let vecZooms = [];
    let options = getElementRectOps(window, ele);
    let ret = getElementRect(ele);
    if (options.bHidden || false === options.bStyleVisible) {
        ret.hidden = 1;
        return ret;
    }
    vecZooms.push(options.dZoom);
    let html = window.document.documentElement;
    let fullScreenEle = window.document.fullscreenElement;
    let bSkip = (ele === fullScreenEle);
    if (bSkip) {
        ret.fullScreen = 1;
    }
    let bAbsPosition = options.bAbsPosition;
    let element = ele.parentElement;
    //遍历所有父元素
    for (let tmp = ret; element && (element !== html); element = element.parentElement) {
        options = getElementRectOps(window, element);
        if (options.bHidden) {
            ret.hidden = 1;
            return ret;
        }
        if (options.dZoom != 1) {
            vecZooms = vecZooms.map(d => d * options.dZoom);
        }
        if (bSkip) {
            continue;
        }
        if (element === fullScreenEle) {
            bSkip = true;
        }
        if (!bAbsPosition) {
            bAbsPosition = options.bAbsPosition;
        }
        if (options.bVisibleOverflow) {
            continue;
        }
        if ("static" === options.strPosition
            && bAbsPosition) {
            continue;
        }
        vecZooms.push(options.dZoom);
        //false == bVisibleOverflow 父元素带滚动条且内容需裁剪
        //父元素的区域也需要发给cc
        let rc = getElementClientRect(element);
        tmp.parent = rc;
        tmp = rc;
    }
    //修正所有大小 *zoom;
    let nZoomIndex = 0;
    for (let tmp = ret;;) {
        tmp.left *= vecZooms[nZoomIndex];
        tmp.right *= vecZooms[nZoomIndex];
        tmp.top *= vecZooms[nZoomIndex];
        tmp.bottom *= vecZooms[nZoomIndex];
        if (false === tmp.hasOwnProperty("parent")) {
            break;
        }
        nZoomIndex++;
        tmp = tmp.parent;
    }
    return ret;
}
function getRenderViewRect() {
    let rcRet = {};
    let tempRc = rcRet;
    for (let win_now = window, win_parent = window.parent; win_now !== window.top;) {
        let frames = win_parent.document.querySelectorAll("frame,iframe");
        for (const frame of frames) {
            if (frame.contentWindow === win_now) {
                tempRc.rect = getFinalRect(frame);
                break;
            }
        }
        win_now = win_parent;
        win_parent = win_parent.parent;
        let tempParent = {};
        tempRc.parentFrame = tempParent;
        tempRc = tempParent;
    }
    let f = window.devicePixelRatio;
    tempRc.rect = {
        left: 0,
        top: 0,
        right: window.top.document.documentElement.clientWidth * f,
        bottom: window.top.document.documentElement.clientHeight * f
    };
    return rcRet;
}
export { getFinalRect, getRenderViewRect };
