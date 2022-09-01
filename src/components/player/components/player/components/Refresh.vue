<!--
* @Description: 刷新
* @ComponentName: Play
* @Author: wangzhigang11
* @Date: 2022-08-26 10:57
-->
<template>
    <div class="player-action-component">
        <i
                v-if="isLive"
                class="icon northeast-iconfont icon-shuaxin"
                title="刷新"
                @click="refreshCurrentVideo"
        />
    </div>
</template>

<script>

  export default {
    name: 'refresh',
    components: {},
    inject: ['player'],
    mixins: [],
    props: {},
    data() {
      return {}
    },
    watch: {},
    computed: {
      isLive () {
        return !this.player.isPlayBack
      },
    },
    created() {
    },
    beforeDestroy() {
    },
    mounted() {
    },
    methods: {
      refreshCurrentVideo () {
        this.player.refresh()
      },
    },
  }
</script>

<style scoped lang="scss">

</style>