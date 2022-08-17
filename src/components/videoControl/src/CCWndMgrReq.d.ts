import CCWebSocket from "./CCWebSocket";
declare abstract class CCWndMgrReq {
    protected ccWs: CCWebSocket;
    protected params: any;
    protected changedTitle: string;
    protected visibilityHasChanged: boolean;
    protected onRsp: ((error: number, rsp: any) => void) | undefined;
    constructor(ccWs: CCWebSocket, params: any, changedTitle: string);
    changeVisibility(bChanged: boolean): void;
    isVisibilityChanged(): boolean;
    changeTitle(): void;
    setReceiver(onRsp: (error: number, rsp: any) => void): void;
    abstract request(): Promise<unknown>;
}
declare class CCAddWndReq extends CCWndMgrReq {
    request(): Promise<void>;
}
declare class CCChangeWndReq extends CCWndMgrReq {
    request(): Promise<void>;
}
export { CCWndMgrReq, CCAddWndReq, CCChangeWndReq };
