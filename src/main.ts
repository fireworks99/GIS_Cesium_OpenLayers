import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router'
import { createPinia } from 'pinia'

Object.defineProperty(globalThis, "CESIUM_BASE_URL", {
  value: '/GIS_Cesium_OpenLayers/lib/Cesium',
});

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.mount('#app')
