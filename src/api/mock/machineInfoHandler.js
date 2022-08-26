/**
 * @Author: MocYang
 * @Email: 958292256@qq.com
 * @Date: 2022/8/26 23:22
 * @File: machineInfoHandler.js
 * @Description
 */
const machineInfoHandler = () => {
  return {
    "code": "0",
    "msg": "SUCCESS",
    "data": {
      "serverRatio": 100,
      "healthScore": 100,
      "machinesCount": 5,
      "compentsCount": 88,
      "machineInfo": [
        {
          "machineName": "Central Management Server",
          "memoryTotal": "125GB",
          "memoryUsed": "70.0GB",
          "memoryUseRetio": "55",
          "cpuUsed": "2"
        },
        {
          "machineName": "组件服务器1",
          "memoryTotal": "31GB",
          "memoryUsed": "1.8GB",
          "memoryUseRetio": "5",
          "cpuUsed": "0"
        },
        {
          "machineName": "组件服务器4",
          "memoryTotal": "31GB",
          "memoryUsed": "5.2GB",
          "memoryUseRetio": "16",
          "cpuUsed": "0"
        },
        {
          "machineName": "组件服务器3",
          "memoryTotal": "31GB",
          "memoryUsed": "3.8GB",
          "memoryUseRetio": "12",
          "cpuUsed": "0"
        },
        {
          "machineName": "组件服务器2",
          "memoryTotal": "31GB",
          "memoryUsed": "10.2GB",
          "memoryUseRetio": "32",
          "cpuUsed": "0"
        }
      ]
    }
  }
}

export default machineInfoHandler