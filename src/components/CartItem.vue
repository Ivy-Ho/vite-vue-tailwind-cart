<template>
  <div class='cartItem w-full flex justify-between items-center gap-2 border-b pb-5'>
    <!-- checkbox -->
    <input
      type="checkbox"
      :checked="item.checked"
      @click="checkItem(item.id)"
    />
    <!-- image -->
    <div class="w-[80px] h-[70px] md:w-[140px] md:h-[100px]">
    <img class='block w-full h-full object-cover rounded' :src="item.picture" alt='' />
    </div>
    <!-- title & [qty & price & remove button]  -->
    <div class="flex-1 flex flex-col justify-between md:flex-row md:items-center md:gap-3">
      <!-- title -->
      <div class='text-sm md:text-lg text-left font-medium mb-2'>
          {{ item.title }}
      </div>
      <!-- [qty & price & remove button] -->
      <div class="flex justify-between gap-6">
        <!-- qty -->
        <div class='flex flex-1 items-center h-full border font-medium md:w-[160px] md:h-9'>
          <!-- minus icon -->
          <button 
            @click="decreaseAmount(item.id)"
            class='flex-1 h-full flex justify-center items-center cursor-pointer border-r'>
            -
          </button>
          <!-- amount -->
          <div class='h-full flex justify-center items-center px-3'>{{ item.amount }}</div>
            <!-- plus icon -->
          <button 
            @click="increaseAmount(item.id)"
            class='flex-1 h-full flex justify-center items-center cursor-pointer border-l'>
            +
          </button>
        </div>
        <!-- price -->
        <div class='flex-1 flex items-center font-medium'>
          $ {{ item.price }}
        </div>
        <!-- remove btn -->
        <button @click="removeFromCart(item)" class='text-sm cursor-pointer'>
          <i class="fa-regular fa-trash-can"></i>
          <!-- 刪除 -->
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

let props = defineProps({
  item: {
    type: Object,
    default: {}
  },
})

const removeFromCart = (product) => {
  store.dispatch('removeFromCart', product);
};

const increaseAmount = (id) => {
  store.dispatch('increaseAmount', id);
}

const decreaseAmount = (id) => {
  store.dispatch('decreaseAmount', id);
}

const checkItem = (id) => {
  store.dispatch('checkItem', id);
}


</script>