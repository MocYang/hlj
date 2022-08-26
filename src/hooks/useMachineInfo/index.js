/**
 * @Author: MocYang
 * @Email: 958292256@qq.com
 * @Date: 2022/8/26 22:37
 * @File: index.js
 * @Description
 */
import { useEffect } from 'react'
import machineRoomConfig from './machineRoomConfig'
import { getMapViewer } from '../../components/MapContainer'
import Build from '../../utils/build'
import { usePopupController } from '../../components/popup/PopupContainer'
import { setMachinePopUpVisible } from '../../pages/home/popup/machineInfoPopup/slice'

let hadAddEventHandler = false

const useMachineInfo = ({ floor }) => {
  const popupController = usePopupController()

  const addMachineIconHandler = () => {
    if (hadAddEventHandler) {
      return
    }
    hadAddEventHandler = true
    // 监听监控点击事件
    const mapViewer = getMapViewer()
    if (mapViewer.event) {
      mapViewer.event.onClick("MACHINE", res => {
        popupController.activate(setMachinePopUpVisible)
      })
    }
  }

  // 临时添加机房的图标
  const addMachineInfoIcon = (roomConfig) => {
    const mapViewer = getMapViewer()

    const machineIconConfig = roomConfig.map(config => {
      return mapViewer.drawer.config.image({
        attr: {
          roomIndexCode: config.roomIndexCode
        },
        gid: 'MACHINE_' + config.roomIndexCode,
        scale: 1,
        style: 'dainziweilan_icon',
        location: config.location
      })
    })

    mapViewer.model.getController().addMany(machineIconConfig, {
      onSuccess: () => {
        setTimeout(() => {
          mapViewer.event.reBind()
        }, 100)
      }
    })
  }

  useEffect(() => {
    if (floor) {
      if (Array.isArray(floor) && floor.length > 0) {
        const currentMachineInActiveFloor = []
        for (let currentFloor of floor) {
          if (!currentFloor.active) {
            continue
          }

          const currentFloorName = currentFloor.floorId

          machineRoomConfig.forEach(machineConfig => {
            const machineFloorName = Build.utils.getFloorNameFromFloorId(machineConfig.floor_id)
            if (currentFloorName === machineFloorName) {
              currentMachineInActiveFloor.push(machineConfig)
            }
          })
        }

        addMachineIconHandler()

        addMachineInfoIcon(currentMachineInActiveFloor)
      }
    } else {

    }
  }, [floor])

}

export default useMachineInfo
