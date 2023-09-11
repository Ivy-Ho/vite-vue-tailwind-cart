<template>
  <NavBar />
  <div class="container my-10 max-w-6xl">
    <router-view />
  </div>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
</script>