<!--
 * @Author: xia.duanjian
 * @Date: 2022-04-30 15:35:55
 * @LastEditors: xia.duanjian
 * @LastEditTime: 2022-05-11 15:10:29
 * @Description: file content
-->
<template>
  <div class="login-wrap">
    <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" class="login-form">
      <el-form-item prop="userName">
        <el-input
          v-model="ruleForm.userName"
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
          type="password"
          autocomplete="off"
          placeholder="请输入密码"
        >
          <template #prefix>
            <el-icon><opportunity /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <div class="login-btn">
        <!-- <svg-icon icon-class="lock" class="loack-icon"></svg-icon> -->
        <el-button type="primary" @click="submitForm()">登录</el-button>
      </div>
      <div class="login-other align-right">
        <router-link to="register">注册</router-link>
      </div>
    </el-form>
  </div>
</template>

<script lang="ts" setup name="Login">
import axios from 'axios';
// import type { FormInstance } from 'element-plus';
// const ruleFormRef = ref<FormInstance>();
const store = useStore();
const router = useRouter();
let ruleFormRef = ref();
const state = reactive({
  ruleForm: {
    userName: '',
    password: ''
  },
  rules: {
    userName: [
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
  console.log(ruleForm.value);
  ruleFormRef.value
    .validate()
    .then(() => {
      // axios.post('http://localhost:8088/users/login', ruleForm.value).then((resp) => {
      //   console.log(resp);
      // });
      store.dispatch('user/Login', ruleForm.value).then((res) => {
        router.push({ path: '/' });
      });
    })
    .catch(() => {
      console.log('检验不通过!');
    });
};
// const resetForm = (formEl: FormInstance | undefined) => {
//   if (!formEl) return;
//   formEl.resetFields();
// };
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
    padding-bottom: 10px;
    .el-button {
      width: 100%;
    }
  }
  .login-other {
    padding-bottom: 10px;
  }
}
</style>
