<template>
  <div class="home">
    <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
      <Product :product="product" v-for="product in products" :key="product.id"/>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import Product from "@/components/Product.vue"

import { useStore } from 'vuex'
const store = useStore()

onMounted(() => {
  store.dispatch("getProducts");
});

const products = computed(() => {
  return store.state.cart.products
})
</script>

<style>
/* Add your styles here */
</style>