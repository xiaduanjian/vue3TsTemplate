<!--
 * @Author: xia.duanjian
 * @Date: 2022-03-31 16:20:07
 * @LastEditors: xia.duanjian
 * @LastEditTime: 2022-05-10 16:35:54
 * @Description: file content
-->
<script>
export default {
  setup() {
    const route = useRoute();
    const link = route.meta.link;
    if (link === '') {
      return '404';
    }
    const url = link;
    const height = document.documentElement.clientHeight - 94.5 + 'px';
    const style = { height: height };

    // 返回渲染函数
    return () =>
      h(
        'div',
        {
          style: style
        },
        h('iframe', {
          src: url,
          frameborder: 'no',
          width: '100%',
          height: '100%',
          scrolling: 'auto'
        })
      );
  }
};
</script>
