/*
 * @Author: xia.duanjian
 * @Date: 2022-04-30 14:05:11
 * @LastEditors: xia.duanjian
 * @LastEditTime: 2022-05-03 16:53:04
 * @Description: file content
 */
import { createApp } from 'vue';
import App from './App.vue';
import { initRouter } from './router';
import './router/routerIntercept';
const app = createApp(App);
// 初始化路由
initRouter(app);
// 注册所有图标
import 'virtual:svg-icons-register';
import SvgIcon from '@/components/SvgIcon/index.vue';
import elementIcons from '@/components/SvgIcon/svgicon';
app.component('SvgIcon', SvgIcon);
app.use(elementIcons);
app.mount('#app');
