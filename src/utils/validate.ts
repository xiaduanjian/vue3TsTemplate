/*
 * @Author: xia.duanjian
 * @Date: 2022-05-03 16:44:47
 * @LastEditors: xia.duanjian
 * @LastEditTime: 2022-05-03 16:47:15
 * @Description: 验证判断集合
 */
// 判断url是否为http或https
export const isHttp = (url: string) => {
  return /^(http|https):\/\/.*/.test(url);
};
