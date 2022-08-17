/**
 * @Author: MocYang
 * @Email: 958292256@qq.com
 * @Date: 2021/8/28 15:11
 * @File: PopupContainer.js
 * @Description
 */
import { useEffect, useLayoutEffect, useRef } from 'react'
import ReactDom from 'react-dom'
import { useDispatch } from 'react-redux'
import FadeEffect from '../layout/FadeEffect'
import Loading from '../Loading'
import './index.scss'

const PopupContainer = (props) => {
  const dispatch = useDispatch()
  const dragerRef = useRef(null)
  const popupContainerRef = useRef(null)
  const {
    dragable = false,  // 是否 响应拖动的效果
    className,
    children,
    show,
    loading,
    action,
    title = '',
    on = {},
    onClose = () => null
  } = props
  const PopUpDomContainer = document.body
  const popupController = usePopupController()

  useEffect(() => {
    if (action) {
      popupController.register(action)
    }
  }, [])

  useLayoutEffect(() => {
    let handleDraggerMouseDown = () => null
    let handleDraggerMouseMove = () => null
    let handleDraggerMouseOut = () => null
    if (show && dragable && dragerRef && popupContainerRef) {
      const popupContainerDom = popupContainerRef.current
      const draggerDom = dragerRef.current
      let dragSignal = false
      let mouseStartX = 0
      let mouseStartY = 0
      const windowWidth = document.body.clientWidth
      const windowHeight = document.body.clientHeight
      const popupContainerWidth = popupContainerDom.clientWidth
      const popupContainerHeight = popupContainerDom.clientHeight
      let popupContainerOffsetLeft = popupContainerDom.offsetLeft
      let popupContainerOffsetTop = popupContainerDom.offsetTop

      handleDraggerMouseDown = (e) => {
        dragSignal = true
        mouseStartX = e.clientX
        mouseStartY = e.clientY

        // 每次鼠标按下时，都获取当前窗口的位置，作为本次拖动的起始位置
        popupContainerOffsetLeft = popupContainerDom.offsetLeft
        popupContainerOffsetTop = popupContainerDom.offsetTop
      }

      handleDraggerMouseMove = (e) => {
        if (dragSignal) {
          const currentMouseX = e.clientX
          const currentMouseY = e.clientY

          const transformMatrix = window.getComputedStyle(e.target.parentNode).transform || ''

          let transformXValue = 0
          let transformYValue = 0

          if (transformMatrix !== 'none') {
            let transformValue = transformMatrix.replace(')', '').split(',').slice(-2)
            transformXValue = Number(transformValue[0]) || 0
            transformYValue = Number(transformValue[1]) || 0
          }

          let newPositionOffsetLeft = popupContainerOffsetLeft + (currentMouseX - mouseStartX)
          let newPositionOffsetTop = popupContainerOffsetTop + (currentMouseY - mouseStartY)

          if (newPositionOffsetLeft <= -transformXValue) {
            newPositionOffsetLeft = -transformXValue
          }

          if (newPositionOffsetLeft >= (windowWidth - popupContainerWidth - transformXValue)) {
            newPositionOffsetLeft = (windowWidth - popupContainerWidth - transformXValue)
          }

          if (newPositionOffsetTop <= -transformYValue) {
            newPositionOffsetTop = -transformYValue
          }

          if (newPositionOffsetTop >= (windowHeight - popupContainerHeight - transformYValue)) {
            newPositionOffsetTop = windowHeight - popupContainerHeight - transformYValue
          }

          popupContainerDom.style.left = newPositionOffsetLeft + 'px'
          popupContainerDom.style.top = newPositionOffsetTop + 'px'
        }
      }

      handleDraggerMouseOut = (e) => {
        dragSignal = false
      }

      // 鼠标按下，拖动信号开启
      draggerDom.addEventListener('mousedown', handleDraggerMouseDown)

      // 鼠标移动，如果拖动信号开启，更改窗口的位置
      draggerDom.addEventListener('mousemove', handleDraggerMouseMove)

      // 鼠标抬起，释放拖动信号
      draggerDom.addEventListener('mouseup', handleDraggerMouseOut)

      // 如果拖动的太快，就关掉拖动信号量，避免bug
      draggerDom.addEventListener('mouseout', handleDraggerMouseOut)
    }

    return () => {
      if (show && dragerRef.current) {
        const draggerDom = dragerRef.current
        draggerDom.removeEventListener('mousedown', handleDraggerMouseDown)
        draggerDom.removeEventListener('mousemove', handleDraggerMouseMove)
        draggerDom.removeEventListener('mouseup', handleDraggerMouseOut)
        draggerDom.removeEventListener('mouseout', handleDraggerMouseOut)
      }
    }
  }, [show, dragable, dragerRef, popupContainerRef])

  const handleClose = () => {
    dispatch(action(false))
    onClose && onClose()
  }

  return (
    ReactDom.createPortal(
      <FadeEffect active={show}>
        <div
          ref={popupContainerRef}
          className={`popup__container ${className}`}
          {...on}
        >
          <div className="popup__close" onClick={handleClose} />
          <div ref={dragerRef} className="popup__dragable-header" />

          {
            title && (
              <div className="popup__title-wrapper">
                <div className="popup-title">{title}</div>
              </div>
            )
          }
          <div className="popup__content">
            {
              loading
                ? <Loading />
                : children
            }
          </div>
        </div>
      </FadeEffect>
      ,
      PopUpDomContainer
    )
  )
}

const _actionQueue = []

export function usePopupController() {
  const dispatch = useDispatch()

  function activate(action = null, disableOther = true) {
    if (disableOther) {
      deactivateAll()
    }
    dispatch(action(true))
  }

  function deactivateAll() {
    _actionQueue.forEach(action => {
      dispatch(action(false))
    })
  }

  function register(action) {
    _actionQueue.push(action)
  }

  return {
    register,
    activate,
    deactivateAll
  }
}

export default PopupContainer
