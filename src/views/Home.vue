<template>
  <div class="home">
    <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
      <Product :product="product" v-for="product in products" :key="product.id"  />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Product from "@/components/Product.vue"

// const url = 'https://fakestoreapi.com/products';
const url = 'https://run.mocky.io/v3/d7a29aba-9aac-4a97-b1b7-7b3d87ae8b7e';

const products = ref([]);

onMounted(() => {
  axios.get(url)
    .then((res) => {
      products.value = res.data;
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
});
</script>

<style>
/* Add your styles here */
</style>