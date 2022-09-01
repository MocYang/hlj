<!--
* @Description: 截图
* @ComponentName: Capture
* @Author: wangzhigang11
* @Date: 2022-08-26 11:22
-->
<template>
    <div class="player-action-component">
        <i class="icon northeast-iconfont icon-jietu" title="截图" @click="capture"></i>
    </div>
</template>

<script>
  export default {
    name: 'Capture',
    components: {},
    mixins: [],
    inject: ['player'],
    provide() {
      return {
        Capture: this
      }
    },
    props: {},
    data() {
      return {}
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
      capture () {
        this.player.capture()
      },
    },
  }
</script>

<style scoped lang="scss">

</style>