/*
 * @Author: xia.duanjian
 * @Date: 2022-05-01 17:15:27
 * @LastEditors: xia.duanjian
 * @LastEditTime: 2022-05-01 22:49:46
 * @Description: 封装axios请求
 */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ElNotification, ElMessageBox, ElMessage, ElLoading } from 'element-plus';
import { getToken } from '@/utils/auth';
// 下载数据状态
let downloadLoadingInstance;
// 是否显示重新登录
const isRelogin = { show: false };
// 创建axios实例
const service = axios.create({
  // headers
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  // 基础服务地址
  // baseURL: process.env.VUE_APP_BASE_API,
  baseURL: 'http://120.24.64.5:8088/mall-admin',
  // 超时时间
  timeout: 5000
});

// 请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 是否需要设置 token
    const isToken = (config.headers || {}).isToken === false;
    // 是否需要防止重复提交
    const isRepeatSubmit = (config.headers || {}).isPreventRepeat === false;
    if (getToken() && !isToken && config.headers) {
      config.headers.Authorization = 'Bearer ' + getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    // get请求时，拼接参数params
    if (config.method === 'get' && config.params) {
      let url = config.url as string;
      url += '?';
      const keys = Object.keys(config.params);
      for (const key of keys) {
        // 使用void 0，避免undefined转换为空字符串
        if (config.params[key] !== void 0 && config.params[key] !== null) {
          url += `${key}=${encodeURIComponent(config.params[key])}&`;
        }
      }
      url = url.substring(0, url.length - 1);
      config.params = {};
      config.url = url;
    }
    // post请求时，设置请求体data
    if (!isRepeatSubmit && config.method === 'post' && config.data) {
      const requestObj = {
        url: config.url as string,
        data: typeof config.data === 'object' ? JSON.stringify(config.data) : config.data,
        time: new Date().getTime()
      };
      const sessionObj = sessionStorage.getItem('requestObj');
      if (sessionObj) {
        const { url, data, time } = JSON.parse(sessionObj);
        const s_url = url; // 请求地址
        const s_data = data; // 请求数据
        const s_time = time; // 请求时间
        const interval = 1000; // 间隔时间，单位毫秒，小于此时间则视为重复提交
        if (
          s_url === requestObj.url &&
          s_data === requestObj.data &&
          new Date().getTime() - s_time < interval
        ) {
          return Promise.reject('重复提交');
        } else {
          sessionStorage.setItem('requestObj', JSON.stringify(requestObj));
        }
      } else {
        sessionStorage.setItem('requestObj', JSON.stringify(requestObj));
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (res: AxiosResponse) => {
    // 未设置状态码则默认成功状态
    const code = res.data.code || 200;
    const errorCode = {
      401: '认证失败，无法访问系统资源',
      403: '当前操作没有权限',
      404: '访问资源不存在',
      default: '系统未知错误，请反馈给管理员'
    };
    // 获取错误信息
    // const msg = errorCode[code] || res.data.msg || errorCode.default;
    const msg = errorCode[code as keyof typeof errorCode] || res.data.msg || errorCode.default;
    // 二进制直接返回
    if (res.request.responseType === 'blob' || res.request.responseType === 'arraybuffer') {
      return res.data;
    }
    // 判断是否需要重新登录
    if (res.data.code === 401) {
      if (!isRelogin.show) {
        isRelogin.show = true;
        ElMessageBox.confirm('登录状态已过期，您可以继续留在该页面，或者重新登录', '系统提示', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning',
          customClass: 'confirmClass'
        })
          .then(() => {
            isRelogin.show = false;
          })
          .catch(() => {
            isRelogin.show = false;
          });
      }
      return Promise.reject(new Error('无效的会话，或者会话已过期，请重新登录。'));
    } else if (res.data.code === 500) {
      ElMessage({
        message: msg,
        type: 'error',
        duration: 2 * 1000
      });
      return Promise.reject(new Error(msg));
    } else if (code !== 200) {
      ElNotification({
        title: msg,
        type: 'error',
        duration: 2000
      });
      return Promise.reject(new Error('error'));
    } else {
      return Promise.resolve(res.data);
    }
  },
  (error) => {
    let message = error.message;
    if (message === 'Network Error') {
      message = '后端接口连接异常';
    } else if (message.inludes('timeout')) {
      message = '请求超时，请稍后重试';
    } else if (message.includes('Request failed with status code')) {
      message = '系统接口' + message.substr(message.length - 3) + '异常';
    }
    ElMessage({
      message: message,
      type: 'error',
      duration: 2 * 1000
    });
    return Promise.reject(error);
  }
);

export default service;
