import { createServer } from 'miragejs'
// eslint-disable-next-line
import { urls } from '../index'

import cameraListHandler from './cameraListHandler'
import previewUrlHandle from './previewUrlHandler'
import allRoomUseHandler from './allRoomUseHandler'
import suspectInfoHandler from './suspectInfoHandler'
import environmentInfoHandler from './environmentInfoHandler'
import machineInfoHandler from './machineInfoHandler'

function makeServer(environment = 'development') {
  createServer({
    environment,

    routes() {
      this.timing = 1000

      // this.namespace = '/fake'
      /**
       * mockAPI可以像这样，在下面添加路由配置, 这样，实际的请求路径为：/fake/api/xxx/xxx。
       * 也就是，所有带 `/fake`前缀的请求，都将走 migratejs 的 mock 服务。其它没有这个前缀的。走正常请求
       * this.get(/xxx/xxx',(schema, request) => {
       *   return {
       *     "code": 1,
       *     "msg": "success",
       *     "data": []
       *   }
       * })
       */

      /**
       * 参考： https://miragejs.com/api/classes/server/#passthrough
       */
      // this.passthrough('./' + '/**', (req) => {
      //   // 以下方法调用为必须。目的是把透过 miragejs 的请求，响应之后，传回 axios 本身
      //   req.onload = (e) => {
      //     req.onloadend()
      //   }
      // })

      //  mock - 监控列表
      this.post(urls.cameraList, cameraListHandler)

      // mock - 取流地址
      this.post(urls.jwvisual.getPreviewUrl, previewUrlHandle)

      // TODO：mock - 云台控制

      // 获取所有房间的使用情况
      this.get(urls.jwvisual.allRoomInfo, allRoomUseHandler)

      // 根据房间编码，获取留置对象详情
      this.post(urls.dwcWeb.suspectInfo, suspectInfoHandler)

      // 根据房间编码，获取房间环境信息
      this.post(urls.dwcWeb.environmentInfo, environmentInfoHandler)

      this.post(urls.dwcWeb.machineInfo, machineInfoHandler)
    }
  })
}

export default makeServer
