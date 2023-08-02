<template>
  <div class="layout">
    <Navbar msg="Vite + Vue" />
    <div class="max-w-7xl mx-auto relative z-0 mb-page-min-height">
      <div class="sm:px-16 px-6 sm:py-16 py-10 container mx-auto rounded-xl shadow border p-8 m-10">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
</script>