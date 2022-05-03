<!--
 * @Author: xia.duanjian
 * @Date: 2022-04-30 15:35:55
 * @LastEditors: xia.duanjian
 * @LastEditTime: 2022-05-03 20:36:22
 * @Description: file content
-->
<template>
  <div class="login-wrap">
    <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" class="login-form">
      <el-form-item prop="username">
        <el-input
          v-model="ruleForm.username"
          type="text"
          autocomplete="off"
          placeholder="请输入用户账号"
        >
          <template #prefix>
            <el-icon><user-filled /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="ruleForm.password"
          type="passwordword"
          autocomplete="off"
          placeholder="请输入密码"
        >
          <template #prefix>
            <el-icon><opportunity /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <div class="login-btn">
        <svg-icon icon-class="lock" class="loack-icon"></svg-icon>
        <el-button type="primary" @click="submitForm()">登录</el-button>
      </div>
    </el-form>
  </div>
</template>

<script lang="ts" setup name="Login">
import axios from 'axios';
import { userLogin } from '@/api/login';
// import type { FormInstance } from 'element-plus';
// const ruleFormRef = ref<FormInstance>();
let ruleFormRef = ref();
const state = reactive({
  ruleForm: {
    username: '',
    password: ''
  },
  rules: {
    username: [
      {
        required: true,
        message: '请输入用户账号!',
        trigger: 'blur'
      }
    ],
    password: [
      {
        required: true,
        message: '请输入密码!',
        trigger: 'blur'
      }
    ]
  }
});
const { ruleForm, rules } = toRefs(state);
const submitForm = () => {
  ruleFormRef.value
    .validate()
    .then(() => {
      userLogin(ruleForm.value).then((res) => {
        console.log(res);
      });
      console.log('检验通过!');
    })
    .catch(() => {
      console.log('检验不通过!');
    });
};
// const resetForm = (formEl: FormInstance | undefined) => {
//   if (!formEl) return;
//   formEl.resetFields();
// };
onMounted(() => {
  axios.get('/api/createUser').then((res: any) => {
    console.log(res);
  });
});
</script>
<style lang="scss" scoped>
.login-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
}
.login-form {
  width: 400px;
  padding: 20px {
    bottom: 0;
  }
  background-color: #fff;
  .login-btn {
    padding-bottom: 20px;
    .el-button {
      width: 100%;
    }
  }
}
</style>
