<script setup>

</script>

<template>
  <nav class="w-full px-5 md:px-10 py-5 sticky top-0 z-30 bg-gray-800 flex justify-between items-center">
    <router-link class="lg:hover:text-gray-400 text-white mr-6 text-xl" to="/">
      <h1 class="text-white font-semibold text-2xl md:text-3xl">EZ 手作工作坊</h1>  
    </router-link>
    <div>
      <router-link class="lg:hover:text-gray-400 text-white mr-6 text-lg md:text-xl" to="/">課程列表</router-link>
      <router-link class="lg:hover:text-gray-400 text-white text-lg md:text-xl relative" to="/cart">
        <i class="fa-solid fa-cart-shopping"></i>
        <div class="bg-red-500 absolute -right-2 -top-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">{{ totalAmount }}</div>
      </router-link>
    </div>
  </nav>
</template>
<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore()

const totalAmount = computed(() => { 
  return store.getters.totalAmount;
})

</script>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
