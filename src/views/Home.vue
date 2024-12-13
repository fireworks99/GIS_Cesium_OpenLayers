<template>
  <div id="home_wrapper">
    <FuncPanel id="func_panel"/>
    <EarthView v-if="earth_show" />
    <MapView v-else />
  </div>
</template>

<script setup lang="ts">

// import { useAppStore } from "@/store/useAppStore";
// import { storeToRefs } from "pinia";
// const { sysLoading } = storeToRefs(useAppStore());

import { defineComponent, ref } from 'vue';
import FuncPanel from '@/components/FuncPanel.vue';
import MapView from '@/components/MapView.vue';
import EarthView from '@/components/EarthView.vue';

defineComponent({
  components: {
    FuncPanel,
    MapView,
  },
});

const earth_show = ref(true);

</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

#home_wrapper {
  position: relative;

  #func_panel {
    position: absolute;
    z-index: 1;
    left: 32px;
    top: 32px;
    width: 32px;
    height: 32px;
    padding: 8px;
    cursor: pointer;
    background-color: $tec-bg-color;
  }
}
</style>