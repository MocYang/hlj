/**
 * @Author: yangqixin
 * @TIME: 2021/9/28 22:21
 * @FILE: index.js
 * @Email: 958292256@qq.com
 * @Description:
 */

import { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import useRequest from '../../../../hooks/useRequest'
import PopupContainer from '../../../../components/popup/PopupContainer'
import SimplePlayerForReact from '../../../../components/videoControl/HSilplePlayer'
import { selectClickCameraConfig, selectIsVideoPreviewPopupShow, setIsVideoPreviewPopupShow } from './slice'
import { postVideoControlConfig } from './api'
import './index.scss'

const COMMAND_LEFT = 'LEFT'
const COMMAND_RIGHT = 'RIGHT'
const COMMAND_UP = 'UP'
const COMMAND_DOWN = 'DOWN'
const COMMAND_ZOOM_IN = 'ZOOM_IN'
const COMMAND_ZOOM_OUT = 'ZOOM_OUT'

function Index({ platformIp }) {
  const {
    run: postVideoControl
  } = useRequest()

  const isVideoPreviewPopupShow = useSelector(selectIsVideoPreviewPopupShow)
  const clickCameraConfig = useSelector(selectClickCameraConfig)
  const [cameraControlShow, setCameraControlShow] = useState(false)
  const [openSound, setOpenSound] = useState(false)
  const canCameraControl = clickCameraConfig?.device_name?.indexOf('指挥') !== -1
  const canOpenSound = clickCameraConfig?.device_name?.indexOf('全景外') !== -1
  const playRef = useRef(null)

  useEffect(() => {
    if (clickCameraConfig && clickCameraConfig.url && playRef.current) {
      if (playRef.current.initPlayer) {
        playRef.current.initPlayer()
        setTimeout(() => {
          playRef.current.startPlayRealByUrl()
        }, 200)
      }
    }
  }, [clickCameraConfig, playRef])

  const onLoadResults = () => {

  }

  const handleNotifyMethod = () => {

  }

  const handleKeyCodeChange = () => {

  }

  const handleControlCamera = (command) => {
    postVideoControl(postVideoControlConfig({
      cameraIndexCode: clickCameraConfig.detail_info.cameraIndexCode,
      command,
      action: 1 // 鼠标按下，开始控制
    }))
  }

  const handleStopControlCamera = (command) => {
    postVideoControl(postVideoControlConfig({
      cameraIndexCode: clickCameraConfig.detail_info.cameraIndexCode,
      command,
      action: 0  // 鼠标抬起停止控制
    }))
  }

  const handleMouseEnter = () => {
    setCameraControlShow(true)
  }

  const handleMouseOut = () => {
    setCameraControlShow(false)
  }

  const handleShowCameraControlPanel = () => {
    setCameraControlShow(true)
  }

  const handleHideCameraControlPanel = () => {
    setCameraControlShow(false)
  }

  const handleOpenSound = () => {
    setOpenSound(true)
    if (playRef.current) {
      playRef.current.sound(true)
    }
  }

  const handleCloseSound = () => {
    setOpenSound(false)
    if (playRef.current) {
      playRef.current.sound(false)
    }
  }

  const handleClosePopup = () => {
    setOpenSound(false)
    setCameraControlShow(false)
  }

  return (
    <PopupContainer
      className={'popup__video-preview'}
      show={isVideoPreviewPopupShow}
      action={setIsVideoPreviewPopupShow}
      onClose={handleClosePopup}
    >
      <span
        className={"camera__name"}
      >
        {clickCameraConfig && clickCameraConfig.device_name || ''}
      </span>

      <div className="camera-control__wrapper">
        {
          canCameraControl && !cameraControlShow && (
            <span className="btn__control-show" onClick={handleShowCameraControlPanel}>
            显示云台
          </span>
          )
        }

        {
          canCameraControl && cameraControlShow && (
            <span className="btn__control-hide" onClick={handleHideCameraControlPanel}>
            隐藏云台
          </span>
          )
        }

        {
          canOpenSound && !openSound && (
            <span className="btn__open-sound" onClick={handleOpenSound}>
            音频已关闭
          </span>
          )
        }

        {
          canOpenSound && openSound && (
            <span className="btn__close-sound" onClick={handleCloseSound}>
            音频已打开
          </span>
          )
        }
      </div>

      {
        isVideoPreviewPopupShow && clickCameraConfig.url && (
          <SimplePlayerForReact
            initConfig={{
              strPlatIp: platformIp
              // strToken: clickCameraConfig.token // token
            }}
            src={clickCameraConfig.url}
            ref={playRef}
            bindPolicy={1}
            onLoadResults={onLoadResults}
            notifyMethod={handleNotifyMethod}
            onKeyCodeChange={handleKeyCodeChange}
          />
        )
      }

      {
        canCameraControl && cameraControlShow && (
          <div className="control-panel" hikcc_cover={"opaque"}>
            <div
              className="control__btn control__btn-left"
              onMouseDown={() => handleControlCamera(COMMAND_LEFT)}
              onMouseUp={() => handleStopControlCamera(COMMAND_LEFT)}
            />
            <div
              className="control__btn control__btn-right"
              onMouseDown={() => handleControlCamera(COMMAND_RIGHT)}
              onMouseUp={() => handleStopControlCamera(COMMAND_RIGHT)}
            />
            <div
              className="control__btn control__btn-up"
              onMouseDown={() => handleControlCamera(COMMAND_UP)}
              onMouseUp={() => handleStopControlCamera(COMMAND_UP)}
            />
            <div
              className="control__btn control__btn-down"
              onMouseDown={() => handleControlCamera(COMMAND_DOWN)}
              onMouseUp={() => handleStopControlCamera(COMMAND_DOWN)}
            />
            <div
              className="control__btn control__btn-zoomin"
              onMouseDown={() => handleControlCamera(COMMAND_ZOOM_IN)}
              onMouseUp={() => handleStopControlCamera(COMMAND_ZOOM_IN)}
            />
            <div
              className="control__btn control__btn-zoomout"
              onMouseDown={() => handleControlCamera(COMMAND_ZOOM_OUT)}
              onMouseUp={() => handleStopControlCamera(COMMAND_ZOOM_OUT)}
            />
          </div>
        )
      }
    </PopupContainer>
  )
}

export default Index
