import CCRenderObject from "./CCRenderObject";
import CCRenderLayer from "./CCRenderLayer";
class CCRenderTree {
    constructor(win, rootEle = null) {
        this.win = win;
        this.buildTree(rootEle);
    }
    buildTree(rootEle = null) {
        let rootElement = rootEle ? rootEle : this.win.document.body;
        this.absZindexNow = 0;
        this.initRenderObject();
        this.rootLayer = new CCRenderLayer(rootElement.HikCCRenderObject);
        this.runTreeBuilder(rootElement, this.rootLayer, this.rootLayer);
        this.runAbsZIndexBuilder(this.rootLayer);
    }
    getAllCovered(ele) {
        let arrayEleRet = [];
        let objToCmp = ele.HikCCRenderObject;
        let rootEle = this.rootLayer.rootObj.element;
        let elesToQuery = Array.from(rootEle.querySelectorAll(":not([hikcc_cover=excluded])"));
        elesToQuery.unshift(rootEle);
        if (objToCmp.hikccAbsoluteZIndex < 0) {
            return elesToQuery;
        }
        for (const e of elesToQuery) {
            if (e.HikCCRenderObject.hikccAbsoluteZIndex > objToCmp.hikccAbsoluteZIndex) {
                arrayEleRet.push(e);
            }
        }
        return arrayEleRet;
    }
    getAllCoveredByAbsZIndex(absZIndex) {
        let arrayEleRet = [];
        let rootEle = this.rootLayer.rootObj.element;
        let elesToQuery = Array.from(rootEle.querySelectorAll(":not([hikcc_cover=excluded])"));
        elesToQuery.unshift(rootEle);
        if (absZIndex < 0) {
            return elesToQuery;
        }
        for (const e of elesToQuery) {
            if (e.HikCCRenderObject) {
                if (e.HikCCRenderObject.hikccAbsoluteZIndex > absZIndex) {
                    arrayEleRet.push(e);
                }
            }
            else {
                console.log({ msg: "element's renderObj not created when update render tree. why?", element: e });
            }
        }
        return arrayEleRet;
    }
    initRenderObject() {
        let domFlowIndex = 0;
        let body = this.win.document.body;
        if (body.HikCCRenderObject) {
            body.HikCCRenderObject.update(domFlowIndex);
        }
        else {
            body.HikCCRenderObject = new CCRenderObject(body, domFlowIndex);
        }
        let children = Array.from(body.querySelectorAll("*"));
        for (const element of children) {
            domFlowIndex++;
            if (element.HikCCRenderObject) {
                element.HikCCRenderObject.update(domFlowIndex);
            }
            else {
                element.HikCCRenderObject = new CCRenderObject(element, domFlowIndex);
            }
        }
    }
    *layerTreeBuilder(parentEle, lpLayer, epLayer) {
        let children = Array.from(parentEle.children);
        for (const element of children) {
            let obj = element.HikCCRenderObject;
            let nextLpLayer = lpLayer;
            let nextEpLayer = epLayer;
            if (obj.isStaticPosition()) {
                epLayer.addGeneralObj(obj);
            }
            else {
                let newLayer = new CCRenderLayer(obj);
                lpLayer.addLayer(newLayer);
                if (obj.isWithZIndex()) {
                    nextLpLayer = newLayer;
                }
                nextEpLayer = newLayer;
            }
            yield { parentEle: element, lpLayer: nextLpLayer, epLayer: nextEpLayer };
        }
        return;
    }
    runTreeBuilder(parentEle, lpLayer, epLayer) {
        let gen = this.layerTreeBuilder(parentEle, lpLayer, epLayer);
        let res = gen.next();
        let genArray = [];
        do {
            if (res.done) {
                gen = genArray.pop();
                if (!gen) {
                    break;
                }
            }
            else {
                genArray.push(gen);
                gen = this.layerTreeBuilder(res.value.parentEle, res.value.lpLayer, res.value.epLayer);
            }
            res = gen.next();
        } while (1);
    }
    *absoluteZIndexBuilder(rootLayer) {
        rootLayer.rootObj.hikccAbsoluteZIndex = this.absZindexNow++;
        for (const layer of rootLayer.childNegativeLayers) {
            //this.absoluteZIndexBuilder(layer);
            yield layer;
        }
        rootLayer.generalObjs.forEach(obj => {
            obj.hikccAbsoluteZIndex = this.absZindexNow++;
        });
        for (const layer of rootLayer.childPositiveLayers) {
            //this.absoluteZIndexBuilder(layer);
            yield layer;
        }
        return;
    }
    runAbsZIndexBuilder(rootLayer) {
        let gen = this.absoluteZIndexBuilder(rootLayer);
        let res = gen.next();
        let genArray = [];
        do {
            if (res.done) {
                gen = genArray.pop();
                if (!gen) {
                    break;
                }
            }
            else {
                genArray.push(gen);
                gen = this.absoluteZIndexBuilder(res.value);
            }
            res = gen.next();
        } while (1);
    }
}
export default CCRenderTree;
