/*
 * @Author: xia.duanjian
 * @Date: 2022-04-30 14:05:11
 * @LastEditors: xia.duanjian
 * @LastEditTime: 2022-05-11 15:04:03
 * @Description: file content
 */
import { createApp } from 'vue';
import '@/assets/styles/index.scss'; // global css
import 'element-plus/theme-chalk/el-message.css';
import 'element-plus/theme-chalk/el-loading.css';
import '@/assets/styles/base.scss';
import App from './App.vue';
import { setupStore } from './store';
import { initRouter } from './router';
import './router/routerIntercept';
const app = createApp(App);
// 初始化路由
initRouter(app);
// 初始化store
setupStore(app);
// 注册所有图标
import 'virtual:svg-icons-register';
import SvgIcon from '@/components/SvgIcon/index.vue';
import elementIcons from '@/components/SvgIcon/svgicon';
app.component('SvgIcon', SvgIcon);
app.use(elementIcons);
app.mount('#app');
