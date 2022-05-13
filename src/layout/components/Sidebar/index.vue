<!--
 * @Author: xia.duanjian
 * @Date: 2022-03-31 16:20:07
 * @LastEditors: xia.duanjian
 * @LastEditTime: 2022-05-11 17:46:24
 * @Description: file content
-->
<template>
  <div
    :class="{ 'has-logo': showLogo }"
    :style="{
      backgroundColor:
        sideTheme === 'theme-dark' ? variables.menuPrimaryground : variables.menuLightBackground
    }"
  >
    <logo v-if="showLogo" :collapse="isCollapse" />
    <hamburger
      id="hamburger-container"
      :is-active="getters.sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />
    <el-scrollbar :class="sideTheme" wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="
          sideTheme === 'theme-dark' ? variables.menuPrimaryground : variables.menuLightBackground
        "
        :text-color="
          sideTheme === 'theme-dark' ? variables.menuPrimaryColor : variables.menuLightColor
        "
        :unique-opened="true"
        :active-text-color="theme"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="(route, index) in sidebarRouters"
          :key="route.path + index"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import Logo from './Logo.vue';
import SidebarItem from './SidebarItem.vue';
import variables from '@/assets/styles/variables.module.scss';
import Hamburger from '@/components/Hamburger/index.vue';
const route = useRoute();
const store = useStore();
const getters = computed(() => store.getters);
console.log('sidebarRouters', store.getters.sidebarRouters);
const sidebarRouters = computed(() =>
  store.getters.sidebarRouters.filter((item) => {
    return item.path !== '/app';
  })
);
const showLogo = computed(() => store.state.settings.sidebarLogo);
const sideTheme = computed(() => store.state.settings.sideTheme);
const theme = computed(() => store.state.settings.theme);
const isCollapse = computed(() => !store.state.app.sidebar.opened);

function toggleSideBar() {
  store.dispatch('app/toggleSideBar');
}
const activeMenu = computed(() => {
  const { meta, path } = route;
  // if set path, the sidebar will highlight the path you set
  if (meta.activeMenu) {
    return meta.activeMenu;
  }
  return path;
});
</script>
<style lang="scss" scoped>
.hamburger-container {
  line-height: 20px;
  height: 20px;
  cursor: pointer;
  transition: background 0.3s;
  -webkit-tap-highlight-color: transparent;
  text-align: right;
  &:hover {
    background: rgba(0, 0, 0, 0.025);
  }
}
</style>
