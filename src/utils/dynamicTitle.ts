/*
 * @Author: xia.duanjian
 * @Date: 2022-05-10 21:25:54
 * @LastEditors: xia.duanjian
 * @LastEditTime: 2022-05-10 21:25:55
 * @Description: file content
 */
import store from '@/store';
import defaultSettings from '@/settings';

/**
 * 动态修改标题
 */
export function useDynamicTitle() {
  if (store.state.settings.dynamicTitle) {
    document.title = store.state.settings.title + ' - ' + defaultSettings.title;
  } else {
    document.title = defaultSettings.title;
  }
}
