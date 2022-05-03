<!--
 * @Author: xia.duanjian
 * @Date: 2022-03-31 16:20:07
 * @LastEditors: xia.duanjian
 * @LastEditTime: 2022-05-03 16:55:38
 * @Description: file content
-->
<template>
  <div />
</template>

<script lang="ts" setup name="Redirect">
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const { params, query } = route;
const { path } = params;

router.replace({ path: '/' + path, query });
</script>
