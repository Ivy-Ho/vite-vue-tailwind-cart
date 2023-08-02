<template>
  <div class='cartItem w-full min-h-[150px] flex items-center gap-x-4'>

  <img class='max-w-[80px]' :src="item.picture" alt='' />
   <div class='w-full flex flex-col'>
    <div class='flex justify-between mb-2'>
      <div class='text-sm uppercase font-medium max-w-[240px] text-primary'>
          {{ item.title }}
      </div>
      <div class='text-xl cursor-pointer'>
        remove
      </div>
    </div>

   </div>
    <div class='flex gap-x-2 h-[36px] text-sm'>
      <!-- qty -->
      <div class='flex flex-1 maz-w-[100px] items-center h-full border text-primary font-medium'>
        <!-- minus icon -->
        <div class='flex-1 h-full flex justify-center items-center cursor-pointer'>
          -
        </div>
        <!-- amount -->
        <div class='h-full flex justify-center items-center px-2'>2</div>
          <!-- plus icon -->
        <div class='flex-1 h-full flex justify-center items-center cursor-pointer'>
          +
        </div>
      </div>
      <!-- item price -->
      <div class='flex-1 flex items-center justify-around'>$ {{ item.price }}</div>
    </div>
    <div class='flex-1 flex justify-end items-center text-primary font-medium'>
      {{`$ ${parseFloat(item.price * 2)}`}}
    </div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'

defineProps({
  item: {
    type: Object,
    default: {}
  }
})
</script>