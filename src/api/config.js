/**
 * @Author: MocYang
 * @Email: 958292256@qq.com
 * @Date: 2022/1/24 10:36
 * @File: config.js
 * @Description 1
 */

// 各个操作的接口调用的接口地址配置
export const urlConfig = {
  // '实例接口'
  sysConfigList: `/sys/config/list`,

  // 监控列表
  cameraList: `/device/camera/listS`,

  // 纪委看板后台组件服务接口
  jwvisual: {
    // 如何指定某个第三方接口
    // 2.2.11云台操作
    postVideoControl: `/jwvisual/service/api/jwvisual/v3/ulanqab3D/video/controlling`,

    // 2.1.2根据房间设备编码，获取浏览url
    getPreviewUrl: `/jwvisual/service/api/jwvisual/v2/bff-core/getPreviewUrl`,

    // 2.3.7获取所有房间使用情况
    allRoomInfo: `/jwvisual/service/api/jwvisual/v2/visualFor3D/getAllUseRoom`
  },

  // 环境监测组件服务接口
  dwcWeb: {
    // 2.8.1根据留置房间编号获取留置对象详情信息
<<<<<<< HEAD
    suspectInfo: `/dwc-web/service/rs/api/v2/suspect/searchByRoomCode`,

    // 2.7.1根据房间编号获取环境状态信息
    environmentInfo: `/dwc-web/service/rs/api/v2/environment/searchByRoomCode`
=======
    suspectInfo: `/dwc-web/service/rs/api/v2/suspect/searchByRoomCode`
>>>>>>> cc04770de46141d43f763beb6813d08c222386d6
  }
}
