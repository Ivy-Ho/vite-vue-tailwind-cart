<template>
  <nav
    class="sticky top-0 z-30 flex w-full items-center justify-between bg-gray-800 px-5 py-5 md:px-10"
  >
    <router-link class="mr-6 text-xl text-white lg:hover:text-gray-400" to="/">
      <h1 class="text-2xl font-semibold text-white md:text-3xl">AGMarKet</h1>
    </router-link>
    <div>
      <router-link class="mr-6 text-lg text-white md:text-xl lg:hover:text-gray-400" to="/"
        >Products</router-link
      >
      <router-link class="relative text-lg text-white md:text-xl lg:hover:text-gray-400" to="/cart">
        <!-- <i class="fa-solid fa-cart-shopping"></i> -->
        <font-awesome-icon :icon="['fas', 'cart-shopping']" />
        <div
          class="absolute -right-2 -top-2 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-red-500 text-[12px] text-white"
        >
          {{ totalAmount }}
        </div>
      </router-link>
    </div>
  </nav>
</template>
<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const totalAmount = computed(() => {
  return store.getters.totalAmount;
});
</script>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
