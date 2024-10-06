<template>
  <div id="earth" class="earth-container"></div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import * as Cesium from 'cesium';

onMounted(() => {
  Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiY2ExNmYyOC0yYjk5LTRjOGMtYTI0ZC0xZmFmMDAwMzhlZDUiLCJpZCI6NTI1MjgsImlhdCI6MTYxODY2NjE5N30.ETTMOAYLjTMplvAxKehiZCrzT1o2s--bFqREAOSP3fg';
  const viewer = new Cesium.Viewer('earth', {
    infoBox: false,//不设为false会报错
    geocoder: false,//右上角搜索按钮
    navigationHelpButton: false,//右上角帮助按钮
    selectionIndicator: false,//点击后地图上显示的选择控件
    baseLayerPicker: false,//右上角图层选择器
    showRenderLoopErrors: false,//HTML面板中显示错误信息
    fullscreenButton: true,//右下角全屏按钮
    sceneModePicker: false,//右上角2D和3D之间的切换
    scene3DOnly: true, // 如果设置为true，则所有几何图形以3D模式绘制以节约GPU资源
    timeline: true, // 页面下方的时间条
    animation: false, // 左下角圆盘 速度控制器
    imageryProvider: new Cesium.ArcGisMapServerImageryProvider({
      url: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",
      enablePickFeatures: false,
    }),
    terrainProvider: Cesium.createWorldTerrain({
      requestVertexNormals: true,
      requestWaterMask: true
    })
  });

  //隐藏 商标版权与数据源
  (viewer.cesiumWidget.creditContainer as HTMLElement).style.display = 'none';

  setTimeout(() => {
    (viewer.timeline.container as HTMLElement).style.display = 'none';//默认隐藏时间轴
  });

  // 设置相机的初始视图，使相机对准中国
  viewer.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(104.1954, 35.8617, 20000000), // 中国的经纬度和高度
  });

  // 设置 Home 按钮的新默认位置
  viewer.homeButton.viewModel.command.beforeExecute.addEventListener(function (e) {
    e.cancel = true; // 取消默认行为
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(104.1954, 35.8617, 20000000), // 中国的经纬度和高度
    });
  });
});

</script>

<style scoped lang="scss">
.earth-container {
  width: 100%;
  height: 100vh;
}
</style>