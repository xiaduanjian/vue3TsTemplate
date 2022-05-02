/*
 * @Author: xia.duanjian
 * @Date: 2022-05-02 15:15:43
 * @LastEditors: xia.duanjian
 * @LastEditTime: 2022-05-02 15:24:08
 * @Description: 注册所有 @element-plus/icons-vue 图标
 */
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { App } from 'vue';
export default {
  install: (app: App<Element>) => {
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }
  }
};
