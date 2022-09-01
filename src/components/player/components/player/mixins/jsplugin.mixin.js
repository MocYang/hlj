

/**
 * @Description: jsplugin的相关方法
 * @ComponentName: jsplugin.mixin.js
 * @Author: wangzhigang11
 * @Date: 2022-08-06 13:57
 */
import {urlJoin, EventBus, guid} from '@northeast-utils/core';
import resize from './resize'
import download from './download'
import moment from 'moment'
/**
 * 加载播放器脚本后执行
 * @param cb
 */
export const loadedPlayerScript = (function() {
  let scriptLoading = false
  return function(basePath) {
    return new Promise(resolve => {
      if (window.JSPlugin) {
        resolve(window.JSPlugin)
      } else {
        // 保证只加载一次脚本
        if (!scriptLoading) {
          scriptLoading = true
          let scriptEl = document.createElement('script');
          scriptEl.type = 'text/javascript';
          scriptEl.src = urlJoin(`/${basePath}/h5player.min.js`);
          scriptEl.onload = () => {
            scriptLoading = false
            // 载入后通知其他调用者
            event.$emit('JS_PLUGIN_LOADED', window.JSPlugin)
            resolve(window.JSPlugin)
          };
          document.body.appendChild(scriptEl);
        } else {
          // 其他调用者接收通知进行后续业务
          event.$on('JS_PLUGIN_LOADED', () => {
            resolve(window.JSPlugin)
          })
        }
      }
    })

  }
})()

export const PLAY_STATUS = {
  PLAY: 'PLAY',
  PAUSE: 'PAUSE',
  STOP: 'STOP',
  END: 'END',
  ERROR: 'ERROR'
}

const event = new EventBus()
export default {
  mixins: [resize, download],
  props: {
    /**
     * 监测运行时间间隔
     */
    checkRunningDuration: {
      type: Number,
      default: 2000
    },
    /**
     * 是否铺满整个容器
     * 默认false: 按照比例计算高度16:9
     */
    cover: {
      type: Boolean,
      default: false
    },
    /**
     * 比例等级
     */
    scale: {
      type: Number,
      default: 16 / 9
    },
    /**
     * 摄像头名称
     */
    cameraName: {
      type: String,
      default: ''
    },
    /**
     * 是否静音
     */
    quiet: {
      type: Boolean,
      default: false
    },
    controls: {
      type: Boolean,
      default: () => true
    },
    /**
     * jsPlugin存放目录
     */
    basePath: {
      type: String,
      default: `/jsPlugin`
    },
    /**
     * 是否打开调试模式
     */
    openDebug: {
      type: Boolean,
      default:process.env.NODE_ENV === 'development'
    },

    /**
     * 播放模式
     * 1. 高级模式
     * 0. 普通模式
     */
    playMode: {
      type: Number,
      default: 1
    },

    /**
     * 播放url
     */
    src: {
      type: String,
      default: () => ''
    },
    /**
     * 播放起止时间
     */
    playTime: {
      type: Array,
      default: () => []
    },

    /**
     * 切换时间的结束时间点
     */
    seekEndTime: {
      type: [String, Date, Number],
      default: null
    }
  },
  watch: {
    src: {
      immediate: true,
      async handler(nSrc, oSrc) {
        if (this.playStatus !== PLAY_STATUS.STOP) {
          await this.stop()
        }
        this.resetConfigure()
        if (!nSrc) {
          this.playStatus = PLAY_STATUS.STOP
        }
        if (nSrc !== oSrc) {
          this.playCurrentSrc()
        }
      }
    },
    isAllowPlay(isAllowPlay) {
      if (!isAllowPlay) {
        this.playStatus = PLAY_STATUS.STOP
        this.stop()
      }
    },
    playTime: {
      deep: true,
      handler () {
        this.playCurrentSrc()
      }
    }
  },
  computed: {
    isAllowPlay () {
      if (this.src.length > 0) {
        // 回放时时间传的有误
        if (this.playTime.length === 1) {
          this.playLog('回放时间必须同时存在起止时间')
          return false
        }
        return true
      }
      return false
    },
    isPlayBack () {
      return this.playTime.length >= 2
    }
  },
  data() {
    return {
      loading: false,
      playerId: `player_${guid()}`,
      isInit: false,
      playStatus: PLAY_STATUS.STOP,
      resumeTimes: 0,
      seekTimes: 0,
      currentSpeed: 1,
      size: {
        width: 0,
        height: 0
      },
      isSoundError: false,
      curPlayTime: 0,
      /**
       * 是否正在设置时间
       */
      isSettingTime: false,

      /**
       * 真实开始时间
       */
      truthStartTime: null,
      /**
       * 真实结束时间
       */
      truthEndTime: null,

      /**
       * 校准值：真实时间与传入时间的校准值
       */
      calibrationDistance: 0,

    }
  },
  async beforeDestroy() {
    await this.stop()
    this.resetConfigure()
  },
  mounted() {
    this.playCurrentSrc()
  },
  methods: {
    resetConfigure () {
      this.truthStartTime = null
      this.truthEndTime = null
      this.calibrationDistance = null
      this.currentSpeed = 1
      this.curPlayTime = 0
      this.resumeTimes = 0
      this.seekTimes = 0
      this.playStatus = PLAY_STATUS.STOP
      this.isSettingTime = false
    },
    setLoading (loading) {
      // this.loading = false
      this.loading = loading
    },

    async playCurrentSrc () {
      try {
        this.isSoundError = false
        this.setLoading(true)
        if (!this.isInit) {
          await loadedPlayerScript(this.basePath)
          this.$nextTick(() => {
            if (this.$refs.playerWrapper) {
              this.initPlayer()
              this.initEvents()
              this.resume()
            }
          })
        } else {
          if (!this.isAllowPlay) {
            if (this.playStatus !== PLAY_STATUS.STOP) {
              await this.stop()
            }
          } else {
            if (this.playStatus === PLAY_STATUS.STOP) {
              await this.resume()
            } else {
              await this.replay()
            }
          }
        }
      }finally {
        this.setLoading(false)
      }
    },
    playLog (...args) {
      if (this.openDebug) {
        console.log(...args)
      }
    },
    /**
     * 初始化播放器
     */
    initPlayer () {
      if (!this.isInit) {
        const dom = this.$refs.playerContainer
        const width = dom.offsetWidth
        const height = this.cover ? dom.offsetHeight : width / this.scale
        this.size = { width, height }
        const currentPlayer = new JSPlugin({
          szId: this.playerId, // 保证容器ID唯一性
          szBasePath: urlJoin(`/${this.basePath}`), // 必填,引用H5player.min.js的js相对路径
          iWidth: width,
          iHeight: height,
          // 不进行分屏，原因是常规播放器分屏幕不符合常规
          iMaxSplit: 1,
          iCurrentSplit: 1,
          openDebug: this.openDebug,
          // 样式
          oStyle: {
            border: '#010101',
            borderSelect: '#010101',
            background: '#010101'
          }
        })
        this.currentPlayer = currentPlayer
        this.isInit = true
      }

    },

    resizePlayer () {
      this.$nextTick(() => {
        if (this.$refs.playerContainer) {
          const dom = this.$refs.playerContainer
          const width = dom.offsetWidth
          const height = this.cover ? dom.offsetHeight : width / this.scale
          this.size = { width, height }
          this.currentPlayer.JS_Resize (width, height)
        }
      })
    },

    initEvents () {
      if (this.currentPlayer) {
        const self = this
        this.currentPlayer.JS_SetWindowControlCallback({
          /**
           * 插件错误处理机
           * @param index
           * @param iErrorCode
           * @param oError
           */
          async pluginErrorHandler (index, iErrorCode, oError) {
            self.$emit('change', {
              type: 'error',
              code: iErrorCode,
              wiki: 'https://wiki.hikvision.com.cn/pages/viewpage.action?pageId=164628607'
            })
            self.playStatus = PLAY_STATUS.ERROR
            self.setLoading(false)
            await self.stop()
            await self.resetConfigure()
          },

          /**
           * 鼠标移过回调
           */
          windowEventOver () {
            self.$emit('change', {
              type: 'mouseEnter',
              message: '鼠标进入',
            })
          },

          /**
           * 鼠标移过回调
           */
          windowEventOut () {
            self.$emit('change', {
              type: 'mouseLeave',
              message: '鼠标离开',
            })
          },


          /**
           * 性能不足
           */
          performanceLack () {
            if (!self.isSettingTime) {
              self.setLoading(false)
            }
            self.$emit('change', {
              type: 'performance',
              code: '-1',
              message: '性能不足',
              wiki: 'https://wiki.hikvision.com.cn/pages/viewpage.action?pageId=164637221'
            })
          },

          async StreamEnd () {
            self.playEnd()
          }
        })
      }
    },

    playEnd () {
      if (this.openDebug) {
        console.log('endTime:', moment(this.curPlayTime).format('YYYY-MM-DD HH:mm:ss'))
      }
      this.setLoading(false)
      this.$emit('change', {
        type: 'playEnd',
        message: '回放结束',
      })
      this.resetConfigure()
      this.playStatus = PLAY_STATUS.END
    },

    /**
     * 播放
     * @returns {Promise<boolean>}
     */
    async play () {
      if (!this.isAllowPlay) return false
      const params = [
        this.src,
        { playURL: this.src, mode: this.playMode },
        1,
      ]
      if (this.openDebug) {
        console.log('playTime:', this.playTime.map(time => `${moment(time).format('YYYY-MM-DDTHH:mm:ss')}Z`).join('~'))
      }
      if (this.isPlayBack) {
        params.push.apply(params, this.playTime.map(time => `${moment(time).format('YYYY-MM-DDTHH:mm:ss')}Z`))
      }
      try {
        if (this.playStatus !== PLAY_STATUS.PLAY) {
          await this.currentPlayer.JS_Play.apply(this.currentPlayer, params)
          this.playStatus = PLAY_STATUS.PLAY
          this.$emit('change', {
            type: 'play',
          })
        }
      } catch (e) {
        this.playStatus = PLAY_STATUS.STOP
      }

    },

    async replay () {
      await this.stop()
      await this.resume()
    },


    async stop () {
      if (!this.isAllowPlay || this.isSettingTime) return false
      try {
        if (this.playStatus !== PLAY_STATUS.STOP) {
          await this.currentPlayer.JS_Stop(1)
          this.$emit('change', {
            type: 'stop',
          })
        }

      } finally {
        this.playStatus = PLAY_STATUS.STOP
        if (!this.isSettingTime) {
          this.setLoading(false)
        }
      }
    },
    async pause () {
      if (!this.isAllowPlay || this.isSettingTime) return false
      try {
        if (this.playStatus === PLAY_STATUS.PLAY) {
          await this.currentPlayer.JS_Pause(1)
          this.$emit('change', {
            type: 'pause',
          })
          this.playStatus = PLAY_STATUS.PAUSE
        }
      } catch (e) {
        this.playStatus = PLAY_STATUS.STOP
      } finally {
        if (!this.isSettingTime) {
          this.setLoading(false)
        }
      }
    },

    /**
     * 恢复播放
     * @returns {Promise<boolean>}
     */
    async resume () {
      if (!this.isAllowPlay) return false
      try {
        await this.currentPlayer.JS_Resume(1)
        this.$emit('change', {
          type: 'resume',
        })
        this.playStatus = PLAY_STATUS.PLAY
      }catch (e) {
        if (this.resumeTimes >= 2) {
          this.resumeTimes = 0
          // 三次调用不通就调用一次play，最终都不通后抛出异常，并提示刷新
          try {
            await this.play()
          }catch (e) {
            this.playStatus = PLAY_STATUS.STOP
            this.refresh()
            throw e
          }
        } else {
          this.resumeTimes += 1
          await this.resume()
        }
      }
    },
    refresh () {
      this.$emit('refresh', this)
    },

    /**
     * 倍速
     * @returns {Promise<boolean>}
     */
    async fast () {
      if (!this.isAllowPlay) return false
      await this.currentPlayer.JS_Fast(1)
    },
    /**
     * 慢速
     * @returns {Promise<boolean>}
     */
    async slow () {
      if (!this.isAllowPlay) return false
      await this.currentPlayer.JS_Slow(1)
    },

    /**
     * 设置倍速
     * @param speed
     * @returns {Promise<void>}
     */
    async setSpeed (speed) {
      if (this.playStatus !== PLAY_STATUS.PLAY) {
        await this.resume()
      }
      while (true) {
        try {
          // 增速
          if (this.currentSpeed < speed) {
            await this.fast()
            this.currentSpeed *= 2
          }
          // 降速
          else {
            await this.slow()
            this.currentSpeed *= 0.5
          }
          if (this.currentSpeed === speed) break
        } catch (e) {
          console.error('setSpeed:', e);
          break
        }
      }
    },


    delay () {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve('success')
        }, 2000)
      })
    },
    /**
     * 跳转时间
     * @param startTime
     * @param endTime
     * @returns {Promise<boolean>}
     */
    async seek (startTime, endTime) {
      if (!this.isAllowPlay) return false
      // 跳转时间校准
      const times = [
        1,
        `${moment(startTime).add(this.calibrationDistance, 'milliseconds').format('YYYY-MM-DDTHH:mm:ss')}Z`,
        `${moment(this.seekEndTime || endTime)
          .add(this.calibrationDistance, 'milliseconds')
          .format('YYYY-MM-DDTHH:mm:ss')}Z`,
      ]
      if (this.openDebug) {
        console.log('seek:', times.join(' '))
      }
      try {
        if (
          this.playStatus === PLAY_STATUS.STOP ||
          this.playStatus === PLAY_STATUS.END ||
          this.playStatus === PLAY_STATUS.ERROR
        ) {
          await this.resume()
        }
        await this.currentPlayer.JS_Seek.apply(this.currentPlayer, times)
        if (this.playStatus !== PLAY_STATUS.PLAY) {
          await this.resume()
        }
      } catch (error) {
        if (this.seekTimes >= 2) {
          this.seekTimes = 0
          // 三次调用不通就调用一次play，最终都不通后抛出异常，并提示刷新
          try {
            await this.seek(startTime, endTime)
          } catch (error2) {
            throw '设置时间异常'
          }
        } else {
          this.seekTimes += 1
          await this.seek(startTime, endTime)
        }
      }
    },
    /**
     * 开启放大缩小
     * @returns {Promise<boolean>}
     */
    async enableZoom () {
      if (!this.isAllowPlay) return false
      await this.currentPlayer.JS_EnableZoom(1)
    },
    /**
     * 获取时间
     * @returns {Promise<boolean|*>}
     */
    async getTime () {
      if (!this.isAllowPlay) return false
      return this.currentPlayer.JS_GetOSDTime(1)
    },
    /**
     * 设置连接超时
     * @param nTime
     * @returns {Promise<boolean>}
     */
    async setConnectTimeOut (nTime) {
      if (!this.isAllowPlay) return false
      await this.currentPlayer.JS_SetConnectTimeOut (1, nTime)
    },

    /**
     * @author xuzilong
     * @desc 单个抓图
     * @param {Number} index 抓图视窗的序号
     * @param {Any} name 抓图保存的名称（默认当前时间戳）
     * @param {String} fileType 文件类型（BMP/JPEG）
     * @param {Function} callback 回调函数
     * @return {Promise}
     */
    capture () {
      if (!this.isAllowPlay) return false
      this.currentPlayer.JS_CapturePicture(1, `capture_${moment().format('YYYY-MM-DD_HH:mm:ss')}`, 'JPEG', (base64) => {
        this.downloadFileByBase64(base64, this.cameraName)
      })

    },

    closeSound () {
      if (!this.isAllowPlay) return false
      return this.currentPlayer.JS_CloseSound(1).catch(err => {
        console.error('开启声音【JS_CloseSound】:', err)
        throw err
      })
    },

    openSound () {
      if (!this.isAllowPlay) return false
      return this.currentPlayer.JS_OpenSound(1).catch(err => {
        console.error('开启声音【JS_OpenSound】:', err)
        throw err
      })
    },

    getVolume () {
      if (!this.isAllowPlay) return false
      return this.currentPlayer.JS_GetVolume(1).catch(err => {
        console.error('获取音量【JS_GetVolume】:', err)
        throw err
      })
    },

    setVolume (volume) {
      if (!this.isAllowPlay) return false
      return this.currentPlayer.JS_SetVolume(1, volume).catch(err => {
        console.error('设置音量【JS_SetVolume】:', err)
        throw err
      })
    },

    /**
     * 获取视频实例
     * @returns {JSPlugin}
     */
    getPlayerInstance () {
      return this.currentPlayer
    }
  }
}
