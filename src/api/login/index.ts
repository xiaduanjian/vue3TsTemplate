/*
 * @Author: xia.duanjian
 * @Date: 2022-05-01 23:58:11
 * @LastEditors: xia.duanjian
 * @LastEditTime: 2022-05-11 16:23:15
 * @Description: 登录接口
 */
import request from '@/utils/request';
type UserLoginType = {
  userName: string;
  password: string;
};

export const login = (data: UserLoginType) => {
  return request({
    url: 'users/login',
    method: 'post',
    headers: {
      isToken: false
    },
    data
  });
};

// 获取用户详细信息
export const getInfo = (data: { userName: string }) => {
  return request({
    url: '/users/getInfo',
    method: 'post',
    data
  });
};

// 退出方法
export const logout = () => {
  return request({
    url: '/logout',
    method: 'post'
  });
};

// 获取路由信息
export const getRouters = () => {
  return request({
    url: '/menu/find',
    method: 'post'
  });
};
