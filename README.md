# GIS Cesium OpenLayers



## 1.说明介绍

这是一个 **WebGIS** 练习项目，计划练习 `Vue3 + Vue Router + Pinia + Vite + TS`，三维地图采用 `Cesium`，二维地图采用 `OpenLayers`。

目前计划完成以下功能：

* 基础标绘（含数据保存与加载）——参照 [cesiumPlot](https://github.com/c-lei-en/cesiumPlot)
  * 点
  * 线
  * 面
* 信息查询
  * 查询各国首都等信息(`mockjs`拦截请求)
    * 点的显示
    * infoBox
* 地图配置
  * 昼夜分明
  * 自定义光源
  * 地形夸张
  * 风场粒子——参照 [cesium-wind-1](https://github.com/htcvszrf/cesium-wind-1)
* 其他功能——参照 [xlong-map-admin](https://github.com/xLong1029/xlong-map-admin)
  * 测距
  * 周长
  * 面积
  * 定位
  * 截图
  * 高程剖面



纯前端项目，请求由 mockjs 拦截并响应。由 Git 将本地代码 CI 到 Github，借助 Github Actions 将项目 CD 到 gh-pages 分支，通过 Github Pages 访问。







## 2.更新日志

* 2024.09.20：项目初始化
  * node版本切换至18.20.4
  * `pnpm create gis_cesium_ol --template vue-ts`
  * 引入 Vue Router 与 Pinia
  * 引入Sass
  * 引入 Cesium与OpenLayers
  * CI/CD，配置Github Pages （ [可参照这个流程](https://fireworks99.github.io/LearnVue3Demo/) ）
* 2024.09.30：
  * `pnpm add cesium@1.95.0 vite-plugin-cesium -D`  引入cesium




