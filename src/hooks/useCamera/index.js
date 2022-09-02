/**
 * @Author: MocYang
 * @Email: 958292256@qq.com
 * @Date: 2022/8/19 15:05
 * @File: index.js
 * @Description 监控相关逻辑 - 上图，点击事件等
 */

import { useCallback, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { cameraListConfig } from '../../api'
import { getMapViewer } from '../../components/MapContainer'
import { previewUrlConfig } from '../../pages/home/popup/VideoPreviewPopup/api'
import { setClickCameraConfig, setIsVideoPreviewPopupShow } from '../../pages/home/popup/VideoPreviewPopup/slice'
import useRequest from '../useRequest'
import Build from '../../utils/build'
import { usePopupController } from '../../components/popup/PopupContainer'
import { handleGetSplitEntitiesHeight } from '../../utils'

const useCamera = ({ floor }) => {
  const dispatch = useDispatch()

  const popupController = usePopupController()

  // 监控列表数据
  const [cameraList, setCameraList] = useState([])

  const { run: fetchCameraList } = useRequest()

  const { run: fetchPreviewUrl } = useRequest()

  const addCameraHandler = () => {
    // 监听监控点击事件
    const mapViewer = getMapViewer()
    if (mapViewer.event) {
      mapViewer.event.onClick("CAMERA", res => {
        const cameraInfo = res.attr
        if (cameraInfo) {
          // 通过监控编码，获取取流地址
          fetchPreviewUrl(previewUrlConfig({
            cameraIndexCode: cameraInfo.device_code,
            transmode: 1
          })).then(res => {
            if (res) {
              dispatch(setClickCameraConfig({
                ...cameraInfo,
                url: res.data.url
              }))
            }
          })
        }

        popupController.activate(setIsVideoPreviewPopupShow)
      })
    }
  }

  // 获取所有监控列表
  const fetchCamera = useCallback(() => {
    // 获取监听列表，应该只执行一次
    fetchCameraList(cameraListConfig()).then(res => {
      if (res.code === 0) {
        setCameraList(res.data)

        addCameraHandler()
      }
    })
  }, [])


  // 楼层变化后，做模型分层显示
  useEffect(() => {
    const mapViewer = getMapViewer()

    if (mapViewer) {
      if (cameraList.length > 0 && floor && floor.length > 0) {
        const mapViewer = getMapViewer()


        // const buildId = floor.buildId
        // const floorName = floor.floorId

        // 提取指定楼层的监控
        const cameraInCurrentFloor = cameraList.filter(camera => {
          const currentCameraBuildId = camera.build_id
          const currentCameraFloorId = camera.floor_id
          const currentCameraFloorName = Build.utils.getFloorNameFromFloorId(currentCameraFloorId)

          let isCameraShow = false
          for (let activeFloor of floor) {
            if (!activeFloor.active) {
              continue
            }
            const activeFloorName = activeFloor.floorId
            const activeBuildId = activeFloor.buildId

            if (currentCameraBuildId === activeBuildId && activeFloorName === currentCameraFloorName) {
             isCameraShow = true
            }
          }

          return isCameraShow
        })

        // 生成要上图的监控图标配置
        const cameraIconConfig = cameraInCurrentFloor.map(camera => {
          const currentFloorName = Build.utils.getFloorNameFromFloorId(camera.floor_id)
          const currentFloorNumber = Build.utils.getFloorNumberFromFloorName(currentFloorName)

          return mapViewer.drawer.config.model({
            attr: {
              id: camera.id,
              device_code: camera.device_code,
              device_name: camera.device_name
            },
            scale: 1.5,
            gid: `CAMERA_${camera.model_url}`,
            location: handleGetSplitEntitiesHeight(camera.list_style, currentFloorNumber),
            // fileName: 'banqiu_cheng',
            fileName: 'banqiu',
          })
        })

        if (mapViewer.model) {
          mapViewer.model.getController().addMany(cameraIconConfig, {
            onSuccess: () => {
              setTimeout(() => {
                mapViewer.event.reBind()
              }, 100)
            }
          })
        }
      } else {
        mapViewer.drawer.remove.all()
      }
    }
  }, [cameraList, floor])

  return {
    fetchCamera
  }
}

export default useCamera
