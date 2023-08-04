<template>
  <div class='cartItem w-full flex justify-between gap-2'>
    <!-- checkbox -->
    <input
      type="checkbox"
    />
    <!-- image -->
    <div class="w-[100px] h-[80px]">
    <img class='block w-full h-full object-cover' :src="item.picture" alt='' />
    </div>
    <!-- title & qty -->
    <div class="flex-1">
      <!-- title -->
      <div class='text-sm text-left font-medium mb-2'>
          {{ item.title }}
      </div>
      <div class="flex justify-between gap-6">
        <!-- qty -->
        <div class='flex flex-1 md:w-[200px] items-center h-full border font-medium'>
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
        
        <div class='flex-1 flex items-center font-medium'>
          {{ `$ ${item.price * item.amount}` }}
        </div>
      </div>
    </div>
    <!-- remove btn -->
    <button @click="removeFromCart(item)" class='text-lg cursor-pointer'>
      <i class="fa-regular fa-trash-can"></i>
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