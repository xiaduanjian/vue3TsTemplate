/*
 * @Author: xia.duanjian
 * @Date: 2022-04-30 14:05:11
 * @LastEditors: xia.duanjian
 * @LastEditTime: 2022-05-02 22:23:15
 * @Description: file content
 */
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path, { resolve } from 'path';
// 实现vue函数的自动导入,这样如ref, computed，watch等就不用手动导入了
import AutoImport from 'unplugin-auto-import/vite';
// 实现vue组件库的自动按需导入,这样就不用手动导入了
import Components from 'unplugin-vue-components/vite';
// ElementPlus按需加载
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
// 解决vue3下 script setup语法糖 下 ，手动设置组件name不方便的问题
import setupExtend from 'vite-plugin-vue-setup-extend';
// 静态资源压缩
import viteCompression from 'vite-plugin-compression';
// 打包分析,可视化并分析构建包，查看哪些模块占用空间大小，以及模块的依赖关系
import visualizer from 'rollup-plugin-visualizer';
const pathResolve = (dir: string) => {
  return resolve(__dirname, '.', dir);
};
// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const { VITE_APP_ENV } = env;
  console.log(VITE_APP_ENV);
  return defineConfig({
    plugins: [
      vue(),
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/ // .md
        ],
        imports: [
          'vue',
          'vue-router',
          {
            vuex: ['useStore']
          }
        ],
        resolvers: [ElementPlusResolver()],
        dts: './auto-imports.d.ts',
        // eslint报错解决
        eslintrc: {
          enabled: true, // Default `false`
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        }
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      }),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons/svg')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]'
      }),
      setupExtend(),
      viteCompression({
        verbose: true,
        disable: false, // 不禁用压缩
        deleteOriginFile: false, // 压缩后是否删除原文件
        threshold: 10240, // 压缩前最小文件大小
        algorithm: 'gzip', // 压缩算法
        ext: '.gz' // 文件类型
      }),
      visualizer({
        // 打包后自动打开分析报告
        open: true
      })
    ],
    resolve: {
      alias: {
        '@': pathResolve('src/')
      }
    }
  });
};
