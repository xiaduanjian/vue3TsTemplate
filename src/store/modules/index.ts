/*
 * @Author: xia.duanjian
 * @Date: 2022-05-10 20:21:39
 * @LastEditors: xia.duanjian
 * @LastEditTime: 2022-05-10 23:35:46
 * @Description: 收集所有的模块
 */
import path from 'path-browserify';
// https://cn.vitejs.dev/guide/features.html#glob-import
/********************************自动导包 start********************************/
const files = import.meta.glob('./*.ts');
const modules = {} as any;
for (const key in files) {
  const name = path.basename(key, '.ts');
  modules[name] = files[key];
}
/********************************自动导包 end********************************/
export default modules;
