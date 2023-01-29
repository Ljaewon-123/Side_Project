<template>
  <div>
    <h2>about View</h2>

    <RouterLink to="/login">이동</RouterLink>

    <h3>현재 페이지 {{ router.path }}</h3>

  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';


const router = useRoute()

</script>

<style scoped>
</style>