<template>
  <div id="home_wrapper">
    <div id="tool_panel">
      <img src="@/assets/img/menu.svg" alt="">
    </div>
    <EarthView v-if="earth_show" />
    <MapView v-else />
  </div>
</template>

<script setup lang="ts">

// import { useAppStore } from "@/store/useAppStore";
// import { storeToRefs } from "pinia";
// const { sysLoading } = storeToRefs(useAppStore());

import { defineComponent, ref } from 'vue';
import MapView from '@/components/MapView.vue';
import EarthView from '@/components/EarthView.vue';

defineComponent({
  components: {
    MapView,
  },
});

const earth_show = ref(true);

</script>

<style scoped lang="scss">
#home_wrapper {
  position: relative;

  #tool_panel {
    position: absolute;
    z-index: 1;
    left: 4px;
    top: 4px;

    box-sizing: border-box;
    width: 32px;
    height: 32px;
    border-radius: 14%;
    padding: 0;
    vertical-align: middle;
    background: #303336;
    border: 1px solid #444;
    margin: 2px 3px;
    cursor: pointer;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: #48b;
      border-color: #aef;
      box-shadow: 0 0 8px #fff;
    }

    img {
      width: 24px;
      height: 24px;
    }
  }
}
</style>