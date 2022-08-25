<<<<<<< HEAD
import { Component } from 'react'
import {
  SimplePlayer,
  SimplePlayerConfig,
  crashOccurPromise,
  commonFuns
} from "./SimplePlayerForReact";

import './simplePlayer.css'

function guid() {
  return 'player_' + 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
      v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16)
  });
}

const commonConfig = () => ({
  strProtocol: 'https',
  strPlatPort: '443',
  bUseUnivice: true,
  bUseSac: true,
  strPlatLanguage: 'zh_CN',
  iMultiRouteId: 0,
  strUserName: 'admin',
  bShowName: false,
  bShowIP: false,
  bShowMac: false,
  bGpuEnable: false,
  iErrConcealEnable: 0,
  bGetSnap: false,
  bShowCalendar: true,
  bShowDownload: false
})

const cameraIndexCodePlayConf = () => ({
  transmode: 1,
  streamType: 0,
  isSmallEagleEyeAbility: 0
})

const cameraIndexCodePlayBackConf = (strRecordParam) => ({
  bShowDownload: false,
  strRecordParam
})

const srcPlayConf = () => ({
  streamDispatchMode: 0
})

const mapKeyCode = {
  27: 'Esc',
  113: 'F2',
  13: 'Enter',
  32: 'Space'
}


export default class HSimplePlayer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playerId: `player_${guid()}`,
      isPause: false
    }
    const methods = this.createMethods()
    for (let method in methods) {
      this[method] = methods[method].bind(this)
    }
  }

  createMethods() {
    const self = this
    return {
      initPlayer() {
        const { initConfig = {} } = self.props
        const baseConf = {
          ...commonConfig(),
          ...initConfig
        }
        SimplePlayerConfig(baseConf);
      },

      // 获取截图路径
      async getSnapShotPath() {
        return commonFuns.getSnapShotPath({});
      },
      setSnapShotPath() {
        const { strSnapPath = 'D:/capture' } = self.props
        commonFuns.setSnapShotPath({ strSnapPath: strSnapPath });
      },

      async getSnapShotConfig() {
        return commonFuns.getSnapShotConfig({});
      },

      setSnapShotConfig() {
        const { strSnapPath = 'D:/capture' } = self.props
        let params = {
          strSnapPath: strSnapPath /* 截图保存路径 */,
          iSnapMode: 1 /* 连续抓拍模式 1按时间连续抓拍 2按帧连续抓拍 */,
          iSnapCounter: 15 /* 连续抓拍张数 */,
          iSnapIntervalTime: 200 /* 按时间抓拍的时间间隔设置 */
        };
        commonFuns.setSnapShotConfig(params);
      },

      async getRealRecConfig() {
        return commonFuns.getRealRecConfig({});
      },

      setRealRecConfig() {
        const { strRecordPath = 'D:/record' } = self.props
        let params = {
          strRecordPath: strRecordPath /* 紧急录像保存路径 */
        };
        commonFuns.setRealRecConfig(params);
      },

      startPlayRealByIndexCode() {
        const { cameraIndexCode, cameraIndexCodePlayConf } = self.props
        let params = {
          strIndexcode: cameraIndexCode,
          ...cameraIndexCodePlayConf,
          ...(cameraIndexCodePlayConf || {})
        };
        this.playerRef?.startPlayReal(params);
      },

      startPlayRealByUrl() {
        const { srcPlayConf, src } = self.props
        let params = {
          url: src,
          ...srcPlayConf,
          ...(srcPlayConf || {})
        };
        self.playerRef?.startPlayReal(params);
      },

      // 停止预览
      stopPlayReal() {
        self.playerRef?.doClear({});
      },

      // 3.1 根据监控点信息及开始结束时间进行查询并回放
      startPlayBackByIndexCode(times) {
        const { cameraIndexCode, cameraIndexCodePlayBackConf } = self.props
        let params = cameraIndexCodePlayBackConf({
          indexCode: cameraIndexCode,
          recordStyle: 0,
          recordType: '', // '0|1|2|6',
          transmode: 1,
          streamType: 0,
          startTime: times[0],
          endTime: times[1],
          ...(cameraIndexCodePlayBackConf || {})
        })

        self.playerRef?.startPlayBack(params);
      },

      startPlayBackBySacUrl(times = []) {
        const { src } = self.props
        let listParams = [];
        listParams.push.apply(listParams, times);
        self.playerRef?.startPlayBack({
          strRecordResponse: {
            list: listParams,
            url: src,
            streamDispatchMode: 0
          }
        });
      },

      // 3.3 根据云存储rtsp url进行回放
      startPlayBackByHcsUrl() {
        const { src } = self.props
        let params = {};
        params.bRtspUrlPlay = true;
        params.strRtspUrl = src
        self.playerRef?.startPlayBack(params);
      },

      stopPlayBack() {
        self.playerRef?.stopPlayBack({});
      },

      snapShotMulti(params) {
        const { snapConfig = {} } = self.props
        params.strCameraName = "cameraNamehh"; /* 换成需要保存的截图名称 */
        params.isSmallEagleEyeAbility = 0; /* 是否是小鹰眼设备 默认0不是 1是*/
        params.iSnapMode = snapConfig?.iSnapMode /* 1:按时间连续抓拍 2:按帧连续抓拍*/
        params.iSnapTime = snapConfig?.iSnapTime /* 抓拍时间间隔ms */
        params.iSnapCounter = snapConfig?.iSnapTime; /* 抓拍张数 */

        self.playerRef?.snapShot(params);
      },

      snapShot() {
        let params = {};
        params.strCameraName = "cameraName"; /* 换成需要保存的截图名称 */
        params.isSmallEagleEyeAbility = 0; /* 是否是小鹰眼设备 默认0不是 1是*/

        self.playerRef?.snapShot(params);
      },

      /* 3D放大接口 */
      ptz3DZoom(bStart) {
        let params = {};
        params.bStart = bStart; //true进入3D放大状态  false结束3D放大状态
        params.strUserPriority = "10"; //用户优先级
        params.strUserId = "admin"; //用户编号和用户名不一样
        params.iCascade = 0; /* 是否级联 0本联 1级联*/
        params.iSpeed = 50; /* 速度不传默认50 */

        self.playerRef?.ptz3DZoom(params);
      },

      /* 倍速回放接口 */
      speedPlay() {
        const {
          playConf = {
            iPlayBackSpeed: 0,
            bShowSpeedPlayWnd: true
          }
        } = self.props
        let params = {};
        /*
           iPlayBackSpeed:
             -6,   -5,   -4,   -3,  -2,  -1, 0, 1, 2, 3, 4  对应
           1/64, 1/32, 1/16,  1/8, 1/4, 1/2, 1, 2, 4, 8, 16 倍速
        */
        params.iPlayBackSpeed = playConf?.iPlayBackSpeed
        params.bShowSpeedPlayWnd = playConf?.bShowSpeedPlayWnd /* 是否需要展示速度选择框 */

        self.playerRef?.speedPlay(params);
      },

      /* 暂停、恢复回放 */
      pause(bPause) {
        let params = {};
        params.bPause = bPause; /* true暂停 false恢复 */

        self.playerRef?.pause(params);
      },

      async getOSDTime() {
        let params = {};
        return self.playerRef?.getOSDTime(params);
      },

      PTZDirectionCtl(cmd, isStart) {
        self.playerRef?.PTZDirectionCtl({
          iCmd: cmd,
          bStart: isStart
        });
      },

      controlPTZ(bControl, strUserId) {
        self.playerRef?.controlPTZ({
          bControl,
          nCascade: 0,
          strUserId: strUserId,
          strUserPriority: '10',
          iSpeed: 50
        });
      },

      sound(open) {
        self.playerRef?.sound({
          bOpen: open
        });
      },

      seekTime(strSeekTime) {
        self.playerRef?.seekTime({
          strSeekTime
        });
      },
      /**
       * 全屏
       */
      fullScreen() {
      },

      onNotify(player, msg) {
        self.props?.onMessage(msg, player)
      },

      onLoadResult(player, errCode, data) {
        self.props?.onLoadResult({ status: errCode === 0 ? 'success' : 'error', player, data })
      }
    }
  }

  async componentDidMount() {
    const self = this;
    document.onkeydown = function (event) {
      var e = event || window.event
      e.preventDefault();
      self.props?.onKeyCodeChange({ code: e && e.keyCode, name: mapKeyCode[e && e.keyCode] })

      if (e && e.keyCode == 32) {
        self.setState({ isPause: !self.state.isPause })
        self.pause(this.isPause);
      }
    };

    await crashOccurPromise;
  }

  render() {
    const { playerId } = this.state
    return (
      <div data-playerId={playerId} className="h-simple-player">
        <SimplePlayer
          ref={(ref) => this.playerRef = ref}
          style={{
            width: '100%',
            height: '100%'
          }}
          playerId={playerId}
          bindPolicy={this.props.bindPolicy || 0}
          onLoadResults={this.props.onLoadResults}
          notifyMethod={this.onNotify}
        />
      </div>
    )
  }
}
=======
import { Component } from 'react'
import {
  SimplePlayer,
  SimplePlayerConfig,
  crashOccurPromise,
  commonFuns
} from "./SimplePlayerForReact";

import './simplePlayer.css'

function guid() {
  return 'player_' + 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
      v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16)
  });
}

const commonConfig = () => ({
  strProtocol: 'https',
  strPlatPort: '443',
  bUseUnivice: true,
  bUseSac: true,
  strPlatLanguage: 'zh_CN',
  iMultiRouteId: 0,
  strUserName: 'admin',
  bShowName: false,
  bShowIP: false,
  bShowMac: false,
  bGpuEnable: false,
  iErrConcealEnable: 0,
  bGetSnap: false,
  bShowCalendar: true,
  bShowDownload: false
})

const cameraIndexCodePlayConf = () => ({
  transmode: 1,
  streamType: 0,
  isSmallEagleEyeAbility: 0
})

const cameraIndexCodePlayBackConf = (strRecordParam) => ({
  bShowDownload: false,
  strRecordParam
})

const srcPlayConf = () => ({
  streamDispatchMode: 0
})

const mapKeyCode = {
  27: 'Esc',
  113: 'F2',
  13: 'Enter',
  32: 'Space'
}


export default class HSimplePlayer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playerId: `player_${guid()}`,
      isPause: false
    }
    const methods = this.createMethods()
    for (let method in methods) {
      this[method] = methods[method].bind(this)
    }
  }

  createMethods() {
    const self = this
    return {
      initPlayer() {
        const { initConfig = {} } = self.props
        const baseConf = {
          ...commonConfig(),
          ...initConfig
        }
        SimplePlayerConfig(baseConf);
      },

      // 获取截图路径
      async getSnapShotPath() {
        return commonFuns.getSnapShotPath({});
      },
      setSnapShotPath() {
        const { strSnapPath = 'D:/capture' } = self.props
        commonFuns.setSnapShotPath({ strSnapPath: strSnapPath });
      },

      async getSnapShotConfig() {
        return commonFuns.getSnapShotConfig({});
      },

      setSnapShotConfig() {
        const { strSnapPath = 'D:/capture' } = self.props
        let params = {
          strSnapPath: strSnapPath /* 截图保存路径 */,
          iSnapMode: 1 /* 连续抓拍模式 1按时间连续抓拍 2按帧连续抓拍 */,
          iSnapCounter: 15 /* 连续抓拍张数 */,
          iSnapIntervalTime: 200 /* 按时间抓拍的时间间隔设置 */
        };
        commonFuns.setSnapShotConfig(params);
      },

      async getRealRecConfig() {
        return commonFuns.getRealRecConfig({});
      },

      setRealRecConfig() {
        const { strRecordPath = 'D:/record' } = self.props
        let params = {
          strRecordPath: strRecordPath /* 紧急录像保存路径 */
        };
        commonFuns.setRealRecConfig(params);
      },

      startPlayRealByIndexCode() {
        const { cameraIndexCode, cameraIndexCodePlayConf } = self.props
        let params = {
          strIndexcode: cameraIndexCode,
          ...cameraIndexCodePlayConf,
          ...(cameraIndexCodePlayConf || {})
        };
        this.playerRef?.startPlayReal(params);
      },

      startPlayRealByUrl() {
        const { srcPlayConf, src } = self.props
        let params = {
          url: src,
          ...srcPlayConf,
          ...(srcPlayConf || {})
        };
        self.playerRef?.startPlayReal(params);
      },

      // 停止预览
      stopPlayReal() {
        self.playerRef?.doClear({});
      },

      // 3.1 根据监控点信息及开始结束时间进行查询并回放
      startPlayBackByIndexCode(times) {
        const { cameraIndexCode, cameraIndexCodePlayBackConf } = self.props
        let params = cameraIndexCodePlayBackConf({
          indexCode: cameraIndexCode,
          recordStyle: 0,
          recordType: '', // '0|1|2|6',
          transmode: 1,
          streamType: 0,
          startTime: times[0],
          endTime: times[1],
          ...(cameraIndexCodePlayBackConf || {})
        })

        self.playerRef?.startPlayBack(params);
      },

      startPlayBackBySacUrl(times = []) {
        const { src } = self.props
        let listParams = [];
        listParams.push.apply(listParams, times);
        self.playerRef?.startPlayBack({
          strRecordResponse: {
            list: listParams,
            url: src,
            streamDispatchMode: 0
          }
        });
      },

      // 3.3 根据云存储rtsp url进行回放
      startPlayBackByHcsUrl() {
        const { src } = self.props
        let params = {};
        params.bRtspUrlPlay = true;
        params.strRtspUrl = src
        self.playerRef?.startPlayBack(params);
      },

      stopPlayBack() {
        self.playerRef?.stopPlayBack({});
      },

      snapShotMulti(params) {
        const { snapConfig = {} } = self.props
        params.strCameraName = "cameraNamehh"; /* 换成需要保存的截图名称 */
        params.isSmallEagleEyeAbility = 0; /* 是否是小鹰眼设备 默认0不是 1是*/
        params.iSnapMode = snapConfig?.iSnapMode /* 1:按时间连续抓拍 2:按帧连续抓拍*/
        params.iSnapTime = snapConfig?.iSnapTime /* 抓拍时间间隔ms */
        params.iSnapCounter = snapConfig?.iSnapTime; /* 抓拍张数 */

        self.playerRef?.snapShot(params);
      },

      snapShot() {
        let params = {};
        params.strCameraName = "cameraName"; /* 换成需要保存的截图名称 */
        params.isSmallEagleEyeAbility = 0; /* 是否是小鹰眼设备 默认0不是 1是*/

        self.playerRef?.snapShot(params);
      },

      /* 3D放大接口 */
      ptz3DZoom(bStart) {
        let params = {};
        params.bStart = bStart; //true进入3D放大状态  false结束3D放大状态
        params.strUserPriority = "10"; //用户优先级
        params.strUserId = "admin"; //用户编号和用户名不一样
        params.iCascade = 0; /* 是否级联 0本联 1级联*/
        params.iSpeed = 50; /* 速度不传默认50 */

        self.playerRef?.ptz3DZoom(params);
      },

      /* 倍速回放接口 */
      speedPlay() {
        const {
          playConf = {
            iPlayBackSpeed: 0,
            bShowSpeedPlayWnd: true
          }
        } = self.props
        let params = {};
        /*
           iPlayBackSpeed:
             -6,   -5,   -4,   -3,  -2,  -1, 0, 1, 2, 3, 4  对应
           1/64, 1/32, 1/16,  1/8, 1/4, 1/2, 1, 2, 4, 8, 16 倍速
        */
        params.iPlayBackSpeed = playConf?.iPlayBackSpeed
        params.bShowSpeedPlayWnd = playConf?.bShowSpeedPlayWnd /* 是否需要展示速度选择框 */

        self.playerRef?.speedPlay(params);
      },

      /* 暂停、恢复回放 */
      pause(bPause) {
        let params = {};
        params.bPause = bPause; /* true暂停 false恢复 */

        self.playerRef?.pause(params);
      },

      async getOSDTime() {
        let params = {};
        return self.playerRef?.getOSDTime(params);
      },

      PTZDirectionCtl(cmd, isStart) {
        self.playerRef?.PTZDirectionCtl({
          iCmd: cmd,
          bStart: isStart
        });
      },

      controlPTZ(bControl, strUserId) {
        self.playerRef?.controlPTZ({
          bControl,
          nCascade: 0,
          strUserId: strUserId,
          strUserPriority: '10',
          iSpeed: 50
        });
      },

      sound(open) {
        self.playerRef?.sound({
          bOpen: open
        });
      },

      seekTime(strSeekTime) {
        self.playerRef?.seekTime({
          strSeekTime
        });
      },
      /**
       * 全屏
       */
      fullScreen() {
      },

      onNotify(player, msg) {
        self.props?.onMessage(msg, player)
      },

      onLoadResult(player, errCode, data) {
        self.props?.onLoadResult({ status: errCode === 0 ? 'success' : 'error', player, data })
      }
    }
  }

  async componentDidMount() {
    const self = this;
    document.onkeydown = function (event) {
      var e = event || window.event
      e.preventDefault();
      self.props?.onKeyCodeChange({ code: e && e.keyCode, name: mapKeyCode[e && e.keyCode] })

      if (e && e.keyCode == 32) {
        self.setState({ isPause: !self.state.isPause })
        self.pause(this.isPause);
      }
    };

    await crashOccurPromise;
  }

  render() {
    const { playerId } = this.state
    return (
      <div data-playerId={playerId} className="h-simple-player">
        <SimplePlayer
          ref={(ref) => this.playerRef = ref}
          style={{
            width: '100%',
            height: '100%'
          }}
          playerId={playerId}
          bindPolicy={this.props.bindPolicy || 0}
          onLoadResults={this.props.onLoadResults}
          notifyMethod={this.onNotify}
        />
      </div>
    )
  }
}
>>>>>>> cc04770de46141d43f763beb6813d08c222386d6
