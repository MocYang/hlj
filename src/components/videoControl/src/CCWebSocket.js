import "./CCEnvInitializer";

class CCWebSocket {
  constructor(url) {
    //请求id
    this.reqID = 0;
    //未完成的请求
    this.pendings = new Map();
    //websocket
    this.ws = new WebSocket(url);
    //连接是否成功
    this.connectedPromise = new Promise((resolve, reject) => {
      this.ws.onerror = function () {
        if (process.env.NODE_ENV !== 'development') {
          reject("连接cc失败");
        } else {
          resolve('aa')
        }
      };
      this.ws.onopen = function () {
        resolve("连接cc成功");
      };
    });
    //错误监听
    this.errorOccurPromise = new Promise((resolve) => {
      this.ws.onclose = function (evt) {
        // resolve(evt);
        if (process.env.NODE_ENV !== 'development') {
          resolve(evt);
        }

      };
    });
    this.ws.onmessage = (evt) => {
      this.onMsg(evt.data);
    };
    //会话id
    this.sessionID = this.callMethod("cc.getSessionId");
  }

  async callMethod(method, params = undefined) {
    await this.connectedPromise;
    let reqIdNow = this.reqID++;
    let req = {
      id: reqIdNow,
      method
    };
    if (params) {
      req.params = params;
    }
    this.ws.send(JSON.stringify(req));
    return new Promise((resolve, reject) => {
      this.pendings.set(reqIdNow, function (error, data) {
        if (error) {
          reject(data);
        } else {
          resolve(data);
        }
      });
    });
  }

  async notifyMsg(method, params = undefined) {
    await this.connectedPromise;
    let reqIdNow = this.reqID++;
    let req = {
      id: reqIdNow,
      method
    };
    if (params) {
      req.params = params;
    }
    this.ws.send(JSON.stringify(req));
  }

  getSessionID() {
    return this.sessionID;
  }

  async isConnected(cb) {
    let res = await this.connectedPromise;
    if (cb) {
      cb(res);
    }
    return res;
  }

  async watchError(cb) {
    let res = await this.errorOccurPromise;
    if (cb) {
      cb(res);
    }
    return res;
  }

  close() {
    this.ws.close();
  }

  onMsg(data) {
    let msgObj = JSON.parse(data);
    let bHasId = msgObj.hasOwnProperty("id");
    let bIsRequest = msgObj.hasOwnProperty("method");
    if (bIsRequest) {
      let rsp = undefined;
      if (bHasId) {
        rsp = { id: msgObj.id };
      }
      this.onRequestOrNotify(msgObj.method, msgObj.params, rsp);
      return;
    }
    if (false == bHasId) {
      return;
    }
    let reqId = msgObj.id;
    let callback = this.pendings.get(reqId);
    if (!callback) {
      return;
    }
    if (msgObj.hasOwnProperty("result")) {
      callback(0, msgObj.result);
    } else {
      callback(1, msgObj.error);
    }
    this.pendings.delete(reqId);
  }

  async onRequestOrNotify(method, params, rsp) {
    try {
      let strArray = method.split('.');
      if (strArray.length === 0) {
        throw {
          code: -32601,
          message: 'method is not found'
        };
      }
      let temp = window;
      for (let i = 0, len = strArray.length; i < len; i++) {
        temp = temp[strArray[i]];
      }
      if (!temp) {
        throw {
          code: -32601,
          message: 'method is not found'
        };
      }
      let res = await temp(params);
      if (rsp) {
        rsp.result = res;
      }
    } catch (err) {
      if (rsp) {
        rsp.error = err;
      }
    }
    if (rsp) {
      this.ws.send(JSON.stringify(rsp));
    }
  }
}

export default CCWebSocket;
