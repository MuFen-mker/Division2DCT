<template>
  <div>
    <Head-Frame></Head-Frame>
    <Body-Gui></Body-Gui>
    <Bottom-Bar></Bottom-Bar>
  </div>
</template>

<script>
import HeadFrame from './components/Head-Frame.vue'
import BodyGui from './components/Body-Gui.vue'
import BottomBar from './components/BottomBar.vue'
import $ from 'jquery'

export default {
  name: 'App',
  components: {
    HeadFrame,
    BodyGui,
    BottomBar,
  },
  mounted() {
    $(function () {
      var shikou = document.documentElement.clientWidth
      if (shikou > 730) {
        loadMain() //加载主方法
      }
    })

    // setInterval("loadMain()",300000); //每5分钟刷新一次;

    var firstFlag = true //初次加载
    var isFullScreen = 0 //是否全屏：0否，1是
    var systemRatioOld = window.devicePixelRatio //初始系统乘浏览器的缩放比
    var systemRatioNew = window.devicePixelRatio //加载后系统乘浏览器的缩放比
    var defaultRatio = 1.0 //默认缩放比
    var fullScreenRatio = 1.0 //全屏缩放比
    var setZoom = defaultRatio / systemRatioNew //默认zoom

    //缩放
    function autoZoom() {
      systemRatioNew = window.devicePixelRatio //系统乘浏览器的缩放比

      if (isFullScreen == 0) {
        setZoom = defaultRatio / systemRatioNew //默认zoom
      } else if (isFullScreen == 1) {
        setZoom = fullScreenRatio / systemRatioNew //全屏zoom
      }

      setZoom = setZoom.toFixed(6) //四舍五入保留小数点后6位
      setZoom = parseFloat(setZoom) //去掉小数点后的0
      if (setZoom != document.body.style.zoom) {
        console.log(
          '系统乘浏览器的缩放比:' +
            systemRatioNew +
            ' 调整前zoom:' +
            document.body.style.zoom +
            ' 调整后zoom:' +
            setZoom
        )
        document.body.style.zoom = setZoom
      }
    }

    //主方法
    function loadMain() {
      systemRatioNew = window.devicePixelRatio //系统乘浏览器的缩放比

      if (systemRatioOld != systemRatioNew || firstFlag) {
        firstFlag = false
        systemRatioOld = systemRatioNew
        // console.log("系统乘浏览器的缩放比:"+systemRatioNew+" 调整前zoom:"+document.body.style.zoom+" 调整后zoom:"+parseFloat((fullScreenRatio/systemRatioNew).toFixed(6)));
        document.body.style.zoom = fullScreenRatio / systemRatioNew //初次加载或者改变缩放后修改成全屏缩放比
      }

      /*
        这块用来加载其他function 
    */

      autoZoom()
    }
  },
}
</script>

<style>
* {
  color: black;
  /*全局字体颜色*/
  margin: 0;
  padding: 0;
}

@font-face {
  font-family: 'myfont';
  src: url('./assets/方正粗圆.ttf'), url('./assets/方正粗圆.eot'),
    url('./assets/方正粗圆.svg'), url('./assets/方正粗圆.woff'),
    url('./assets/方正粗圆.woff2');
}
</style>
