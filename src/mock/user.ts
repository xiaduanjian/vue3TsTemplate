/*
 * @Author: xia.duanjian
 * @Date: 2022-05-03 18:39:37
 * @LastEditors: xia.duanjian
 * @LastEditTime: 2022-05-03 22:45:38
 * @Description: file content
 */
import { MockMethod } from 'vite-plugin-mock';
// 单纯的使⽤⾃⼰的返回数据话，可以不⽤引⼊mockjs
// http://mockjs.com/examples.html
import Mock, { Random } from 'mockjs';
export default [
  {
    url: '/api/createUser',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'ok',
        data: Mock.mock({
          'list|4': [
            {
              id: '@id',
              name: '@cname',
              age: Random.integer(1, 100),
              address: '@county',
              city: '@city',
              province: '@province',
              email: Random.email(),
              phone: /^1[0-9]{10}$/,
              regin: '@region',
              url: '@url',
              date: Random.date('yyyy-MM-dd')
            }
          ]
        })
      };
    }
  }
] as MockMethod[];
