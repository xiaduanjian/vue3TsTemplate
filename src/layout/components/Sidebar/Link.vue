<!--
 * @Author: xia.duanjian
 * @Date: 2022-03-31 16:20:07
 * @LastEditors: xia.duanjian
 * @LastEditTime: 2022-05-10 16:39:46
 * @Description: file content
-->
<template>
  <component :is="type" v-bind="linkProps()">
    <slot />
  </component>
</template>

<script setup>
import { isExternal } from '@/utils/validate';

const props = defineProps({
  to: {
    type: [String, Object],
    required: true
  }
});

const isExt = computed(() => {
  return isExternal(props.to);
});

const type = computed(() => {
  if (isExt.value) {
    return 'a';
  }
  return 'router-link';
});

function linkProps() {
  if (isExt.value) {
    return {
      href: props.to,
      target: '_blank',
      rel: 'noopener'
    };
  }
  return {
    to: props.to
  };
}
</script>
