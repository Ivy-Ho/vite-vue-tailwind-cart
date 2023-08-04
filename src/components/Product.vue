<template>
  <div class="product group">
    <div class='relative h-[150px] mb-4 overflow-hidden transition'>
      <!-- image -->
      <img class='w-full h-[150px] object-cover block lg:group-hover:scale-110 transition duration-300 rounded-tl rounded-tr ' :src="product.picture" alt="" />
      <!-- status -->
      <div 
        class='text-sm capitalize mb-2 w-20 py-1 rounded text-center absolute top-3 right-2'
        :class="[(product.status === '尚未開始') ? 'bg-gray-500 text-white' : 'bg-[#f4ba63] text-gray-700']"
      >
        {{ product.status }}
      </div>
    </div>
    <!-- category & title & price -->
    <div>
      <!-- title -->
      <h2 class='font-medium mb-1'>{{ product.title }}</h2>
      <!-- price -->
      <div class='font-bold mb-1'>$ {{ product.price }}</div>
       <!-- buttons -->
      <button 
        @click="addToCart(product)"
        class="w-full text-center py-1 rounded"
        :class="[(product.status === '尚未開始') ? 'bg-gray-500 text-white cursor-default' : 'bg-[#f15c1b] lg:hover:bg-[#ef733e] text-white']"
      >
        <i class="fa-solid fa-cart-plus mr-3"></i>加入購物車
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useStore } from 'vuex';
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
  }else {
    return
  }
};

</script>

<style>

</style>