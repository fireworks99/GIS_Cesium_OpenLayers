<template>
  <div class="func_wrapper">
    <div :class="['funcList_container', { expanded: isExpanded }]">
      <input type="checkbox" class="checkbox" v-model="isExpanded" />
      <div class="button-menu">
        <img src="@/assets/img/menu.svg" alt="">
      </div>

      <div class="option_wrapper">

        <div class="option" v-for="item in list" :key="item.value">
          <el-tooltip class="item" effect="dark" :content="item.label" placement="left">
            <img :src="getImagePath(item.value)" alt="">
          </el-tooltip>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
const images = import.meta.glob<{ default: string }>('@/assets/img/*.svg', { eager: true });

function getImagePath(fileName: string) {
  return images[`/src/assets/img/${fileName}.svg`]?.default || '';
}

const isExpanded = ref(false);
const list = reactive([
  { label: "标绘", value: "plot" },
  { label: "测量", value: "measure" },
]);

</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

.funcList_container {
  width: 48px;
  height: 48px;
  position: absolute;
  left: 0;
  top: 0;

  border: 1px solid $tec-border-color;
  background-color: $tec-bg-color;
  border-radius: 4px;
  padding: 4px;

  transition: height 0.3s ease;

  &.expanded {
    height: 152px;
  }
}

.button-menu {
  cursor: pointer;
  position: absolute;
  top: 4px;
  // z-index: 1;
  z-index: 2;
  border: 1px solid $tec-border-color;
  background-color: $tec-bg-color;
  border-radius: 4px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 8px;

  img {
    width: 100%;
  }
}

.checkbox {
  width: 48px;
  height: 48px;
  opacity: 0;
  z-index: 10;
  cursor: pointer;
  position: relative;
}

.option_wrapper {
  position: relative;
  top: -3px; //微调
  height: 724px;
  overflow-y: auto;
  display: none;

  scrollbar-width: none;
  /* Firefox */
  -ms-overflow-style: none;
  /* IE and Edge */


  &::-webkit-scrollbar {
    display: none;
    /* Chrome, Safari */
  }
}

.checkbox:checked~.option_wrapper {
  display: block;
}

.option {
  position: absolute;
  // top: 4px;
  border: 1px solid $tec-border-color;
  background-color: $tec-bg-color;
  border-radius: 4px;
  // z-index: -1;
  z-index: 1;
  width: 30px;
  height: 30px;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.3s;
  padding: 8px;

  img {
    width: 100%;
  }
}

.checkbox:not(:checked)~.option {
  box-shadow: none;
}

.checkbox:checked~.option_wrapper .option {
  transition-delay: 0.1s;

  @for $i from 2 through 22 {
    $translate-value: 48px * ($i - 1) + 4px * ($i - 1); // 预计算具体值
    &:nth-of-type(#{$i}) {
      transform: translateY(#{$translate-value});
    }
  }

}
</style>