/*
 * @Author: xia.duanjian
 * @Date: 2022-05-03 16:22:58
 * @LastEditors: xia.duanjian
 * @LastEditTime: 2022-05-03 16:52:17
 * @Description: 路由拦截器
 */
import { router } from './index';
import { ElMessage } from 'element-plus';
import NProgress from 'nprogress';
import { getToken } from '@/utils/auth';
import { isHttp } from '@/utils/validate';
import { isRelogin } from '@/utils/request';

NProgress.configure({ showSpinner: false });
// 白名单，不需要token可以访问的路由
const whiteList = ['/login', '/register'];

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' });
      NProgress.done();
    } else {
      console.log('to.path', to.path);
    }
  } else {
    // 没有token，在免登录白名单，直接进入
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`/login?redirect=${to.fullPath}`); // 否则全部重定向到登录页
      NProgress.done();
    }
  }
});
