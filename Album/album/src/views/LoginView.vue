<template>
  <div>
    <h2>login View</h2>
    
    <RouterLink to="/about">about 이동</RouterLink>
    <span>기초 설정이랑 main.css 이런거 설정좀 봐야겠어</span>
    <!-- <div class="container">
      <div class="title">
        <span>가운데에서 유지?</span>
      </div>
      <div class="login">
        <form @submit.prevent="submitForm"></form>
      </div>
    </div> -->

  </div>
</template>

<script setup lang="ts">

  const submitForm = () => {
    console.log('보낼거')
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

  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  
}
.login{
  width: 500px;
  height: 500px;
  background-color: #444;
}

</style>