import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/reset.scss';
// 组件库
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 初始样式
import './assets/css/base.scss';
// iconfont

createApp(App).use(router).use(ElementPlus).mount('#app')
