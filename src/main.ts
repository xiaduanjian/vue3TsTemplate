/*
 * @Author: xia.duanjian
 * @Date: 2022-04-30 14:05:11
 * @LastEditors: xia.duanjian
 * @LastEditTime: 2022-04-30 18:08:37
 * @Description: file content
 */
import { createApp } from 'vue';
import App from './App.vue';
import { initRouter } from './router';
const app = createApp(App);
// 初始化路由
initRouter(app);
app.mount('#app');
