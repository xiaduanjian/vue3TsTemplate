/*
 * @Author: xia.duanjian
 * @Date: 2022-03-31 16:20:07
 * @LastEditors: xia.duanjian
 * @LastEditTime: 2022-05-11 15:25:05
 * @Description: file content
 */
const getters = {
  sidebar: (state: any) => state.app.sidebar,
  size: (state: any) => state.app.size,
  device: (state: any) => state.app.device,
  visitedViews: (state: any) => state.tagsView.visitedViews,
  cachedViews: (state: any) => state.tagsView.cachedViews,
  token: (state: any) => state.user.token,
  avatar: (state: any) => state.user.avatar,
  name: (state: any) => state.user.name,
  introduction: (state: any) => state.user.introduction,
  roles: (state: any) => state.user.roles,
  permissions: (state: any) => state.user.permissions,
  permission_routes: (state: any) => state.permission.routes,
  topbarRouters: (state: any) => state.permission.topbarRouters,
  defaultRoutes: (state: any) => state.permission.defaultRoutes,
  sidebarRouters: (state: any) => state.permission.sidebarRouters
};
export default getters;
