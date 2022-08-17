import { ccWrapper } from "./clientContainerIndex";
import SimplePlayer from "./SimplePlayer.js";

class SimplePlayerComponent {
  _session = undefined

  constructor(session) {
    this._session = session;
  }

  commonCfg(params) {
    params.sessionId = this._session.sessionId;
    return this._session.callModuleMethod(
      "CCvideoplay",
      "commonConfig",
      params
    );
  }
  setSnapShotPath(params) {
    params.sessionId = this._session.sessionId;
    return this._session.callModuleMethod(
      "CCvideoplay",
      "setSnapShotPath",
      params
    );
  }
  getSnapShotPath(params) {
    params.sessionId = this._session.sessionId;
    return this._session.callModuleMethod(
      "CCvideoplay",
      "getSnapShotPath",
      params
    );
  }
  setSnapShotConfig(params) {
    params.sessionId = this._session.sessionId;
    return this._session.callModuleMethod(
      "CCvideoplay",
      "setSnapShotConfig",
      params
    );
  }
  getSnapShotConfig(params) {
    params.sessionId = this._session.sessionId;
    return this._session.callModuleMethod(
      "CCvideoplay",
      "getSnapShotConfig",
      params
    );
  }
  setRealRecConfig(params) {
    params.sessionId = this._session.sessionId;
    return this._session.callModuleMethod(
      "CCvideoplay",
      "setRealRecConfig",
      params
    );
  }
  getRealRecConfig(params) {
    params.sessionId = this._session.sessionId;
    return this._session.callModuleMethod(
      "CCvideoplay",
      "getRealRecConfig",
      params
    );
  }
  async createPlayer(playerId, bindPolicy, api) {
    //创建播放窗口
    let params = {
      notifyMethod: api,
      sessionId: this._session.sessionId
    };

    let res = await this._session.callModuleMethod(
      "CCvideoplay",
      "createPlayer",
      params
    );

    if (!res.hasOwnProperty("winId")) {
      throw "createPlayer failed!";
    }
    //将窗口绑定到CC
    let bindRes = await ccWrapper.ccBindWindow(res.winId, playerId, bindPolicy);

    console.log("bindResult success,winId:" + bindRes);

    //显示窗口
    let showRes = await this._session.callModuleMethod(
      "CCvideoplay",
      "showPlayWnd",
      {
        playHandle: res.playHandle
      }
    );

    console.log("CCvideoplay showPlayWnd reslut:" + JSON.stringify(showRes));

    return new SimplePlayer(this._session, res.playHandle, res.winId, playerId);
  }
}

async function createComponent() {
  let ccSession = await ccWrapper.ccCreateSession();
  //初始化(拉起)极简播放器
  await ccSession.initModule("CCvideoplay");
  //创建SimplePlayerComponent
  return new SimplePlayerComponent(ccSession);
}

export default createComponent;
