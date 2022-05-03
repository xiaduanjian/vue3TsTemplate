/*
 * @Author: xia.duanjian
 * @Date: 2022-04-30 15:23:57
 * @LastEditors: xia.duanjian
 * @LastEditTime: 2022-05-03 17:10:33
 * @Description: 路由文件
 */
import { App } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const routes: RouteRecordRaw[] = [
  {
    path: '/redirect',
    name: 'Redirect',
    component: () => import('@/views/redirect/index.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('@/views/index.vue')
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('@/views/error/404.vue')
  }
];
export const router = createRouter({
  history: createWebHistory(),
  routes
});

export const initRouter = (app: App<Element>) => {
  return app.use(router);
};
