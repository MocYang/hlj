/**
 * @Author: MocYang
 * @Email: 958292256@qq.com
 * @Date: 2022/9/13 9:38
 * @File: index.js
 * @Description 动画序列
 */
import { useCallback, useRef } from 'react'

const useAnimateSequence = (sequenceId) => {
  const timerId = useRef(0)

  // 入场动画
  const play = useCallback((mapViewer, cb) => {
    if (mapViewer) {

      // 播放前，恢复到初始动画。避免从上次暂停的地方开始。
      mapViewer?.drawer.stopSequence(sequenceId)

      // 播放动画
      mapViewer?.drawer?.playSequence(sequenceId)

      const checkPlaySequenceEnd = () => {
        mapViewer?.drawer?.isPlayingSequence(sequenceId, (res) => {
          // 这里是播放结束了。
          if (res.gid === sequenceId && !res.value) {
            clearInterval(timerId.current)
            cb && cb()
          }
        })
      }

      timerId.current = setInterval(checkPlaySequenceEnd, 100)
    } else {

    }
  }, [])

  return {
    play
  }
}

export default useAnimateSequence
