/**
 * @Author: MocYang
 * @Email: 958292256@qq.com
 * @Date: 2021/7/20 9:18
 * @File: EventBus.js
 * @Description 1
 */

class EventsBus {
  constructor() {
    this.events = new Map()
  }

  _add(key, fn, isOnce) {
    const m = this.events.get(key)

    const fnMap = m ? m : this.events.set(key, new Map()).get(key)

    fnMap.set(key, (...arg) => {
      fn(...arg)
      isOnce && this.off(key, fn)
    })
  }

  /**
   * 注册一个事件
   * @param key 事件对应的key，应该唯一
   * @param fn 事件触发时的回调
   * @param args 需要传给回调的参数
   */
  on(key, fn) {
    if (!fn) {
      console.error('No callback for key: ', key)
      return
    }
    this._add(key, fn, false)
  }

  off(key, fn) {
    const fnMap = this.events.get(key)
    if (fnMap) {
      fnMap.delete(fn)
    }
  }

  /**
   * 触发对应的事件回调
   * @param key
   * @param args
   */
  dispatch(key, ...args) {
    const fnMap = this.events.get(key)
    if (!fnMap) {
      console.error('No callback for key: ', key)
      return
    }
    for (let [, cb] of fnMap.entries()) {
      cb(...args)
    }
  }

  once(key, fn) {
    this._add(key, fn, true)
  }
}

export default new EventsBus()
