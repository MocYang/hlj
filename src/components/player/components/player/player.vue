<!--
* @Description: Description
* @ComponentName: test
* @Author: wangzhigang11
* @Date: 2022-08-06 10:11
-->
<template>
  <div ref="playerContainer" :class="clsName">
    <div :id="playerId" ref="playerWrapper"/>
    <Layout v-if="controls" :quiet="quiet">
      <template slot="header" >
        <PlayerHeader :title="cameraName" />
      </template>
      <template slot="footer">
        <PlayerFooter>
          <template slot="timeline">
            <TimeLine :play-time="playTime"></TimeLine>
          </template>
        </PlayerFooter>
      </template>
    </Layout>
  </div>
</template>

<script>
  import {GLOBAL_CLASS_NAME} from "../config/system";
  import jsPluginMixin from './mixins/jsplugin.mixin'
  import Layout from './components/PlayerLayout/Layout.vue'
  import PlayerFooter from './components/PlayerLayout/PlayerFooter.vue';
  import PlayerHeader from './components/PlayerLayout/PlayerHeader.vue';
  import TimeLine from './components/TimeLine.vue';
  import Play from "./components/Play.vue";
  import Volume from "./components/Volume.vue";
  import Fullscreen from "./components/Fullscreen.vue";
  import Capture from "./components/Capture.vue";
  import Speed from "./components/Speed.vue";
  import Refresh from "./components/Refresh.vue";
  const Player = {
    name: 'Player',
    components: {
      Layout,
      PlayerFooter,
      PlayerHeader,
      TimeLine
    },
    mixins: [jsPluginMixin],
    props: {
      /**
       * 水印
       */
      watermark: {
        type: String,
        default: ''
      }
    },
    provide() {
      return {
        player: this
      }
    },

    computed: {
      clsName() {
        return `${GLOBAL_CLASS_NAME}player`
      },
    },

    created() {

    },
    beforeDestroy() {
    },

    methods: {

    }
  }

  Player.Play = Play
  Player.Volume = Volume
  Player.Fullscreen = Fullscreen
  Player.Capture = Capture
  Player.TimeLine = TimeLine
  Player.Speed = Speed
  Player.Refresh = Refresh

  export default Player
</script>
