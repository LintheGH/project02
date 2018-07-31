/*
* computed_rem 计算 rem
* @params pictureWidth：设计图宽度 number （ 750 ）
* @params remWidth: 使用的 rem 宽度 number （ 100 ）
* return void
*/
var computedRem = function (pictureWidth = 750, remWidth = 100) {
  let html = document.documentElement
  html.style.fontSize = html.clientWidth / (pictureWidth / (remWidth * 2))
  window.onresize = function () {
    let html = document.documentElement
    html.style.fontSize = html.clientWidth / (pictureWidth / (remWidth * 2))
  }
}
export default computedRem
