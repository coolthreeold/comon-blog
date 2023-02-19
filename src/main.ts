import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/reset.scss';
// 组件库
import 'element-plus/dist/index.css';
import ElementPlus from 'element-plus';
// css 样式
import './assets/css/index.scss';``
// 
import 'lib-flexible/flexible';
// iconfont
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const app = createApp(App);
app.use(router).use(ElementPlus).mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
