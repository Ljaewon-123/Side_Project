<template>
  <div>
    <h2>login View</h2>
    
    <RouterLink to="/about">about 이동</RouterLink>
    <span> 라우터 </span>
    <div class="container">
      <div class="title">
        <span>LOGIN</span>
      </div>
      <div class="login flex">
        <form @submit.prevent="submitLogin">
          <input type="text" v-model="loginForm.userId" placeholder="아이디" autofocus required>
          <input type="password" v-model="loginForm.userPassword" placeholder="비밀번호" required>

          <button type="submit" class="btn-login" >로그인</button>
        </form>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { User } from '@/types/User'


  const loginForm = ref<User>({
    userId: '',
    userPassword: ''
  })

  const submitLogin = () => {
    
  }

</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; 
  /* min-height: 100vh; */
  position: fixed;
  left: 50%;
  top: 50%;
  width: 100vw;
  height: 100vh;

  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  
}
.login{
  border-radius: 12px;
  background-color: #ffffff;
  width: 450px;
  height: 450px;
  padding: 45px;
  box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.25);
}
.login input {
  width: 100%;
  border: 1px solid #b6b1b1;
  border-radius: 12px;
  padding: 12px;
}
.btn-login {
  width: 100%;
  background-color: #3584A7;
  color: #ffffff;
  padding: 12px;
  border: 0;
  border-radius: 12px;

  margin-top: 20px;
}
.example{
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 100vh;
  flex-direction: column;
}
</style>