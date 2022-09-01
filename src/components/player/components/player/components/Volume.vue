<!--
* @Description: 声音操作
* @ComponentName: Play
* @Author: wangzhigang11
* @Date: 2022-08-26 10:57
-->
<template>
    <div class="player-action-component">
        <i
                v-if="volume <= 0"
                class="icon northeast-iconfont icon-jingyin"
                title="静音"
                @click="toogleVolume"
        />
        <i
                v-else
                class="icon northeast-iconfont icon-shengyin_shiti"
                title="设置音量"
                @click="toogleVolume"
        />
        <i
                class="icon"
                style="margin-left: 10px"
        />
        <div style="width: 100px;">
            <el-slider
                    ref="slider"
                    v-model="volume"
                    :step="1"
                    :min="0"
                    :show-tooltip="false"
                    :max="100"
            />
        </div>
    </div>
</template>

<script>
  import { PLAY_STATUS } from '../mixins/jsplugin.mixin';
  import {debounce} from "lodash";

  export default {
    name: 'Volume',
    components: {},
    inject: ['player'],
    mixins: [],
    props: {},
    computed: {
      playStatus () {
        return this.player.playStatus
      }
    },
    data() {
      return {
        volume: -1,
        oldVolume: -1,
        isAudioError: false,
        isOpenSound: false,
        isFirstJoinSetZero: false
      }
    },
    watch: {
      async volume (volume) {
        try {
          if (this.playStatus === PLAY_STATUS.PLAY) {
            if (volume <= 0) {
              await this.player.closeSound()
              this.isOpenSound = false
            } else {
              this._setVolume && this._setVolume(volume)
            }
          }
        }catch (e) {
          if (!this.isFirstJoinSetZero) {
            this.volume = 0
          }
        }

      },
      playStatus: {
        immediate: true,
        deep: true,
        async handler (playStatus) {
          if (playStatus === PLAY_STATUS.PLAY) {
            if (this.quiet) {
              this.volume = 0
            } else {
              if (this.oldVolume === -1) {
                this.volume = 30
              } else {
                this.volume = this.oldVolume
              }
            }
          }
        }
      }
    },
    created() {
      this._setVolume = debounce(async (volume) => {
        try {
          if (this.playStatus === PLAY_STATUS.PLAY) {
            if (volume <= 0) {
              await this.player.closeSound()
              this.isOpenSound = false
            } else {
              this.oldVolume = volume
              if (!this.isOpenSound) {
                await this.player.openSound()
                this.isOpenSound = true
              }
              await this.player.setVolume(volume)
            }
          }
        }catch (e) {
          if (!this.isFirstJoinSetZero) {
            this.volume = 0
          }
        }
      }, 100)
    },
    mounted() {
      this.$nextTick(() => {
        if (this.$refs.slider) {
          document.addEventListener('mouseup', this.setElSliderComponentDragEnd.bind(this), false)
        }
      })
    },
    beforeDestroy() {
      document.removeEventListener('mouseup', this.setElSliderComponentDragEnd.bind(this), false)
    },
    methods: {
      setElSliderComponentDragEnd () {
        this.$nextTick(() => {
          if (this.$refs.slider && this.$refs.slider.$refs.button1) {
            if (this.$refs.slider.$refs.button1) {
              this.$refs.slider.$refs.button1.onDragEnd()
            }
          }
        })
      },
      async toogleVolume () {
        if (this.playStatus === PLAY_STATUS.PLAY) {

          if (this.volume > 0) {
            this.volume = 0
          } else {
            this.volume = this.oldVolume
          }
        }
      }
    },
  }
</script>

<style scoped lang="scss">

</style>