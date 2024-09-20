import { defineStore } from 'pinia';

// 定义 state 的类型
interface AppState {
  sysLoading: boolean;
}

export const useAppStore = defineStore("app", {
  // state 的类型声明
  state: (): AppState => ({ 
    sysLoading: true 
  }),
  actions: {
    // 为 actions 的参数添加类型
    setSysLoading(sysLoading: boolean) {
      this.sysLoading = sysLoading;
    },
  },
});
