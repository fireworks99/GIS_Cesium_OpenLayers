<template>
  <MapView />
</template>

<script setup lang="ts">

// import { useAppStore } from "@/store/useAppStore";
// import { storeToRefs } from "pinia";
// const { sysLoading } = storeToRefs(useAppStore());

import { defineComponent } from 'vue';
import MapView from '@/components/MapView.vue';

defineComponent({
  components: {
    MapView,
  },
});

</script>

<style scoped lang="scss">

</style>