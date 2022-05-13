<!--
 * @Author: xia.duanjian
 * @Date: 2022-03-31 16:20:07
 * @LastEditors: xia.duanjian
 * @LastEditTime: 2022-05-10 16:44:07
 * @Description: file content
-->
<template>
  <section class="app-main">
    <router-view v-slot="{ Component, route }">
      <transition name="fade-transform" mode="out-in">
        <keep-alive :include="cachedViews">
          <el-config-provider :locale="zhCn">
            <component :is="Component" :key="route.path" />
          </el-config-provider>
        </keep-alive>
      </transition>
    </router-view>
  </section>
</template>

<script setup>
import { ElConfigProvider } from 'element-plus';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
const store = useStore();
const route = useRoute();
store.dispatch('tagsView/addCachedView', route);
const cachedViews = computed(() => {
  return store.state.tagsView.cachedViews;
});
</script>

<style lang="scss" scoped>
.app-main {
  /* 50= navbar  50  */
  height: calc(100vh - 132px);
  width: 100%;
  position: relative;
  // overflow: hidden;
}

.fixed-header + .app-main {
  padding-top: 132px;
}

.hasTagsView {
  .app-main {
    /* 84 = navbar + tags-view = 50 + 34 */
    min-height: calc(100vh - 132px);
  }

  .fixed-header + .app-main {
    padding-top: 132px;
  }
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 17px;
  }
}
</style>
