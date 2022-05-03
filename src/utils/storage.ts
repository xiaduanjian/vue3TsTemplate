/*
 * @Author: xia.duanjian
 * @Date: 2022-05-03 15:36:35
 * @LastEditors: xia.duanjian
 * @LastEditTime: 2022-05-03 15:46:31
 * @Description: 二次封装sessionStorage,localStorage
 */
const storageCache = (storage: Storage) => {
  return {
    set(key: string, value: unknown) {
      storage.setItem(key, JSON.stringify(value));
    },
    get(key: string) {
      const value = storage.getItem(key);
      if (value) {
        return JSON.parse(key);
      } else {
        return null;
      }
    },
    remove(key: string) {
      storage.removeItem(key);
    },
    clear() {
      storage.clear();
    }
  };
};

const sessionCache = storageCache(sessionStorage);
const localCache = storageCache(localStorage);
export { sessionCache, localCache };
