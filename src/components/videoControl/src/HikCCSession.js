import CCWebSocket from "./CCWebSocket";
class HikCCSession {
    constructor(url) {
        this.sessionId = "";
        this.webSocket = new CCWebSocket(url);
        this.webSocket.watchError(function (errInfo) {
            console.log('cc_onclose :' + JSON.stringify(errInfo));
            let reporter = window['HikCCErrorReport'];
            if (reporter) {
                reporter({ moduleName: 'ClientContainer' });
            }
        });
    }
    async open() {
        if (this.sessionId.length) {
            return this.sessionId;
        }
        this.sessionId = (await this.webSocket.getSessionID());
        return this.sessionId;
    }
    close() {
        this.webSocket.close();
    }
    initModule(name) {
        return this.webSocket.callMethod("cc.initModule", { moduleName: name });
    }
    callModuleMethod(name, method, params) {
        let req = {
            moduleName: name,
            moduleMethod: method
        };
        if (params) {
            req.moduleParams = params;
        }
        return this.webSocket.callMethod("cc.callModule", req);
    }
    uninitModule(name) {
        return this.webSocket.callMethod("cc.uninitModule", { moduleName: name });
    }
}
export default HikCCSession;
