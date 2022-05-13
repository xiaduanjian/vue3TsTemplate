/*
 * @Author: xia.duanjian
 * @Date: 2022-03-31 16:20:07
 * @LastEditors: xia.duanjian
 * @LastEditTime: 2022-05-10 20:20:15
 * @Description: file content
 */
import Cookies from 'js-cookie';
import { Module } from 'vuex';
interface appType {
  sidebar: {
    opened: boolean;
    withoutAnimation: boolean;
    hide: boolean;
  };
  device: string;
  size: string;
  downloadstatus: boolean;
}
const app: Module<appType, unknown> = {
  namespaced: true,
  state: {
    sidebar: {
      opened: true,
      withoutAnimation: false,
      hide: false
    },
    device: 'desktop',
    size: Cookies.get('size') || 'default',
    downloadstatus: false
  },
  mutations: {
    TOGGLE_SIDEBAR: (state) => {
      if (state.sidebar.hide) {
        return false;
      }
      state.sidebar.opened = !state.sidebar.opened;
      state.sidebar.withoutAnimation = false;
    },
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
      state.sidebar.opened = false;
      state.sidebar.withoutAnimation = withoutAnimation;
    },
    TOGGLE_DEVICE: (state, device) => {
      state.device = device;
    },
    SET_SIZE: (state, size) => {
      state.size = size;
      Cookies.set('size', size);
    },
    SET_SIDEBAR_HIDE: (state, status) => {
      state.sidebar.hide = status;
    },
    SET_DOWNLOADSTATUS: (state, status) => {
      state.downloadstatus = status;
    }
  },
  actions: {
    toggleSideBar({ commit }) {
      commit('TOGGLE_SIDEBAR');
    },
    closeSideBar({ commit }, withoutAnimation) {
      commit('CLOSE_SIDEBAR', withoutAnimation);
    },
    toggleDevice({ commit }, device) {
      commit('TOGGLE_DEVICE', device);
    },
    setSize({ commit }, size) {
      commit('SET_SIZE', size);
    },
    toggleSideBarHide({ commit }, status) {
      commit('SET_SIDEBAR_HIDE', status);
    },
    setDownloadstatus({ commit }, status) {
      commit('SET_DOWNLOADSTATUS', status);
    }
  }
};
export default app;
