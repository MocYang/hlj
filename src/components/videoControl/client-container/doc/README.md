# 前言
ClientContainer是一个实现浏览器网页与本地客户端程序之间进行双向调用的插件开发框架。解决Chrome中无法使用ActiveX的问题。  
该框架为网页端提供npm包（js），为本地客户端提供sdk(c\c++)。集成此框架，页面可使用js轻松调用本地客户端的接口。本地客户端亦可使用sdk轻松调用网页端实现的接口。同时，ClientContainer还为网页端提供了本地客户端UI的嵌入能力。  
浏览器兼容：IE、Chrome  
使用场景举例：1、网页中需要与读卡器、指纹采集仪、usb摄像头等设备交互。2、在网页中嵌入带UI界面的本地客户端，如指纹采集客户端、极简播放器等
# npm包安装
使用 npm 或 yarn 的方式安装
```
# 切换到公司仓库源
yarn config set registry http://af.hikvision.com.cn/artifactory/api/npm/npm-down/
yarn add client-container
```
# 引入client-container
大致引入方式如下，关于ccWrapper的使用方法，可以参考client-container源码中为<font color=red>极简客户端</font>原生封装的[vue组件](#SimplePlayer组件)，该组件源码在lib/simple-player/中，其基本将ccWrapper的常用功能做了演示。
```
import { ccWrapper } from "client-container";
```
## 配置转译
<table>
  <tr>
    <td bgcolor=#fff7d0>
      <font color=#b29400>注意</font><br/>
      <font color=#6b5900>因为client-container是直接引入的源码，没有经过打包，所以需要自行使用Babel进行转译(babel-loader默认会忽略所有 node_modules 中的文件)</font>      
    </td>
  </tr>
</table>  

### 基于Vue CLI 的转译配置
若您的工程基于Vue CLI，则只需要在 vue.config.js 中的transpileDependencies选项中列出client-container
```
module.exports = { 
  ...
  // client-container用了es6的语法, 配置对其转译
  transpileDependencies: [
    "client-container"
  ],
  ... 
}
```
更多关于transpileDependencies的说明，请参看 [官方说明](https://cli.vuejs.org/zh/config/#transpiledependencies)
### 基于webpack的转译配置
配置babel-loader，将node_modules中的client-container包含
```
module.exports = { 
  ...  
  module: {
    rules :[
      ...
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, '../node_modules/client-container')],
      },
      ...
    ]
  }    
  ...  
}
```
# SimplePlayer组件
SimplePlayer是client-container内部自带的已经封装好的vue组件，可以非常方便的嵌入<font color=red>极简客户端</font>。同时，参看其源码，其也可以作为一个关于如何使用client-container与<font color=red>本地其他客户端</font>对接的演示demo。
#### 当您的工程安装client-container后，该组件源码应该位于"./node_modules/lib/simple-player/"中。或可直接参考[本工程](http://ga-gitlab.hikvision.com/maowei3/client-container-npm/tree/dev/packages/lib/simple-player)
## 引入SimplePlayer
```
import {
  SimplePlayer,
  SimplePlayerConfig,
  crashOccurPromise,  
  AUTO_ZINDEX_ELEMENT,
  MUTABLE_ELEMENT
} from "client-container";
```
#### 引入的变量说明
<font color=red>{Object} SimplePlayer</font>：vue组件对象<br/>
<font color=red>{function} SimplePlayerConfig</font>：极简播放器定义的配置接口，参考极简播放器的说明<br/>
<font color=red>{Promise\<string\>} crashOccurPromise</font>：崩溃通知的promise，只有在客户端或框架异常退出或崩溃时，会以string进行resolve，该string表示崩溃模块的名字<br/>
<font color=red>{number} AUTO_ZINDEX_ELEMENT、MUTABLE_ELEMENT</font>：客户端UI与网页元素的绑定策略，在IE中无效<br/>

## 完整示例
```
...
<div
  class="content-player pos-player"
  v-loading="loading"
  @mouseover="isMouseHover=true"
  @mouseleave="isMouseHover=false"
>
  <template v-if="loadFailed">
    <div class="content-err">
      <h-feedback-icon icon-name="h-icon-feedback_error_md" />
      <p>加载播放器失败，请检查插件是否正确安装；或刷新页面重试</p>
    </div>
  </template>
  <template v-else>
    <simple-player
      ref="simplePlayer"
      player-id="player1"
      :bind-policy="bindPolicy"
      :notifyMethod="onNotify"
      @load-result="onLoadResult"
      style="width:100%;height:calc(100% - 40px);"
    />          
  </template>
</div>
...
<script>
import {
  SimplePlayer,
  SimplePlayerConfig,
  crashOccurPromise,  
  AUTO_ZINDEX_ELEMENT,
  MUTABLE_ELEMENT
} from "client-container";

export default {
  components: {    
    SimplePlayer
  },
  data() {
    return {      
      bindPolicy: 0,
      isMouseHover: false,
      loadStatus: -1,
    };
  },
  computed: {
    loading() {
      if (this.loadStatus === -1) {
        return true;
      } else {
        return false;
      }
    },
    loadFailed() {
      if (this.loadStatus === -1 || this.loadStatus === 0) {
        return false;
      } else {
        return true;
      }
    }
  },
  created: async function() {
    await crashOccurPromise;
    this.loadStatus = 1;
  },
  methods: {    
    onLoadResult(player, errCode, data) {
      this.loadStatus = errCode;
    },
    onNotify(player, msg) {
      console.log(msg);
      //this[msg.requestMethod](msg);
    }
  }
};
</script>
```
## API
### Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
|playerId| 元素id，每个实例需唯一，必填|string|-|-|
|bindPolicy|与客户端UI的绑定策略|number|0,<br/>AUTO_ZINDEX_ELEMENT,<br/>MUTABLE_ELEMENT | 0
|notifyMethod|客户端调用通知|function(ref,params)|-|-|

其中需要注意的是bindPolicy绑定策略。  
0 ： 基础策略，框架尽可能实时让客户端UI跟随网页元素  
AUTO_ZINDEX_ELEMENT ：在基础策略之上进行自动z轴检测，该策略会<font color=red>严重影响性能</font>，不建议使用。（如果必须想让某些元素能够遮挡客户端，可以为这些元素加上 hikcc_cover=opaque 属性）  
MUTABLE_ELEMENT：元素是易动的（一般情况下，是您为该组件添加了动画效果），这种情况下，需要使用该策略，但会对性能产生一定影响。  
<font color=#6b5900>注意，这些策略可进行按位或（|）,例如：AUTO_ZINDEX_ELEMENT | MUTABLE_ELEMENT</font>  

### Events
| 事件名 | 说明 | 参数 |
| ---- | ---- | ---- |
|load-result| 客户端加载结果 |object(ref实例引用),number(0:成功,1：失败),object(player)|
|mouseup|组件无click事件，请使用左键抬起事件代替（需要判断Event.button === 0）|Event|

### Method
| 方法名 | 说明 | 
| ---- | ---- |
|startPlayReal| 开始实时播放 |
|stopPlayReal| 停止实时播放 |
|controlPTZ| 云台控制 |
|digitalZoom| 电子放大 |
|snapShot| 抓拍 |
|sound| 声音 |
|startPlayBack| 开始回放 |
|stopPlayBack| 停止回放 |
|pause| 暂停回放 |
|frameNext| 单帧进 |
|framePre| 单帧退 |
|timeSelect| 下载时间选择模式 |
|downloadSelect| 开始下载 |
|doClear| 停止所有 |
|showErrorInfo| 显示错误信息 |

方法具体的参数，请参考极简播放器的定义说明