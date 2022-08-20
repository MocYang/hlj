interface ModuleInfo {
    moduleName: string;
}
declare global {
    interface Window {
        HikCCErrorReport: ((m: ModuleInfo) => void) | undefined;
    }
}
declare class HikCCSession {
    sessionId: string;
    private webSocket;
    constructor(url: string);
    open(): Promise<string>;
    close(): void;
    initModule(name: string): Promise<unknown>;
    callModuleMethod(name: string, method: string, params: any): Promise<unknown>;
    uninitModule(name: string): Promise<unknown>;
}
export default HikCCSession;
