<!--
* @Description: 播放、暂停、停止插件
* @ComponentName: Play
* @Author: wangzhigang11
* @Date: 2022-08-26 10:57
-->
<template>
    <div class="player-action-component">
        <i
                v-if="showPlay"
                class="icon northeast-iconfont icon-bofang"
                title="播放"
                @click="playCurrentVideo"
        />
        <i
                v-if="showPause"
                class="icon northeast-iconfont icon-24gf-pause2"
                title="暂停"
                @click="pauseCurrentVideo"
        />
        <i
                v-if="showStop"
                class="icon northeast-iconfont icon-24gf-stop"
                title="停止"
                @click="stopCurrentVideo"
        />
        <i v-if="isLive" class="live">预览中</i>
    </div>
</template>

<script>
  import { PLAY_STATUS } from '../mixins/jsplugin.mixin';

  export default {
    name: 'Play',
    components: {},
    inject: ['player'],
    mixins: [],
    props: {},
    data() {
      return {}
    },
    computed: {
      isLive () {
        return !this.player.isPlayBack
      },
      showStop () {
        return this.isLive && this.playStatus !== PLAY_STATUS.STOP
      },
      playStatus () {
        return this.player.playStatus
      },
      showPause () {
        if (this.isLive) return false
        if (this.showPlay) return false
        return true
      },
      showPlay () {
        if (this.playStatus !== PLAY_STATUS.PLAY) return true
        return false
      },
    },
    watch: {},
    created() {
    },
    beforeDestroy() {
    },
    mounted() {
    },
    methods: {
      async playCurrentVideo () {
        await this.player.resume()
      },
      pauseCurrentVideo () {
        this.player.pause()
      },
      async stopCurrentVideo () {
        await this.player.stop()
      },
    },
  }
</script>

<style scoped lang="scss">

</style>