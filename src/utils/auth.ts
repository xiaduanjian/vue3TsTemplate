/*
 * @Author: xia.duanjian
 * @Date: 2022-05-01 22:34:04
 * @LastEditors: xia.duanjian
 * @LastEditTime: 2022-05-01 22:42:56
 * @Description: js-cookie
 */
import Cookies from 'js-cookie';

const TokenKey = 'vue3ts-Token';

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token: string) {
  return Cookies.set(TokenKey, token, { expires: 1 });
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}
