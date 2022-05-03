/*
 * @Author: xia.duanjian
 * @Date: 2022-05-03 18:41:29
 * @LastEditors: xia.duanjian
 * @LastEditTime: 2022-05-03 22:26:34
 * @Description: file content
 */
import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
import userMock from './src/mock/user';

export function setupProdMockServer() {
  createProdMockServer([...userMock]);
}
