import HikCCSession from './HikCCSession';
import { CCWndMgr, AUTO_ZINDEX_ELEMENT, MUTABLE_ELEMENT } from "./CCWndMgr";

const PORT = 9527;
const PORT_STEP = 100;

class HikCCWrapper {
  constructor() {
    const isIE = "ActiveXObject" in window;
    if (isIE) {
      this.ccWsUri = "wss://127.0.0.1:9527";
    } else {
      this.ccWsUri = "ws://localhost:9527";
    }
  }

  ccPull() {
    window.location.href = "HikCC://port=9527";
  }

  //tryCount连接重试次数
  async ccIsOk(tryCount = 3) {
    let port = PORT;
    for (; ;) {
      try {
        const isIE = "ActiveXObject" in window;
        if (isIE) {
          await CCWndMgr.init("wss://127.0.0.1:" + port);
          this.ccWsUri = 'wss://127.0.0.1:' + port;
        } else {
          await CCWndMgr.init("ws://localhost:" + port);
          this.ccWsUri = 'ws://localhost:' + port;
        }
        break;
      } catch (err) {
        if (--tryCount) {
          port += PORT_STEP;
        } else {
          // throw new Error("连接cc失败，检查cc是否安装或启动." + err);
          console.error("连接cc失败，检查cc是否安装或启动." + err);
        }
      }
    }
  }

  ccClear() {
    CCWndMgr.uninit();
  }

  async ccBindWindow(winId, elementId, type = 0) {
    await this.ccIsOk();
    return CCWndMgr.bindWindow(winId, elementId, type);
  }

  async ccUnBindWindow(winId) {
    await this.ccIsOk();
    return CCWndMgr.unbindWindow(winId);
  }

  // async ccUpdateWindow(winId) {
  // 	await this.ccIsOk();
  // 	let ret = HikCCModule.CCWndMgr.updateWindow(winId);
  // 	if (ret) {
  // 		return ret;
  // 	} else {
  // 		throw ret;
  // 	}
  // }
  async ccUpdateAllWindow() {
    await this.ccIsOk();
    CCWndMgr.updateAllWindow();
    return 'updateAllWindow success';
  }

  async ccCreateSession() {
    await this.ccIsOk();
    let session = new HikCCSession(this.ccWsUri);
    await session.open();
    return session;
  }

  async ccCreateAxObject(elementId) {
    await this.ccIsOk();
    return CCWndMgr.createAxObject(elementId);
  }
}

var ccWrapper = new HikCCWrapper();
export default ccWrapper;
export { ccWrapper, AUTO_ZINDEX_ELEMENT, MUTABLE_ELEMENT };
