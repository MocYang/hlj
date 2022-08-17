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
  cameraList: `/device/camera/list`,

  hik: {
    // 如何指定某个第三方接口
    // 云台控制
    postVideoControl: `/jwvisual/service/api/jwvisual/v3/ulanqab3D/video/controlling`,

    // 获取取流地址
    getPreviewUrl: `/jwvisual/service/api/jwvisual/v2/bff-core/getPreviewUrl`,
  }
}
