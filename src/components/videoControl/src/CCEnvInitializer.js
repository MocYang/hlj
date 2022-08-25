<<<<<<< HEAD
class CCAxWebSocket {
    constructor(url) {
        this.onerror = null;
        this.onopen = null;
        this.onclose = null;
        this.onmessage = null;
        this.ws = window.HikClientContainerAx.createWebSocket();
        this.ws.attachEvent("connected", () => {
            this.onConnected();
        });
        this.ws.attachEvent("disconnected", () => {
            this.onDisconnected();
        });
        this.ws.attachEvent("error", (err) => {
            this.onError(err);
        });
        this.ws.attachEvent("textMessageReceived", (msg) => {
            this.onTextMsg(msg);
        });
        this.ws.open(url);
    }
    onConnected() {
        setTimeout(() => {
            if (this.onopen) {
                this.onopen({});
            }
        }, 0);
    }
    onDisconnected() {
        setTimeout(() => {
            if (this.onclose) {
                this.onclose({ code: 1000, reason: "", wsaClean: false });
            }
        }, 0);
    }
    onError(err) {
        setTimeout(() => {
            if (this.onerror) {
                this.onerror({ errorCode: err });
            }
        }, 0);
    }
    onTextMsg(data) {
        setTimeout(() => {
            if (this.onmessage) {
                this.onmessage({ data });
            }
        }, 0);
    }
    send(data) {
        this.ws.sendText(data);
    }
}
function webSocketEnvInitializer() {
    const isIE = "ActiveXObject" in window;
    if (!isIE) {
        return;
    }
    const ccAxInst = document.createElement("object");
    ccAxInst.id = "HikClientContainerAx";
    ccAxInst.setAttribute("classid", "CLSID:63d00cd0-b764-4dd2-a2ac-c3364eba0665");
    document.body.appendChild(ccAxInst);
    const hasWebSocket = "WebSocket" in window;
    if (hasWebSocket) {
        return;
    }
    window.WebSocket = CCAxWebSocket;
}
webSocketEnvInitializer();
=======
class CCAxWebSocket {
    constructor(url) {
        this.onerror = null;
        this.onopen = null;
        this.onclose = null;
        this.onmessage = null;
        this.ws = window.HikClientContainerAx.createWebSocket();
        this.ws.attachEvent("connected", () => {
            this.onConnected();
        });
        this.ws.attachEvent("disconnected", () => {
            this.onDisconnected();
        });
        this.ws.attachEvent("error", (err) => {
            this.onError(err);
        });
        this.ws.attachEvent("textMessageReceived", (msg) => {
            this.onTextMsg(msg);
        });
        this.ws.open(url);
    }
    onConnected() {
        setTimeout(() => {
            if (this.onopen) {
                this.onopen({});
            }
        }, 0);
    }
    onDisconnected() {
        setTimeout(() => {
            if (this.onclose) {
                this.onclose({ code: 1000, reason: "", wsaClean: false });
            }
        }, 0);
    }
    onError(err) {
        setTimeout(() => {
            if (this.onerror) {
                this.onerror({ errorCode: err });
            }
        }, 0);
    }
    onTextMsg(data) {
        setTimeout(() => {
            if (this.onmessage) {
                this.onmessage({ data });
            }
        }, 0);
    }
    send(data) {
        this.ws.sendText(data);
    }
}
function webSocketEnvInitializer() {
    const isIE = "ActiveXObject" in window;
    if (!isIE) {
        return;
    }
    const ccAxInst = document.createElement("object");
    ccAxInst.id = "HikClientContainerAx";
    ccAxInst.setAttribute("classid", "CLSID:63d00cd0-b764-4dd2-a2ac-c3364eba0665");
    document.body.appendChild(ccAxInst);
    const hasWebSocket = "WebSocket" in window;
    if (hasWebSocket) {
        return;
    }
    window.WebSocket = CCAxWebSocket;
}
webSocketEnvInitializer();
>>>>>>> cc04770de46141d43f763beb6813d08c222386d6
