<!--
* @Description: 播放器布局
* @ComponentName: Layout
* @Author: wangzhigang11
* @Date: 2022-08-06 14:19
-->
<template>
    <div :class="clsName" @mouseenter.stop="mouseEnter" @mouseleave.stop="mouseLeave">
        <div :class="`${clsName}-header`" v-show="showHeaderAndFooter">
            <slot name="header"></slot>
        </div>
        <div v-if="player.loading" class="loading-mask">
            <el-load-icon class="load-icon"></el-load-icon>
        </div>
        <div class="watermark" ref="watermark" />
        <div v-show="showHeaderAndFooter" :class="{[`${clsName}-footer`]: true, live: isLive }">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
  import {GLOBAL_CLASS_NAME} from "../../../config/system";
  import Watermark from "../../../utils/Watermark";

  export default {
    name: 'Layout',
    components: {},
    inject: ['player'],
    mixins: [],
    props: {
      /**
       * 是否静音
       */
      quiet: {
        type: Boolean,
        default: false
      },
    },
    data() {
      return {
        showHeaderAndFooter: false
      }
    },
    computed: {
      isLive() {
        return !this.player.isPlayBack
      },
      clsName() {
        return `${GLOBAL_CLASS_NAME}player-layout`
      },
    },
    watch: {
      'player.watermark': {
        immediate: true,
        deep: true,
        handler (watermark, oldWatermark) {
          if (watermark !== oldWatermark) {
            this.$nextTick(() => {
              if (this.$refs.watermark) {
                if (!this.watermarkInstance) {
                  this.watermarkInstance = new Watermark({
                    container: this.$refs.watermark
                  })
                }
                if (!oldWatermark) {
                  this.watermarkInstance.draw(watermark)
                } else {
                  this.watermarkInstance.reDraw(watermark)
                }
              }
            })
          }


        }
      }
    },
    created() {
    },
    beforeDestroy() {
    },
    mounted() {

    },
    methods: {
      mouseEnter() {
        this.showHeaderAndFooter = true
      },
      mouseLeave() {
        this.showHeaderAndFooter = false
      }
    },
  }
</script>
