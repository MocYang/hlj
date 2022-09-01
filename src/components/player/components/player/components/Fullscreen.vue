<!--
* @Description: 全屏、取消全屏
* @ComponentName: Fullscreen
* @Author: wangzhigang11
* @Date: 2022-08-26 11:19
-->
<template>
    <div class="player-action-component">
        <!--全屏/退出全屏-->
        <i
                v-show="isScreen"
                class="icon northeast-iconfont icon-quxiaoquanping_o"
                title="退出全屏"
                @click="exitFullscreen"
        />
        <i
                v-show="!isScreen"
                class="icon mr0 northeast-iconfont icon-quanping_o"
                title="全屏"
                @click="fullScreen"
        />
        
    </div>
</template>

<script>
  import {exitScreen, fullScreen} from "@northeast-utils/core";

  export default {
    name: 'Fullscreen',
    components: {},
    mixins: [],
    inject: ['player'],
    provide() {
      return {
        Fullscreen: this
      }
    },
    props: {},
    data() {
      return {
        isScreen: false,
      }
    },
    computed: {},
    watch: {},
    created() {
    },
    beforeDestroy() {
    },
    mounted() {
    },
    methods: {
      fullScreen () {
        this.$nextTick(() => {
          const playerContainer = this.player.$refs.playerContainer
          if (playerContainer) {
            fullScreen(playerContainer)
            this.isScreen = true
          }
        })
      },
      exitFullscreen () {
        exitScreen()
        this.isScreen = false
      },
    },
  }
</script>

<style scoped lang="scss">

</style>