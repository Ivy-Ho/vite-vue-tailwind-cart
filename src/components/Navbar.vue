<script setup>

</script>

<template>
  <!-- <h1>{{ msg }}</h1> -->
  <nav class="w-full px-8 py-5 fixed top-0 z-30 bg-gray-800 flex justify-between items-center">
    <h1 class="text-white font-semibold text-3xl">EZ Course</h1>
    <div>
      <router-link class="text-white mr-4" to="/">Home</router-link>
      <router-link class="text-white" to="/cart">Cart</router-link>
    </div>
  </nav>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
