import Player from './player.vue'

/* istanbul ignore next */
Player.install = function(Vue) {
  Vue.component(Player.name, Player);
};
export default Player;
