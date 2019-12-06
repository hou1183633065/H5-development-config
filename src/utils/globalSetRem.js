// 设置 rem 函数
function setRem() {
  // 750 默认大小16px; 7500px = 20rem ;每个元素px基础上/16
  // 真机375 默认大小32px; 375px = 20rem ;每个元素px基础上/32
  const baseSize = 32;
  const deviceWidth = document.documentElement.clientWidth;
  if (deviceWidth <= 750) {
    const scale = deviceWidth / 750;
    // 设置根元素字体大小
    document.documentElement.style.fontSize =
      baseSize * Math.min(scale, 2) + "px";
  }
}
// 初始化
setRem();
// 改变窗口大小时重新设置 rem
window.onresize = function() {
  setRem();
};
