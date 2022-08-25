<<<<<<< HEAD
import { Component } from 'react'
import createComponent from './client-container/lib/simple-player/src/ComInitializer'
import './simplePlayer.css'

const isIE = "ActiveXObject" in window;
const thisComponent = createComponent();

const commonConfig = async function (params) {
  let com = await thisComponent;
  return com.commonCfg(params);
}

const setSnapShotPath = async function (params) {
  let com = await thisComponent;
  return com.setSnapShotPath(params);
};
const getSnapShotPath = async function (params) {
  let com = await thisComponent;
  return com.getSnapShotPath(params);
};
const setSnapShotConfig = async function (params) {
  let com = await thisComponent;
  return com.setSnapShotConfig(params);
};
const getSnapShotConfig = async function (params) {
  let com = await thisComponent;
  return com.getSnapShotConfig(params);
};
const setRealRecConfig = async function (params) {
  let com = await thisComponent;
  return com.setRealRecConfig(params);
};
const getRealRecConfig = async function (params) {
  let com = await thisComponent;
  return com.getRealRecConfig(params);
};
const commonFuns = {
  setSnapShotPath,
  getSnapShotPath,
  setSnapShotConfig,
  getSnapShotConfig,
  setRealRecConfig,
  getRealRecConfig
}

const createPlayerData = async function (playerId, bindPolicy, api) {
  let com = await thisComponent;
  return com.createPlayer(playerId, bindPolicy, api);
};

const crashOccurPromise = new Promise((resolve, reject) => {
  window["HikCCErrorReport"] = function (errorInfo) {
    resolve(errorInfo.moduleName);
  };
});

const ExportInterface = function (name, func) {
  if (undefined === window["HikCCSimplePlayerAPI"]) {
    window["HikCCSimplePlayerAPI"] = {};
  }
  let HikCCSimplePlayerAPI = window["HikCCSimplePlayerAPI"];
  HikCCSimplePlayerAPI[name] = func;
  return "HikCCSimplePlayerAPI." + name;
};

export default class SimplePlayerForReact extends Component {
  constructor(props) {
    super(props)
    const methods = this.createMethods()
    for (let method in methods) {
      this[method] = methods[method].bind(this)
    }
  }

  componentDidMount() {
    const { notifyMethod, playerId, bindPolicy,onLoadResults } = this.props
    const self = this
    const apiPublishAddr = ExportInterface(
      self.playerId + "APIAddr",
      (params) => {
        if (notifyMethod) {
          return notifyMethod(this, params);
        }
        return "method not found";
      }
    )
    this.playerCreating = new Promise((resolve, reject) => {
      createPlayerData(playerId, bindPolicy, apiPublishAddr).then(
        (player) => {
          onLoadResults&& onLoadResults(self, 0, player)
          resolve(player)
        },
        (error) => {
          onLoadResults&& onLoadResults(self, 0, error)
          reject(error)
        }
      );
    });
  }

  componentWillUnmount() {
    const { playerId } = this.props
    let globalApiAddr = window["HikCCSimplePlayerAPI"];
    if (globalApiAddr) {
      delete globalApiAddr[playerId + "APIAddr"];
    }
  }

  createMethods() {
    return {
      startDirectlyPlayTest: async function (params) {
        let player = await this.playerCreating;
        return player.startDirectlyPlayTest(params);
      },
      startPlayReal: async function (params) {
        let player = await this.playerCreating;
        return player.startPlayReal(params);
      },
      stopPlayReal: async function (params) {
        let player = await this.playerCreating;
        return player.stopPlayReal(params);
      },
      realRecord: async function (params) {
        let player = await this.playerCreating;
        return player.realRecord(params);
      },
      controlPTZ: async function (params) {
        let player = await this.playerCreating;
        return player.controlPTZ(params);
      },
      PTZDirectionCtl: async function (params) {
        let player = await this.playerCreating;
        return player.PTZDirectionCtl(params);
      },
      digitalZoom: async function (params) {
        let player = await this.playerCreating;
        return player.digitalZoom(params);
      },
      ptz3DZoom: async function (params) {
        let player = await this.playerCreating;
        return player.ptz3DZoom(params);
      },
      snapShot: async function (params) {
        let player = await this.playerCreating;
        return player.snapShot(params);
      },
      deviceTalk: async function (params) {
        let player = await this.playerCreating;
        return player.deviceTalk(params);
      },
      // false,true
      sound: async function (params) {
        let player = await this.playerCreating;
        return player.sound(params);
      },
      startPlayBack: async function (params) {
        let player = await this.playerCreating;
        return player.startPlayBack(params);
      },
      stopPlayBack: async function (params) {
        let player = await this.playerCreating;
        return player.stopPlayBack(params);
      },
      speedPlay: async function (params) {
        let player = await this.playerCreating;
        return player.speedPlay(params);
      },
      pause: async function (params) {
        let player = await this.playerCreating;
        return player.pause(params);
      },
      getOSDTime: async function (params) {
        let player = await this.playerCreating;
        return player.getOSDTime(params);
      },
      frameNext: async function (params) {
        let player = await this.playerCreating;
        return player.frameNext(params);
      },
      framePre: async function (params) {
        let player = await this.playerCreating;
        return player.framePre(params);
      },
      timeSelect: async function (params) {
        let player = await this.playerCreating;
        return player.timeSelect(params);
      },
      downloadSelect: async function (params) {
        let player = await this.playerCreating;
        return player.downloadSelect(params);
      },
      showTimeAxis: async function (params) {
        let player = await this.playerCreating;
        return player.showTimeAxis(params);
      },
      seekTime: async function (params) {
        let player = await this.playerCreating;
        return player.seekTime(params);
      },
      rotate: async function (params) {
        let player = await this.playerCreating;
        return player.rotate(params);
      },
      autoScale: async function (params) {
        let player = await this.playerCreating;
        return player.autoScale(params);
      },
      doClear: async function (params) {
        let player = await this.playerCreating;
        return player.clear(params);
      },
      showErrorInfo: async function (params) {
        let player = await this.playerCreating;
        return player.showErrorInfo(params);
      }
    }
  }

  render() {
    const { playerId, ...outerProps } = this.props
    return isIE ?
      <object
        {...outerProps}
        id={playerId}
        classid="CLSID:2A80F380-ABE6-4ECC-A3D1-3C1FB2EB7408"
      >video</object> :
      <canvas {...outerProps} id={playerId} />
  }
}

export {
  SimplePlayerForReact as SimplePlayer,
  commonConfig as SimplePlayerConfig,
  commonFuns,
  crashOccurPromise,
  ExportInterface
}
=======
import { Component } from 'react'
import createComponent from './client-container/lib/simple-player/src/ComInitializer'
import './simplePlayer.css'

const isIE = "ActiveXObject" in window;
const thisComponent = createComponent();

const commonConfig = async function (params) {
  let com = await thisComponent;
  return com.commonCfg(params);
}

const setSnapShotPath = async function (params) {
  let com = await thisComponent;
  return com.setSnapShotPath(params);
};
const getSnapShotPath = async function (params) {
  let com = await thisComponent;
  return com.getSnapShotPath(params);
};
const setSnapShotConfig = async function (params) {
  let com = await thisComponent;
  return com.setSnapShotConfig(params);
};
const getSnapShotConfig = async function (params) {
  let com = await thisComponent;
  return com.getSnapShotConfig(params);
};
const setRealRecConfig = async function (params) {
  let com = await thisComponent;
  return com.setRealRecConfig(params);
};
const getRealRecConfig = async function (params) {
  let com = await thisComponent;
  return com.getRealRecConfig(params);
};
const commonFuns = {
  setSnapShotPath,
  getSnapShotPath,
  setSnapShotConfig,
  getSnapShotConfig,
  setRealRecConfig,
  getRealRecConfig
}

const createPlayerData = async function (playerId, bindPolicy, api) {
  let com = await thisComponent;
  return com.createPlayer(playerId, bindPolicy, api);
};

const crashOccurPromise = new Promise((resolve, reject) => {
  window["HikCCErrorReport"] = function (errorInfo) {
    resolve(errorInfo.moduleName);
  };
});

const ExportInterface = function (name, func) {
  if (undefined === window["HikCCSimplePlayerAPI"]) {
    window["HikCCSimplePlayerAPI"] = {};
  }
  let HikCCSimplePlayerAPI = window["HikCCSimplePlayerAPI"];
  HikCCSimplePlayerAPI[name] = func;
  return "HikCCSimplePlayerAPI." + name;
};

export default class SimplePlayerForReact extends Component {
  constructor(props) {
    super(props)
    const methods = this.createMethods()
    for (let method in methods) {
      this[method] = methods[method].bind(this)
    }
  }

  componentDidMount() {
    const { notifyMethod, playerId, bindPolicy,onLoadResults } = this.props
    const self = this
    const apiPublishAddr = ExportInterface(
      self.playerId + "APIAddr",
      (params) => {
        if (notifyMethod) {
          return notifyMethod(this, params);
        }
        return "method not found";
      }
    )
    this.playerCreating = new Promise((resolve, reject) => {
      createPlayerData(playerId, bindPolicy, apiPublishAddr).then(
        (player) => {
          onLoadResults&& onLoadResults(self, 0, player)
          resolve(player)
        },
        (error) => {
          onLoadResults&& onLoadResults(self, 0, error)
          reject(error)
        }
      );
    });
  }

  componentWillUnmount() {
    const { playerId } = this.props
    let globalApiAddr = window["HikCCSimplePlayerAPI"];
    if (globalApiAddr) {
      delete globalApiAddr[playerId + "APIAddr"];
    }
  }

  createMethods() {
    return {
      startDirectlyPlayTest: async function (params) {
        let player = await this.playerCreating;
        return player.startDirectlyPlayTest(params);
      },
      startPlayReal: async function (params) {
        let player = await this.playerCreating;
        return player.startPlayReal(params);
      },
      stopPlayReal: async function (params) {
        let player = await this.playerCreating;
        return player.stopPlayReal(params);
      },
      realRecord: async function (params) {
        let player = await this.playerCreating;
        return player.realRecord(params);
      },
      controlPTZ: async function (params) {
        let player = await this.playerCreating;
        return player.controlPTZ(params);
      },
      PTZDirectionCtl: async function (params) {
        let player = await this.playerCreating;
        return player.PTZDirectionCtl(params);
      },
      digitalZoom: async function (params) {
        let player = await this.playerCreating;
        return player.digitalZoom(params);
      },
      ptz3DZoom: async function (params) {
        let player = await this.playerCreating;
        return player.ptz3DZoom(params);
      },
      snapShot: async function (params) {
        let player = await this.playerCreating;
        return player.snapShot(params);
      },
      deviceTalk: async function (params) {
        let player = await this.playerCreating;
        return player.deviceTalk(params);
      },
      // false,true
      sound: async function (params) {
        let player = await this.playerCreating;
        return player.sound(params);
      },
      startPlayBack: async function (params) {
        let player = await this.playerCreating;
        return player.startPlayBack(params);
      },
      stopPlayBack: async function (params) {
        let player = await this.playerCreating;
        return player.stopPlayBack(params);
      },
      speedPlay: async function (params) {
        let player = await this.playerCreating;
        return player.speedPlay(params);
      },
      pause: async function (params) {
        let player = await this.playerCreating;
        return player.pause(params);
      },
      getOSDTime: async function (params) {
        let player = await this.playerCreating;
        return player.getOSDTime(params);
      },
      frameNext: async function (params) {
        let player = await this.playerCreating;
        return player.frameNext(params);
      },
      framePre: async function (params) {
        let player = await this.playerCreating;
        return player.framePre(params);
      },
      timeSelect: async function (params) {
        let player = await this.playerCreating;
        return player.timeSelect(params);
      },
      downloadSelect: async function (params) {
        let player = await this.playerCreating;
        return player.downloadSelect(params);
      },
      showTimeAxis: async function (params) {
        let player = await this.playerCreating;
        return player.showTimeAxis(params);
      },
      seekTime: async function (params) {
        let player = await this.playerCreating;
        return player.seekTime(params);
      },
      rotate: async function (params) {
        let player = await this.playerCreating;
        return player.rotate(params);
      },
      autoScale: async function (params) {
        let player = await this.playerCreating;
        return player.autoScale(params);
      },
      doClear: async function (params) {
        let player = await this.playerCreating;
        return player.clear(params);
      },
      showErrorInfo: async function (params) {
        let player = await this.playerCreating;
        return player.showErrorInfo(params);
      }
    }
  }

  render() {
    const { playerId, ...outerProps } = this.props
    return isIE ?
      <object
        {...outerProps}
        id={playerId}
        classid="CLSID:2A80F380-ABE6-4ECC-A3D1-3C1FB2EB7408"
      >video</object> :
      <canvas {...outerProps} id={playerId} />
  }
}

export {
  SimplePlayerForReact as SimplePlayer,
  commonConfig as SimplePlayerConfig,
  commonFuns,
  crashOccurPromise,
  ExportInterface
}
>>>>>>> cc04770de46141d43f763beb6813d08c222386d6
