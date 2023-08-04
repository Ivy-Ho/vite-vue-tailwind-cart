<script setup>

</script>

<template>
  <!-- <h1>{{ msg }}</h1> -->
  <nav class="w-full px-5 md:px-10 py-5 sticky top-0 z-30 bg-gray-800 flex justify-between items-center">
    <router-link class="lg:hover:text-gray-400 text-white mr-6 text-xl" to="/">
      <h1 class="text-white font-semibold text-2xl md:text-3xl">EZ Course</h1>  
    </router-link>
    <div>
      <router-link class="lg:hover:text-gray-400 text-white mr-6 text-lg md:text-xl" to="/">課程列表</router-link>
      <router-link class="lg:hover:text-gray-400 text-white text-lg md:text-xl" to="/cart">
        <i class="fa-solid fa-cart-shopping"></i>
      </router-link>
    </div>
  </nav>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
