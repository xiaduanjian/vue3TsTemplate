<!--
 * @Author: xia.duanjian
 * @Date: 2022-04-30 14:05:11
 * @LastEditors: xia.duanjian
 * @LastEditTime: 2022-05-01 14:40:48
 * @Description: file content
-->
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <div>
    app
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  background: #fff;
  a {
    color: red;
  }
}
</style>
