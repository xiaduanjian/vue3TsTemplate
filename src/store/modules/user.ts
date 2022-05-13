/*
 * @Author: xia.duanjian
 * @Date: 2022-03-31 16:20:07
 * @LastEditors: xia.duanjian
 * @LastEditTime: 2022-05-11 16:42:55
 * @Description: file content
 */
import { Module } from 'vuex';
import { login, logout, getInfo } from '@/api/login';
import { getToken, setToken, removeToken } from '@/utils/auth';
import defAva from '@/assets/images/profile.jpg';
// import { encrypt } from '@/utils/encrypt';
interface userType {
  token: string | undefined;
  name: string;
  avatar: string;
  roles: never[];
  permissions: never[];
}
const user: Module<userType, unknown> = {
  namespaced: true,
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    roles: [],
    permissions: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
    SET_PERMISSIONS: (state, permissions) => {
      state.permissions = permissions;
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo: { userName: string; password: string }) {
      const userName = userInfo.userName;
      const password = userInfo.password;
      return new Promise<void>((resolve, reject) => {
        login({ userName, password })
          .then((res: { data: { token: string } }) => {
            setToken(res.data.token);
            commit('SET_TOKEN', res.data.token);
            resolve();
          })
          .catch((error: any) => {
            reject(error);
          });
      });
    },

    // 获取用户信息
    GetInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getInfo({ userName: 'admin' })
          .then((res: any) => {
            const { user, roles, permissions } = res.data;
            // const avatar =
            //   user.avatar === '' || user.avatar == null
            //     ? defAva
            //     : import.meta.env.VITE_APP_BASE_API + user.avatar;

            if (roles?.length > 0) {
              // 验证返回的roles是否是一个非空数组
              commit('SET_ROLES', roles);
              commit('SET_PERMISSIONS', permissions);
            } else {
              commit('SET_ROLES', ['ROLE_DEFAULT']);
            }
            commit('SET_NAME', user.userName);
            // commit('SET_AVATAR', avatar);
            resolve(res);
          })
          .catch((error: any) => {
            console.log(error);
            reject(error);
          });
      });
    },

    // 退出系统
    LogOut({ commit, state }) {
      return new Promise<void>((resolve, reject) => {
        logout()
          .then(() => {
            commit('SET_TOKEN', '');
            commit('SET_ROLES', []);
            commit('SET_PERMISSIONS', []);
            removeToken();
            resolve();
          })
          .catch((error: any) => {
            reject(error);
          });
      });
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise<void>((resolve) => {
        commit('SET_TOKEN', '');
        removeToken();
        resolve();
      });
    }
  }
};

export default user;
