/*
 * @Author: xia.duanjian
 * @Date: 2022-04-30 14:05:11
 * @LastEditors: xia.duanjian
 * @LastEditTime: 2022-05-01 17:08:48
 * @Description: file content
 */
import { createApp } from 'vue';
import App from './App.vue';
import { initRouter } from './router';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
const app = createApp(App);
// 初始化路由
initRouter(app);
// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.mount('#app');
