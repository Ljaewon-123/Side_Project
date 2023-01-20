<template>
  <div class="container">
    <div class="text-box">
      <h5 class="text">Oops!</h5>
      <span>요청한 페이지를 찾을 수 없습니다.</span>
      <div>
        <button class="btn btn-move mr-10" @click="router.push('/about')">메인 페이지</button>
        <button class="btn btn-move" @click="router.go(-1)">이전 페이지</button>
      </div> <!-- 이부분 routerLink 로??-->
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';


const router = useRouter()

</script>


<style setup>
.container {
  background-color: #e7ecf8;
  font-weight: 400;
  color: #24292e;
  line-height: 1.6;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
}
.text-box {
  margin-bottom: 50px;
}
.text {
  font-size: 50px;
  font-weight: 800;
  color: #2269f5;
}
.text-box span {
  margin: 20px 0;
  display: block;
  font-size: 16px;
}
.btn-move {
  color: #fff;
  background-color: #4d556b;
  border-color: #4d556b;
  padding: 10px 25px;
}
.mr-10 {margin-right: 10px;}
</style>