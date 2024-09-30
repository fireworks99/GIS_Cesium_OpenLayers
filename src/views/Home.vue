<template>
  <EarthView v-if="earch_show"/>
  <MapView v-else/>
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

const earch_show = ref(true);

</script>

<style scoped lang="scss">

</style>