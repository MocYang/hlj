import "./CCEnvInitializer";
declare class CCWebSocket {
    private reqID;
    private pendings;
    private ws;
    private sessionID;
    connectedPromise: Promise<string>;
    errorOccurPromise: Promise<CloseEvent>;
    constructor(url: string);
    callMethod(method: string, params?: any): Promise<unknown>;
    notifyMsg(method: string, params?: any): Promise<void>;
    getSessionID(): Promise<unknown>;
    isConnected(cb: (res: string) => void): Promise<string>;
    watchError(cb: (res: CloseEvent) => void): Promise<CloseEvent>;
    close(): void;
    private onMsg;
    private onRequestOrNotify;
}
export default CCWebSocket;
