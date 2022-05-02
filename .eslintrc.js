/*
 * @Author: xia.duanjian
 * @Date: 2022-04-30 17:04:16
 * @LastEditors: xia.duanjian
 * @LastEditTime: 2022-05-02 19:10:02
 * @Description: eslint配置
 * 所需插件
 * prettier // 规则见 https://prettier.io/docs/en/options.html
 * eslint // 规则见 https://cn.eslint.org/docs/rules/
 * eslint-plugin-vue 规则见 https://github.com/vuejs/eslint-plugin-vue
 * eslint-plugin-prettier // 将prettier作为ESLint规范来使用
 * eslint-config-prettier
 * @typescript-eslint/eslint-plugin
 * @typescript-eslint/parser // ESLint的解析器，用于解析typescript，从而检查和规范Typescript代码
 *
 * "off" 或 0 - 关闭规则
 * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
 * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    './.eslintrc-auto-import.json'
  ],
  // 这是初始生成的 将其中的内容更改为下面的
  parserOptions: {
    parsar: '@typescript-eslint/parsar',
    ecmaVersion: 'lastest',
    sourceType: 'module'
  },
  globals: {
    BMap: true,
    BMapLib: true
  },
  rules: {
    // 强制第一个属性的位置(属性换行)
    'vue/first-attribute-linebreak': [
      2,
      {
        // 单行时，第一属性前不允许使用换行符
        singleline: 'ignore',
        // 多行时，第一属性前必须使用换行符
        multiline: 'below'
      }
    ],
    // 强制每行的最大属性数
    'vue/max-attributes-per-line': [
      'warn',
      {
        // 单行时可以接收最大数量
        singleline: 10,
        // 多行时可以接收最大数量
        multiline: {
          max: 1
        }
      }
    ],
    'no-unused-vars': 'off', // 未使用的变量
    'vue/multi-word-component-names': 'off', // 组件名称
    'no-undef': 'off', // 禁止使用未定义的变量
    'vue/valid-define-emits': 'off', // 组件的事件名称
    'no-var': 'off', // 禁止使用var
    'no-redeclare': 'off', // 禁止重复声明变量
    camelcase: 'off', // 强制驼峰命名
    semi: 'off', // 语句强制分号结尾
    'no-useless-escape': 'off', // 禁止不必要的转义
    'no-prototype-builtins': 'off', // 禁止直接调用 Object.prototypes 的内置属性
    eqeqeq: 'off', // 必须使用全等
    'vue/require-default-prop': 'off', // 必须设置默认值
    'node/handle-callback-err': 'off', // 回调函数错误处理
    'vue/no-v-model-argument': 'off', // 禁止使用 v-model 参数
    'no-implied-eval': 'off', // 禁止使用隐式eval
    'prefer-regex-literals': 'off', // 建议使用正则表达式字面量
    'array-callback-return': 'off', // 强制数组方法的回调函数中有 return 语句
    'vue/no-mutating-props': 'off', // 禁止修改 props
    'vue/no-template-shadow': 'off', // 禁止在模板中使用变量
    'prefer-promise-reject-errors': 'off', // 建议使用 Promise.reject
    'vue/v-on-event-hyphenation': 'off', // 事件名称
    'vue/no-multiple-template-root': 'off', // 禁止多个模板根
    'vue/attributes-order': 'off', // 属性顺序
    'no-trailing-spaces': 'off' // 禁止行尾空格
  }
};
