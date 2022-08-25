const AUTO_ZINDEX_ELEMENT = 0x0001;
const MUTABLE_ELEMENT = 0x0002;
class CCWndInfo {
    constructor(id, type) {
        this.id = id;
        this.type = type;
        this.containerId = 0;
        this.deleted = false;
    }
    getContainerId() {
        return this.containerId;
    }
    setContainerId(id) {
        this.containerId = id;
    }
    getElementId() {
        return this.id;
    }
    signDeleted() {
        this.deleted = true;
    }
    hasDeleted() {
        return this.deleted;
    }
    isMutable() {
        return (this.type & MUTABLE_ELEMENT);
    }
    setMutable() {
        this.type |= MUTABLE_ELEMENT;
    }
    isAutoZIndex() {
        return (this.type & AUTO_ZINDEX_ELEMENT);
    }
    setAutoZIndex() {
        this.type |= AUTO_ZINDEX_ELEMENT;
    }
}
export default CCWndInfo;
export { CCWndInfo, AUTO_ZINDEX_ELEMENT, MUTABLE_ELEMENT };
