<!--
* @Description: Description
* @ComponentName: PlayerFooter
* @Author: wangzhigang11
* @Date: 2022-08-06 14:17
-->
<template>
    <div :class="clsName">
      <div v-if="!isLive" :class="`${clsName}-timeline`">
        <slot name="timeline"></slot>
      </div>
      <div :class="`${clsName}-toolbar`">
        <div class="toolbar-left float-left">
          <extendsSlot slot-name="leftToolbar" v-if="showLeftToolbar" />
          <template v-else>
            <!--暂停/播放-->
            <Play />
            <Volume />
          </template>
        </div>

        <div v-if="showExtends" class="float-right menu-box">
          <div v-show="visible" class="menu-wrapper" :style="{
            bottom: isLive ? 'calc(100% + 3px)' : 'calc(100% + 20px)'
          }">
            <extendsSlot slot-name="extends" />
          </div>
          <i class="icon northeast-iconfont icon-caidanguanli" :class="{ selected: visible }" @click="showMenu" title="扩展功能"></i>
        </div>
        <div class="toolbar-right float-right menu-box">
          <div style="margin: 0 3px" v-if="showToolbar">
            <extendsSlot slot-name="toolbar" />
          </div>
          <extendsSlot slot-name="rightToolbar" v-if="showRightToolbar" />
          <template v-else>
            <Speed />
            <Capture />
            <Fullscreen />
          </template>

        </div>
      </div>

    </div>
</template>

<script>
  import extendsSlot from './extendsSlot';
  import {GLOBAL_CLASS_NAME} from "../../../config/system";
  import Play from '../Play.vue'
  import Volume from '../Volume.vue'
  import Fullscreen from '../Fullscreen.vue'
  import Capture from '../Capture.vue'
  import Speed from '../Speed.vue'

  export default {
    name: 'PlayerFooter',
    components: {
      extendsSlot,
      Play,
      Speed,
      Volume,
      Fullscreen,
      Capture
    },
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
        visible: false,
      }
    },
    computed: {
      clsName() {
        return `${GLOBAL_CLASS_NAME}footer-box`
      },
      isLive () {
        return !this.player.isPlayBack
      },

      /**
       * 增加扩展功能插槽
       * @returns {boolean}
       */
      showExtends () {
          if (this.player.$slots.extends) return this.player.$slots.extends.length > 0
          if (this.player.$scopedSlots.extends) return true
          return false
      },
      /**
       * 左侧扩展插槽
       * @returns {boolean}
       */
      showLeftToolbar () {
        if (this.player.$slots.leftToolbar) return this.player.$slots.leftToolbar.length > 0
        if (this.player.$scopedSlots.leftToolbar) return true
        return false
      },
      /**
       * 右侧扩展插槽
       * @returns {boolean}
       */
      showRightToolbar () {
        if (this.player.$slots.rightToolbar) return this.player.$slots.rightToolbar.length > 0
        if (this.player.$scopedSlots.rightToolbar) return true
        return false
      },
      /**
       * 扩展插槽
       * @returns {boolean}
       */
      showToolbar () {
        if (this.player.$slots.toolbar) return this.player.$slots.toolbar.length > 0
        if (this.player.$scopedSlots.toolbar) return true
        return false
      }
    },
    watch: {
    },
    created() {
    },
    mounted() {

    },
    beforeDestroy() {
    },
    methods: {
      showMenu () {
        this.visible = !this.visible
      },
    },
  }
</script>
