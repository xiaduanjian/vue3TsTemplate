/*
 * @Author: xia.duanjian
 * @Date: 2022-05-01 23:58:11
 * @LastEditors: xia.duanjian
 * @LastEditTime: 2022-05-02 00:01:53
 * @Description: 登录接口
 */
import request from '@/utils/request';
type UserLoginType = {
  username: string;
  password: string;
};

export const userLogin = (data: UserLoginType) => {
  return request({
    url: '/admin/login',
    method: 'post',
    data
  });
};
