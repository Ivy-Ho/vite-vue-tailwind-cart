<template>
  <div class="product">
    <div class='border border-[#e4e4e4] h-[150px] mb-4 relative overflow-hidden group transition'>
      <div class='w-full h-full flex justify-center items-center'>
        <!-- image -->
          <img class='group-hover:scale-110 transition duration-300' :src="product.picture" alt="" />
      </div>
      <!-- buttons -->
        <button @click="addToCart(product)">
          <div class='absolute top-4 -right-11 group-hover:right-4 p-2 l opacity-0 group-hover:opacity-100 transition-all duration-300
          flex justify-center items-center text-white w-12 h-12 bg-red-500'
          :class="{ 'bg-gray-400 cursor-default': product.status === '尚未開始' }"
          >
            add
          </div>
        </button>
    </div>
    <!-- category & title & price -->
    <div>
      <div class='text-sm capitalize text-gray-500 mb-1'>{{ product.status }}</div>
      <h2 class='font-medium mb-1'>{{ product.title }}</h2>
      <div class='font-bold'>$ {{ product.price }}</div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useStore } from 'vuex'
const store = useStore();

defineProps({
  product: {
    type: Object,
    default: {}
  }
})

const addToCart = (product) => {
  if(product.status !== '尚未開始') {
    store.commit('addToCart',product);
  }
};

</script>

<style>

</style>