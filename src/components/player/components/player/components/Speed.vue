<!--
* @Description: 倍速
* @ComponentName: Speed
* @Author: wangzhigang11
* @Date: 2022-08-26 11:23
-->
<template>
    <div class="player-action-component">
        <i v-if="!isLive" class="speed" title="倍速" @click="toogleSpeed">x{{ player.currentSpeed }}
            <div v-show="speedVisible" class="menu-wrapper speed-position" style="width: 50px">
                <div class="menu-item" @click="player.setSpeed(8)">x8</div>
                <div class="menu-item" @click="player.setSpeed(4)">x4</div>
                <div class="menu-item" @click="player.setSpeed(2)">x2</div>
                <div class="menu-item" @click="player.setSpeed(1)">x1</div>
            </div>
        </i>
    </div>
</template>

<script>
  export default {
    name: 'Speed',
    components: {},
    mixins: [],
    inject: ['player'],
    provide() {
      return {
        Speed: this
      }
    },
    props: {},
    data() {
      return {
        speedVisible: false
      }
    },
    computed: {
      isLive () {
        return !this.player.isPlayBack
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
      async toogleSpeed () {
        this.speedVisible = !this.speedVisible
      }
    },
  }
</script>

<style scoped lang="scss">

</style>