/*
 * @Author: xia.duanjian
 * @Date: 2022-03-31 16:20:07
 * @LastEditors: xia.duanjian
 * @LastEditTime: 2022-05-11 15:25:39
 * @Description: file content
 */
import { createStore } from 'vuex';
import { App } from 'vue';
import user from './modules/user';
import app from './modules/app';
import tagsView from './modules/tagsView';
import permission from './modules/permission';
import settings from './modules/settings';
// import page from './modules/page';
import getters from '@/store/getters';
// import modules from '@/store/modules';

const store = createStore({
  // state: {},
  mutations: {},
  actions: {},
  modules: {
    app,
    user,
    tagsView,
    permission,
    settings
  },
  getters
});
export function setupStore(app: App) {
  app.use(store);
}

export default store;
