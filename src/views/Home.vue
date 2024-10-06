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

    img {
      width: 24px;
      height: 24px;
    }
  }
}

</style>