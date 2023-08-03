<template>
  <div class='cartItem w-full min-h-[150px] flex items-center gap-x-4'>

  <img class='max-w-[80px]' :src="item.picture" alt='' />
   <div class='w-full flex flex-col'>
    <div class='mb-2'>
      <div class='text-sm text-left font-medium max-w-[280px] text-primary'>
          {{ item.title }}
      </div>
    </div>
   </div>
    <div class='flex gap-x-2 h-[36px] text-sm'>
      <!-- qty -->
      <div class='flex flex-1 w-[200px] items-center h-full border text-primary font-medium'>
        <!-- minus icon -->
        <button 
           @click="decreaseAmount(item.id)"
          class='flex-1 h-full flex justify-center items-center cursor-pointer'>
          -
        </button>
        <!-- amount -->
        <div class='h-full flex justify-center items-center px-2'>{{ item.amount }}</div>
          <!-- plus icon -->
        <button 
          @click="increaseAmount(item.id)"
          class='flex-1 h-full flex justify-center items-center cursor-pointer'>
          +
        </button>
      </div>
      <!-- item price -->
      <div class='flex-1 flex items-center justify-around'>
        $ {{ item.price }}
      </div>
      <div class='flex-1 flex items-center text-primary font-medium'>
        {{`$ ${item.price * item.amount}`}}
      </div>
    </div>
    <button @click="removeFromCart(item)" class='text-xl cursor-pointer'>
      x
    </button>
  </div>
</template>
<script setup>
import { defineProps } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

defineProps({
  item: {
    type: Object,
    default: {}
  }
})

const removeFromCart = (product) => {
  store.commit('removeFromCart', product);
};

const increaseAmount = (id) => {
  store.dispatch('increaseAmount', id);
}

const decreaseAmount = (id) => {
  store.dispatch('decreaseAmount', id);
}



</script>