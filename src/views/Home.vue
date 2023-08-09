<template>
  <main class="home">
    <h2 class="text-xl md:text-2xl mb-4">Product List</h2>
    <div v-if="products.length" class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[45px] lg:gap-[60px] max-w-sm mx-auto md:max-w-none md:mx-0'>
      <Product :product="product" v-for="product in products" :key="product.id"/>
    </div>

    <div v-else class="text-xl text-gray-500">
      Loading...
    </div>
  </main>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import Product from "@/components/Product.vue"
import { useStore } from 'vuex'
const store = useStore()

onMounted(() => {
  store.dispatch("getProducts");
  store.dispatch("getCartItems");
});

const products = computed(() => {
  return store.state.cart.products
})
</script>

<style>
/* Add your styles here */
</style>