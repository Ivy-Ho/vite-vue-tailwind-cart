<template>
  <div class="layout">
    <Navbar />
    <div class="container m-10 px-7 md:px-10 max-w-7xl mx-auto">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
</script>