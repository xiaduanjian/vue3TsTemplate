/*
 * @Author: xia.duanjian
 * @Date: 2022-04-30 15:23:57
 * @LastEditors: xia.duanjian
 * @LastEditTime: 2022-04-30 18:04:32
 * @Description: 路由文件
 */
import { App } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});

export const initRouter = (app: App<Element>) => {
  return app.use(router);
};
