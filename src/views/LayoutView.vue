<template>
  <NavBar />
  <div class="container m-10 px-7 md:px-10 max-w-6xl mx-auto">
    <router-view />
  </div>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
</script>