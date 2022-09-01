/**
 * @Description: 工具类
 * @ComponentName: tools
 * @Author: wangzhigang11
 * @Date: 2022-08-08 14:30
 */
// 开始动画
export const raf =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function(callback) {
    return window.setTimeout(callback, 1000 / 60);
  };

// 结束动画
export const caf =
  window.cancelAnimationFrame ||
  window.webkitCancelAnimationFrame ||
  window.mozCancelAnimationFrame ||
  window.oCancelAnimationFrame ||
  function(timer) {
    window.clearTimeout(timer);
  };
