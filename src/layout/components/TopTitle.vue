<!--
 * @Author: xia.duanjian
 * @Date: 2022-04-06 13:36:21
 * @LastEditors: xia.duanjian
 * @LastEditTime: 2022-05-10 22:50:51
 * @Description: 顶部系统名称
-->
<template>
  <div class="top-title bg-primary position-r">
    <h2>{{ title }}</h2>
    <div class="right-menu">
      <template v-if="getters.device !== 'mobile'">
        <screenfull id="screenfull" class="right-menu-item hover-effect" />
      </template>
      <router-link to="/user/profile">
        <el-icon><user /></el-icon>
      </router-link>
      <router-link to="">
        <el-icon @click="logout">
          <switch-button />
        </el-icon>
      </router-link>
    </div>
  </div>
</template>
<script setup>
import { ElMessageBox } from 'element-plus';
import Screenfull from '@/components/Screenfull/index.vue';
import SizeSelect from '@/components/SizeSelect/index.vue';
const { proxy } = getCurrentInstance();
const store = useStore();
const getters = computed(() => store.getters);
const title = computed(() => store.state.settings.topTitle);
function handleCommand(command) {
  switch (command) {
    case 'setLayout':
      setLayout();
      break;
    case 'logout':
      logout();
      break;
    default:
      break;
  }
}

function logout() {
  proxy.$modal
    .confirm('确定注销并退出系统吗？')
    .then(function () {
      store.dispatch('LogOut').then(() => {
        location.href = '/index';
      });
    })
    .catch(() => {});
}

const emits = defineEmits(['setLayout']);
function setLayout() {
  emits('setLayout');
}
</script>
<style lang="scss" scoped>
.top-title {
  h2 {
    font-size: 30px;
    display: inline-block;
    color: #fff;
    font-style: normal;
    font-weight: 400;
    line-height: 50px;
    margin: 0;
  }
  .right-menu {
    position: absolute;
    right: 20px;
    bottom: 0;
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 0;
    .right-menu-item,
    a {
      display: inline-block;
      height: 24px;
      margin-left: 15px;
      font-size: 16px;
    }
  }
}
</style>
