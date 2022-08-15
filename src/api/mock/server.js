import { createServer } from 'miragejs'
// eslint-disable-next-line
import { urls } from '../index'

import cameraListHandler from './cameraListHandler'

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

      this.post(urls.cameraList, cameraListHandler)
    }
  })
}

export default makeServer
