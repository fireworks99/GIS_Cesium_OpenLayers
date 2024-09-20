<template>
  <div id="map" class="map-container"></div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import 'ol/ol.css'; // 引入 OpenLayers 样式
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

onMounted(() => {
  new Map({
    target: "map", // 地图容器
    layers: [
      new TileLayer({
        source: new OSM(), // 使用 OSM 作为底图
      }),
    ],
    view: new View({
      center: [0, 0], // 中心坐标
      zoom: 2, // 缩放级别
    }),
  });
});


</script>

<style>
.map-container {
  width: 100%;
  height: 100vh;
  /* 设置地图容器的高度 */
}
</style>
