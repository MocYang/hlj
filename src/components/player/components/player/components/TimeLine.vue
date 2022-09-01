<!--
* @Description: 时间轴
* @ComponentName: TimeLine
* @Author: wangzhigang11
* @Date: 2022-08-08 10:20
-->
<template>
    <div :class="clsName" @click.stop>

        <div ref="leftTime" class="time">{{ timeComputed.current }}</div>
        <div class="line" ref="lineContainer" @click.stop>
            <div
                class="time-line"
                @click.stop="setPlayProcessByEventHandler"
                @mouseenter.stop="mouseEnter"
                @mouseleave.stop="mouseLeave"
            >
                <div v-if="showCurrentTimeTip && currentTimeTip !== 'Invalid date'" class="current-time-tip" :style="{ left: currentTimePercentWidth }">
                    {{ currentTimeTip }}
                </div>
                <div class="line-inner" :style="{ width: innerWidth }"/>
                <div class="line-inner-bg"></div>
            </div>
        </div>
        <div class="time">{{ timeComputed.total }}</div>
    </div>
</template>

<script>
  import moment from 'moment'
  import {PLAY_STATUS} from '../mixins/jsplugin.mixin';
  import {GLOBAL_CLASS_NAME} from "../../config/system";
  import { raf, caf } from './tools'
  import { timer } from '@northeast-utils/core'

  const isMobile = /mobile/i.test(window.navigator.userAgent);


  export default {
    name: 'TimeLine',
    components: {},
    inject: ['player'],
    mixins: [],
    props: {
      playTime: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        /**
         * 时间轴总长度
         */
        lineWidth: 0,
        /**
         * 进度值，小数
         */
        percent: 0,
        /**
         * 是否在拖拽
         */
        isMove: false,
        /**
         * 计算显示的时间
         */
        timeComputed: {
          // 总时长
          total: 0,
          // 当前时间
          current: 0
        },
        /**
         * 时间轴动画
         */
        timer: null,
        /**
         * 总时间间隔
         */ 
        duration: null,

        /**
         * 移动开始时间
         */ 
        moveStartTime: 0,
        
        /**
         * 时间轴拖动信息缓存
         */ 
        moveStartX: 0,

        /**
         * 将要设置的时间，用于解决云存储时间和平台时间对不上的问题
         */
        willSetTime: null,

        /**
         * 切换之前的时间
         */
        beforeSetTime: null,

        /**
         * 时间轴是否在运作
         */
        isRunner: null,

        /**
         * 记录设置时间时刻时上一次的进度条
         */
        beforeSetTimePercent: null,

        /**
         * 记录上一次的进度条
         */
        lastPercent: 0,

        /**
         * 获取视频最后播放时刻
         */
        lastVideoRunningTime: 0,

        /**
         * 当前时间提示框
         */
        currentTimeTip: '',

        currentTimePercent: 0,

        showCurrentTimeTip: false
      }
    },
    computed: {
      clsName() {
        return `${GLOBAL_CLASS_NAME}timeline-box`
      },
      /**
       * 进度条内容的快读
       * @returns {string}
       */
      innerWidth() {
        return `${this.percent * 100}%`
      },

      /**
       * 进度条内容的快读
       * @returns {string}
       */
      currentTimePercentWidth() {
        return `${this.currentTimePercent * 100}%`
      },

      sliderRef() {
        return this.$refs.lineContainer
      }
    },
    watch: {
      'player.playStatus'(playStatus) {
        if (playStatus !== PLAY_STATUS.PLAY) {
          if (playStatus === PLAY_STATUS.PAUSE) return true
          this.stopAnimate()
        } else {
          if (!this.isRunner) {
            this.isRunner = true
            this.animate()
          }
        }
       },
      playTime: {
        immediate: true,
        deep: true,
        handler(timeList) {
          if (timeList.length > 0) {
            const [startTime, endTime] = timeList
            this.duration = moment(endTime).diff(startTime, 'milliseconds')
            this.timeComputed = {
              total: this.formatSeconds(startTime, endTime),
              current: '00:00:00'
            }
            if (!this.isRunner) {
              this.isRunner = true
              this.animate()
            }
          } else {
            this.stopAnimate()
          }
        }
      },
      percent(percent, oldPercent) {
        this.lastPercent = oldPercent
        if (percent >= 1) {
          this.timeComputed.current = this.formatSeconds(0, this.duration)
          let timer = setTimeout(async () => {
            if (this.player.playStatus === PLAY_STATUS.PLAY) {
              clearTimeout(timer)
              timer = null
              await this.player.stop()
              await this.stopAnimate()
              await this.player.playEnd()
            }
          }, 1500)
        } else {
          this.timeComputed.current = this.formatSeconds(0, this.duration * percent)
        }
      },
      currentTimePercent(percent) {
        if (percent >= 1) {
          this.currentTimeTip = moment(this.player.truthEndTime).format('YYYY-MM-DD HH:mm:ss')
        } else {
          const diff = this.duration * percent
          this.currentTimeTip = moment(this.player.truthStartTime)
            .add(diff, 'milliseconds')
            .add(this.player.calibrationDistance, 'milliseconds')
            .format('YYYY-MM-DD HH:mm:ss')
        }
      }
    },
    created() {
    },
    beforeDestroy() {
      this.removeSliderBtnEvents()
      this.stopAnimate()
      this.checkTimer && this.checkTimer.stop()
    },
    mounted() {
      this.$nextTick(() => {
        this.initSliderBtnEvents();
        this.checkTimer = timer(() => {
          this.checkVideoTimeIsRunning()
        }, this.player.checkRunningDuration, true)
        if (!this.isRunner) {
          this.isRunner = true
          this.animate()
        }
      });
    },
    methods: {
      animate () {
        const [ inputStartTime ] = this.playTime
        const animate = async function() {
          try {
            // 时间轴拖拽、播放异常、进度到100%的时候不用走了
            if (
              !this.player.isAllowPlay ||
              !this.player.isPlayBack ||
              this.percent >= 1 ||
              this.player.playStatus !== PLAY_STATUS.PLAY ||
              this.isMove
            ) throw '有其他操作，暂时不能设置时间'
            const time = await this.player.getTime()

            // 根据播放初始时间和总时长生成结束时间
            // 时间校准：申请时间和视频时间进行校准
            if (!this.player.truthStartTime) {
              this.player.truthStartTime = time
            }
            if (!this.player.truthEndTime && this.duration) {
              // 计算实际结束时间
              this.player.truthEndTime = moment(this.player.truthStartTime).add(this.duration, 'milliseconds')
              // 计算校准时间
              this.player.calibrationDistance = moment(inputStartTime).diff(this.player.truthStartTime, 'milliseconds')
              if (this.player.openDebug) {
                console.log('视频时间:', `${moment(this.player.truthStartTime).format('YYYY-MM-DD HH:mm:ss')}~${moment(this.player.truthEndTime).format('YYYY-MM-DD HH:mm:ss')}`)
                console.log('视频校准间隔:', this.player.calibrationDistance)
              }
            }
            // 重新校时: 防止返回时间小于初次返回时间
            if (moment(time).diff(this.player.truthStartTime, 'milliseconds') < 0) {
              this.player.truthStartTime = time
              // 计算实际结束时间
              this.player.truthEndTime = moment(this.player.truthStartTime).add(this.duration, 'milliseconds')
              // 计算校准时间
              this.player.calibrationDistance = moment(inputStartTime).diff(this.player.truthStartTime, 'milliseconds')
              if (this.player.openDebug) {
                console.log('视频重新校准时间:', `${moment(this.player.truthStartTime).format('YYYY-MM-DD HH:mm:ss')}~${moment(this.player.truthEndTime).format('YYYY-MM-DD HH:mm:ss')}`)
                console.log('视频重新校准间隔:', this.player.calibrationDistance)
              }
            }

            // 不依赖设置时间的响应关系
            // 如果有将要设置的时间点，就按照计算得出是否设置成功
            if (this.willSetTime) {
              // 方向：切换前一刻的进度条(a1)和最后一次进度条比较(a2)
              // a1 > a2 向后切
              // a1 < a2 向前切
              const direction = this.beforeSetTimePercent - this.lastPercent

              // 向后切时: 当前时间 - 目标时间(willSetTime) >= 0
              // 向前切时: 当前时间 - 原点时间(beforeSetTime) <= 0
              let isAllowChange = direction >= 0
                ? moment(time).diff(this.willSetTime, 'milliseconds') >= 0
                : moment(time).diff(this.beforeSetTime, 'milliseconds') < 0

              if (!isAllowChange) {
                this.player.isSettingTime = true
                this.player.setLoading(true)
                // 设置成设置时间前的进度条
                if (this.beforeSetTimePercent) {
                  this.percent = this.beforeSetTimePercent
                }
                this.player.$emit('onSettingTime', { type: 'setting', player: this.player })
                throw `当前时间${time}${direction > 0 ? '小于' : '大于'}${this.willSetTime}，时间还没切换成功`
              } else {
                this.willSetTime = null
                this.player.isSettingTime = false
                this.player.setLoading(false)
                this.player.$emit('onSettingTime', { type: 'done', player: this.player })
              }
            }

            const diff = moment(time).diff(this.player.truthStartTime, 'milliseconds')
            this.player.curPlayTime = time
            const percent = diff / this.duration
            if (percent > 2) throw '进度计算异常'
            this.updateVideoState(percent)
          } catch (e) {} finally {
            if (this.timer) {
              caf(this.timer)
              this.timer = null
            }
            this.timer = raf(() => {
              animate.call(this)
            })
          }
        }
        animate.call(this)
      },
      // 格式化时间
      formatSeconds(beginTime, endTime) {
        const dateBegin = new Date(beginTime)
        const dateEnd = new Date(endTime)
        const dateDiff = dateEnd.getTime() - dateBegin.getTime() //时间差的毫秒数
        const leave1 = dateDiff % (24 * 3600 * 1000) //计算天数后剩余的毫秒数
        const hours = Math.floor(leave1 / (3600 * 1000)) //计算出小时数
        //计算相差分钟数
        const leave2 = leave1 % (3600 * 1000) //计算小时数后剩余的毫秒数
        const minutes = Math.floor(leave2 / (60 * 1000)) //计算相差分钟数
        //计算相差秒数
        const leave3 = leave2 % (60 * 1000) //计算分钟数后剩余的毫秒数
        const seconds = Math.round(leave3 / 1000)
        return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
      },

      /**
       * 更新进度条
       */
      updateVideoState(percent) {
        if (percent >= 1) {
          this.percent = 1
        } else if (percent <= 0) {
          this.percent = 0
        } else {
          this.percent = percent
        }
      },

      /**
       * 更新进度条
       */
      updateTimeState(percent) {
        if (percent >= 1) {
          this.currentTimePercent = 1
        } else if (percent <= 0) {
          this.currentTimePercent = 0
        } else {
          this.currentTimePercent = percent
        }
      },

      setTimeTip ($event) {
        $event.stopPropagation();
        if(this.showCurrentTimeTip) {
          const width = this.sliderRef.offsetWidth
          const curOffsetLeft = $event.clientX - $event.target.getBoundingClientRect().left;
          this.updateTimeState(curOffsetLeft / width)
        }
      },

      mouseEnter ($event) {
        this.showCurrentTimeTip = true
        this.setTimeTip($event)
      },
      mouseLeave ($event) {
        $event.stopPropagation();
        this.showCurrentTimeTip = false
      },

      computeMoveInfo(moveX) {
        const sliderW = this.sliderRef.offsetWidth;
        let offset = moveX - this.moveStartX;
        if (Math.abs(offset) >= sliderW) {
          offset = offset > 0 ? sliderW : -sliderW;
        }
        const percent = offset / sliderW;
        const second = this.duration * percent;
        return {percent, second};
      },

      async updateTime() {
        if (this.player.isSettingTime) return false
        // 设置视频时间
        const diff = this.duration * this.percent
        if (!this.player.truthStartTime && this.player.playStatus !== PLAY_STATUS.PLAY) {
          await this.player.resume()
        }
        if (this.player.truthStartTime) {
          // 获取目标时间
          this.willSetTime = moment(this.player.truthStartTime).add(diff, 'milliseconds').format('YYYY-MM-DD HH:mm:ss')
          // 获取原点时间，原点时间就是跳转前的时间
          if (this.player.playStatus === PLAY_STATUS.PLAY || this.player.playStatus === PLAY_STATUS.PAUSE) {
            this.beforeSetTime = await this.player.getTime()
          } else if (this.player.playStatus === PLAY_STATUS.STOP) {
            this.beforeSetTime = this.player.truthEndTime
          }
          // 2s内不进行切换
          if (Math.abs(moment(this.willSetTime).diff(this.beforeSetTime, 'seconds')) <= 2) {
            this.willSetTime = null
            return
          }
          if (this.player.playStatus === PLAY_STATUS.PLAY) {
            await this.player.pause()
          }
          await this.player.seek(this.willSetTime, this.player.truthEndTime)
        }
      },


      /**
       * 根据鼠标事件对象调整进度条位置
       * @param $event
       * @returns {boolean}
       */
      setPlayProcessByEventHandler($event, isMove) {
        $event.stopPropagation();
        if ($event.button === 2 || this.player.isSettingTime) return false
        const width = this.sliderRef.offsetWidth
        const curOffsetLeft = $event.clientX - $event.target.getBoundingClientRect().left;
        this.updateVideoState(curOffsetLeft / width)
        const distance = new Date() - this.moveStartTime
        if (!isMove && distance <= 300) {
          this.moveStartTime = 0
          this.beforeSetTimePercent = this.percent
          this.updateTime()
        }
      },

      /**
       * 初始化拖拽移动事件
       */
      initSliderBtnEvents() {
        const dragEventMap = {
          DragStart: isMobile ? 'touchstart' : 'mousedown',
          DragMove: isMobile ? 'touchmove' : 'mousemove'
        };
        Object.keys(dragEventMap).forEach(key => {
          const bindRef = key === 'DragStart' ? this.sliderRef : this.sliderRef;
          bindRef.addEventListener(dragEventMap[key], this[`handle${key}`].bind(this), false);
        });
        document.addEventListener('mouseup', this.handleDragEnd.bind(this), false)
      },
      removeSliderBtnEvents() {
        const dragEventMap = {
          DragStart: isMobile ? 'touchstart' : 'mousedown',
          DragMove: isMobile ? 'touchmove' : 'mousemove'
        };
        Object.keys(dragEventMap).forEach(key => {
          const bindRef = key === 'DragStart' ? this.sliderRef : this.sliderRef;
          bindRef.removeEventListener(dragEventMap[key], this[`handle${key}`].bind(this), false);
        });
        document.removeEventListener('mouseup', this.handleDragEnd.bind(this), false)
      },
      async handleDragStart($event) {
        $event.stopPropagation();
        if ($event.button === 2 || this.player.isSettingTime) return false
        this.moveStartTime = new Date()
        // 滑块拖拽开始
        this.isMove = true;
        this.moveStartX = $event.clientX || $event.changedTouches[0].clientX;
      },
      handleDragMove($event) {
        this.setTimeTip($event)
        $event.stopPropagation();
        if ($event.button === 2 || this.player.isSettingTime) return false
        // 滑块拖拽移动中
        if (this.isMove) {
          if (isMobile) {
            const ClienX = $event.clientX || $event.changedTouches[0].clientX;
            const {percent} = this.computeMoveInfo(ClienX);
            this.updateVideoState(percent)
          } else {
            this.setPlayProcessByEventHandler($event, true)
          }
        }
      },
      handleDragEnd($event) {
        $event.stopPropagation();
        // 滑块拖拽结束
        if (this.isMove || this.player.isSettingTime) {
          this.isMove = false
          const distance = new Date() - this.moveStartTime
          // 大于300ms当做移动
          if (distance > 300) {
            this.moveStartTime = 0
            this.beforeSetTimePercent = this.percent
            this.updateTime()
          }
        }
      },

      // 停止动画
      stopAnimate() {
        this.timeComputed.current = '00:00:00'
        this.percent = 0
        this.lastVideoRunningTime = 0
        this.isRunner = false
        if (this.timer) {
          caf(this.timer)
          this.timer = null
        }
      },

      /**
       * 监测视频是否在运行
       */
      async checkVideoTimeIsRunning () {
        if (!this.player.isSettingTime) {
          if (this.player.playStatus === PLAY_STATUS.PLAY) {
            const time = await this.player.getTime()
            if (this.lastVideoRunningTime === time) {
              this.player.setLoading(true)
            } else {
              this.lastVideoRunningTime = time
              this.player.setLoading(false)
            }
          } else {
            this.player.setLoading(false)
          }
        }
      }
    },
  }
</script>
