<<<<<<< HEAD
declare const AUTO_ZINDEX_ELEMENT = 1;
declare const MUTABLE_ELEMENT = 2;
declare class CCWndInfo {
    id: string;
    type: number;
    private containerId;
    private deleted;
    constructor(id: string, type: number);
    getContainerId(): number;
    setContainerId(id: number): void;
    getElementId(): string;
    signDeleted(): void;
    hasDeleted(): boolean;
    isMutable(): number;
    setMutable(): void;
    isAutoZIndex(): number;
    setAutoZIndex(): void;
}
export default CCWndInfo;
export { CCWndInfo, AUTO_ZINDEX_ELEMENT, MUTABLE_ELEMENT };
=======
declare const AUTO_ZINDEX_ELEMENT = 1;
declare const MUTABLE_ELEMENT = 2;
declare class CCWndInfo {
    id: string;
    type: number;
    private containerId;
    private deleted;
    constructor(id: string, type: number);
    getContainerId(): number;
    setContainerId(id: number): void;
    getElementId(): string;
    signDeleted(): void;
    hasDeleted(): boolean;
    isMutable(): number;
    setMutable(): void;
    isAutoZIndex(): number;
    setAutoZIndex(): void;
}
export default CCWndInfo;
export { CCWndInfo, AUTO_ZINDEX_ELEMENT, MUTABLE_ELEMENT };
>>>>>>> cc04770de46141d43f763beb6813d08c222386d6
