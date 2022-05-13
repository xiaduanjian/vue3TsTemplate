/*
 * @Author: xia.duanjian
 * @Date: 2022-03-31 16:20:07
 * @LastEditors: xia.duanjian
 * @LastEditTime: 2022-05-11 15:41:57
 * @Description: file content
 */
import defaultSettings from '@/settings';
import { useDynamicTitle } from '@/utils/dynamicTitle';
import { Module } from 'vuex';

interface settingType {
  title: string;
  theme: string;
  sideTheme: string;
  showSettings: boolean;
  topNav: boolean;
  tagsView: boolean;
  fixedHeader: boolean;
  sidebarLogo: boolean;
  dynamicTitle: boolean;
  topTitle: string;
}
const { title, sideTheme, showSettings, topNav, tagsView, fixedHeader, sidebarLogo, dynamicTitle } =
  defaultSettings;
const storageSetting =
  (localStorage.getItem('layout-setting') &&
    JSON.parse(localStorage.getItem('layout-setting') || '')) ||
  {};
const setting: Module<settingType, unknown> = {
  namespaced: true,
  state: {
    title: '',
    theme: storageSetting.theme || '#409EFF',
    sideTheme: storageSetting.sideTheme || sideTheme,
    showSettings: showSettings,
    topNav: storageSetting.topNav === undefined ? topNav : storageSetting.topNav,
    tagsView: storageSetting.tagsView === undefined ? tagsView : storageSetting.tagsView,
    fixedHeader:
      storageSetting.fixedHeader === undefined ? fixedHeader : storageSetting.fixedHeader,
    sidebarLogo:
      storageSetting.sidebarLogo === undefined ? sidebarLogo : storageSetting.sidebarLogo,
    dynamicTitle:
      storageSetting.dynamicTitle === undefined ? dynamicTitle : storageSetting.dynamicTitle,
    topTitle: title
  },
  mutations: {
    CHANGE_SETTING: (
      state: { [x: string]: any; hasOwnProperty: (arg0: any) => any },
      { key, value }: any
    ) => {
      if (state.hasOwnProperty(key)) {
        state[key] = value;
      }
    }
  },
  actions: {
    // 修改布局设置
    changeSetting({ commit }: any, data: any) {
      commit('CHANGE_SETTING', data);
    },
    // 设置网页标题
    setTitle({ state }: any, title: string) {
      state.title = title;
      useDynamicTitle();
    }
  }
};

export default setting;
