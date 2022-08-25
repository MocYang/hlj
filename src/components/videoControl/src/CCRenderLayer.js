class CCRenderLayer {
    constructor(rootObj) {
        this.rootObj = rootObj;
        this.childNegativeLayers = [];
        this.generalObjs = [];
        this.childPositiveLayers = [];
    }
    compare(other) {
        let thisZIndex = this.rootObj.getZIndex();
        let otherZIndex = other.rootObj.getZIndex();
        // z-index 相等
        if (thisZIndex === otherZIndex) {
            return this.rootObj.compare(other.rootObj);
        }
        // z-index 不相等，比较之
        return thisZIndex - otherZIndex;
    }
    addGeneralObj(obj) {
        this.generalObjs.push(obj);
        this.generalObjs.sort(function (a, b) { return a.compare(b); });
    }
    isNegative() {
        return (this.rootObj.getZIndex() < 0);
    }
    isPositive() {
        return (this.rootObj.getZIndex() >= 0);
    }
    addLayer(layer) {
        let cmpFunc = function (a, b) {
            return a.compare(b);
        };
        if (layer.isNegative()) {
            this.childNegativeLayers.push(layer);
            this.childNegativeLayers.sort(cmpFunc);
        }
        else {
            this.childPositiveLayers.push(layer);
            this.childPositiveLayers.sort(cmpFunc);
        }
    }
    childLayers() {
        return this.childNegativeLayers.concat(this.childPositiveLayers);
    }
}
export default CCRenderLayer;
