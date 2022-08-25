/**
 * @Author: MocYang
 * @Email: 958292256@qq.com
 * @Date: 2022/8/17 14:30
 * @File: previewUrlHandler.js
 * @Description
 */
// 根据监控编码，获取取流地址 - mock handler
 export default function previewUrlHandle (schema, request) {
   return {
     "code": "0",
     "data": {
       "url": "rtsp://192.168.8.5:554/openUrl/TkuClQA"
     },
     "msg":
       "SUCCESS",
     "type": 0
   }
}