<<<<<<< HEAD
class CCWndMgrReq {
    constructor(ccWs, params, changedTitle) {
        this.ccWs = ccWs;
        this.params = params;
        this.changedTitle = changedTitle;
        this.visibilityHasChanged = false;
        this.onRsp = undefined;
    }
    changeVisibility(bChanged) {
        this.visibilityHasChanged = bChanged;
    }
    isVisibilityChanged() {
        return this.visibilityHasChanged;
    }
    changeTitle() {
        window.top.document.title = this.changedTitle;
        console.log("set title:" + this.changedTitle);
    }
    setReceiver(onRsp) {
        this.onRsp = onRsp;
    }
}
class CCAddWndReq extends CCWndMgrReq {
    request() {
        this.changeTitle();
        this.changeVisibility(false);
        return this.ccWs.callMethod("cc.addWindow", this.params).then((rsp) => {
            if (this.onRsp) {
                this.onRsp(0, rsp);
            }
        }, (error) => {
            if (this.onRsp) {
                this.onRsp(1, error);
            }
        });
    }
}
class CCChangeWndReq extends CCWndMgrReq {
    request() {
        this.changeTitle();
        this.changeVisibility(false);
        return this.ccWs.callMethod("cc.changeWindow", this.params).then((rsp) => {
            if (this.onRsp) {
                this.onRsp(0, rsp);
            }
        }, (error) => {
            if (this.onRsp) {
                this.onRsp(1, error);
            }
        });
    }
}
export { CCWndMgrReq, CCAddWndReq, CCChangeWndReq };
=======
class CCWndMgrReq {
    constructor(ccWs, params, changedTitle) {
        this.ccWs = ccWs;
        this.params = params;
        this.changedTitle = changedTitle;
        this.visibilityHasChanged = false;
        this.onRsp = undefined;
    }
    changeVisibility(bChanged) {
        this.visibilityHasChanged = bChanged;
    }
    isVisibilityChanged() {
        return this.visibilityHasChanged;
    }
    changeTitle() {
        window.top.document.title = this.changedTitle;
        console.log("set title:" + this.changedTitle);
    }
    setReceiver(onRsp) {
        this.onRsp = onRsp;
    }
}
class CCAddWndReq extends CCWndMgrReq {
    request() {
        this.changeTitle();
        this.changeVisibility(false);
        return this.ccWs.callMethod("cc.addWindow", this.params).then((rsp) => {
            if (this.onRsp) {
                this.onRsp(0, rsp);
            }
        }, (error) => {
            if (this.onRsp) {
                this.onRsp(1, error);
            }
        });
    }
}
class CCChangeWndReq extends CCWndMgrReq {
    request() {
        this.changeTitle();
        this.changeVisibility(false);
        return this.ccWs.callMethod("cc.changeWindow", this.params).then((rsp) => {
            if (this.onRsp) {
                this.onRsp(0, rsp);
            }
        }, (error) => {
            if (this.onRsp) {
                this.onRsp(1, error);
            }
        });
    }
}
export { CCWndMgrReq, CCAddWndReq, CCChangeWndReq };
>>>>>>> cc04770de46141d43f763beb6813d08c222386d6
