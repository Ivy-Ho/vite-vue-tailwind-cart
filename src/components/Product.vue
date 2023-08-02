<template>
  <div class="product">
    <div className='border border-[#e4e4e4] h-[200px] mb-4 relative overflow-hidden group transition'>
      <div className='w-full h-full flex justify-center items-center'>
        <!-- image -->
        <div className='w-[200px] mx-auto flex justify-center items-center'>
          <img className='max-h-[160px] group-hover:scale-110 transition duration-300' :src="product.picture" alt="" />
        </div>
      </div>
      <!-- buttons -->
        <!-- <button onClick={()=> addToCart(product, id)}> -->
        <button>
          <div className='absolute top-4 -right-11 group-hover:right-4 p-2 l opacity-0 group-hover:opacity-100 transition-all duration-300
          flex justify-center items-center text-white w-12 h-12 bg-red-500'>
            add
          </div>
        </button>
    </div>
    <!-- category & title & price -->
    <div>
      <div className='text-sm capitalize text-gray-500 mb-1'>{{ product.status }}</div>
      <a>
        <h2 className='font-semibold mb-1'>{{ product.title }}</h2>
      </a>
      <div className='font-semibold'>$ {{ product.price }}</div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  product: {
    type: Object,
    default: {}
  }
})
</script>

<style>

</style>script