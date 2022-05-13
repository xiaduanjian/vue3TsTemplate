<!--
 * @Author: xia.duanjian
 * @Date: 2022-03-31 16:20:07
 * @LastEditors: xia.duanjian
 * @LastEditTime: 2022-05-10 22:50:02
 * @Description: file content
-->
<template>
  <div class="navbar">
    <top-nav v-if="$store.state.settings.topNav" id="topmenu-container" class="topmenu-container" />
    <breadcrumb
      v-if="!$store.state.settings.topNav"
      id="breadcrumb-container"
      class="breadcrumb-container"
    />
  </div>
</template>

<script setup>
import { ElMessageBox } from 'element-plus';
import Breadcrumb from '@/components/Breadcrumb/index.vue';
import TopNav from '@/components/TopNav/index.vue';

const store = useStore();
const getters = computed(() => store.getters);
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  padding: 10px;
  overflow: hidden;
  position: relative;
  .breadcrumb-container {
    display: block;
  }

  .topmenu-container {
    position: absolute;
    left: 50px;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }
}
</style>
