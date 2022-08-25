<<<<<<< HEAD
import HikCCSession from './HikCCSession';
import { AUTO_ZINDEX_ELEMENT, MUTABLE_ELEMENT } from "./CCWndMgr";
declare class HikCCWrapper {
    ccWsUri: string;
    constructor();
    ccPull(): void;
    ccIsOk(tryCount?: number): Promise<void>;
    ccClear(): void;
    ccBindWindow(winId: number, elementId: string, type?: number): Promise<number | void>;
    ccUnBindWindow(winId: number): Promise<void>;
    ccUpdateAllWindow(): Promise<string>;
    ccCreateSession(): Promise<HikCCSession>;
    ccCreateAxObject(elementId: string): Promise<HTMLObjectElement | null>;
}
declare var ccWrapper: HikCCWrapper;
export default ccWrapper;
export { ccWrapper, AUTO_ZINDEX_ELEMENT, MUTABLE_ELEMENT };
=======
import HikCCSession from './HikCCSession';
import { AUTO_ZINDEX_ELEMENT, MUTABLE_ELEMENT } from "./CCWndMgr";
declare class HikCCWrapper {
    ccWsUri: string;
    constructor();
    ccPull(): void;
    ccIsOk(tryCount?: number): Promise<void>;
    ccClear(): void;
    ccBindWindow(winId: number, elementId: string, type?: number): Promise<number | void>;
    ccUnBindWindow(winId: number): Promise<void>;
    ccUpdateAllWindow(): Promise<string>;
    ccCreateSession(): Promise<HikCCSession>;
    ccCreateAxObject(elementId: string): Promise<HTMLObjectElement | null>;
}
declare var ccWrapper: HikCCWrapper;
export default ccWrapper;
export { ccWrapper, AUTO_ZINDEX_ELEMENT, MUTABLE_ELEMENT };
>>>>>>> cc04770de46141d43f763beb6813d08c222386d6
