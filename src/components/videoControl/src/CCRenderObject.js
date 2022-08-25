import { getFinalRect } from "./CCRectFunctions";
class CCRenderObject {
    constructor(element, domFlowIndex) {
        this.element = element;
        this.domFlowIndex = domFlowIndex;
        this.hikccAbsoluteZIndex = -1;
        this.element.HikCCRenderObject = this;
        this.ownerWindow = this.element.ownerDocument.defaultView;
        this.update(domFlowIndex);
    }
    compare(other) {
        return this.domFlowIndex - other.domFlowIndex;
    }
    renderRect() {
        return getFinalRect(this.element);
    }
    getZIndex() {
        return this.iZIndex;
    }
    isStaticPosition() {
        return ("static" === this.position);
    }
    isWithZIndex() {
        return this.withZIndex;
    }
    isNeedToUpdate() {
        let eleStyle = this.ownerWindow.getComputedStyle(this.element);
        if (this.position !== eleStyle.getPropertyValue("position")) {
            return true;
        }
        if (this.zIndex !== eleStyle.getPropertyValue("z-index")) {
            return true;
        }
        return false;
    }
    update(domFlowIndex) {
        this.domFlowIndex = domFlowIndex;
        let eleStyle = this.ownerWindow.getComputedStyle(this.element);
        this.position = eleStyle.getPropertyValue("position");
        this.zIndex = eleStyle.getPropertyValue("z-index");
        this.iZIndex = 0;
        this.withZIndex = false;
        this.hikccAbsoluteZIndex = -1;
        if (("static" === this.position)
            || ("auto" === this.zIndex)) {
            return this;
        }
        this.iZIndex = parseInt(this.zIndex, 10);
        this.withZIndex = true;
        return this;
    }
}
export default CCRenderObject;
