<!--
* @Description: 播放器顶部
* @ComponentName: PlayerHeader
* @Author: wangzhigang11
* @Date: 2022-08-06 14:17
-->
<template>
    <div :class="clsName">
        <extendsSlot v-if="showHeader" slot-name="header" />
        <template v-else>
            <i class="northeast-iconfont icon-shexiangtou_shiti"></i>
            <div :class="`${clsName}-title`" v-text="title"></div>
        </template>
    </div>
</template>

<script>
  import {GLOBAL_CLASS_NAME} from "../../../config/system";
  import extendsSlot from './extendsSlot';

  export default {
    name: 'PlayerHeader',
    components: {
      extendsSlot
    },
    mixins: [],
    inject: ['player'],
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    data() {
      return {}
    },
    computed: {
      showHeader () {
        if (this.player.$slots.header) return this.player.$slots.header.length > 0
        if (this.player.$scopedSlots.header) return true
        return false
      },
      clsName() {
        return `${GLOBAL_CLASS_NAME}header-box`
      },
    },
    watch: {},
    created() {
    },
    beforeDestroy() {
    },
    mounted() {
    },
    methods: {},
  }
</script>
