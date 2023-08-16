<template>
  <div class="cartItem w-full flex justify-between items-center gap-2 border-b py-6 mb-4 relative">
    <!-- checkbox -->
    <input type="checkbox" :checked="item.checked" @click="checkItem(item.id)" />
    <!-- image -->
    <div class="w-[80px] md:w-[140px] ">
      <img class="block w-full h-[70px] md:h-[100px] object-cover rounded" :src="item.image" alt="" />
    </div>
    <!-- title & [qty & price]  -->
    <div class="flex-1 flex flex-col justify-between pr-4 md:pr-0 md:flex-row md:items-center md:gap-4">
      <!-- title -->
      <div class="flex-1 text-sm md:text-lg text-left font-medium mb-2">
        {{ item.title }}
      </div>
      <!-- [qty & price] -->
      <div class="flex-1 flex justify-between gap-6">
        <!-- qty -->
        <div class="flex-1">
          <div class="flex items-center h-full border font-medium w-[90px] md:w-[120px] md:h-9">
            <!-- minus icon -->
            <button 
              class="flex-1 h-full flex justify-center items-center cursor-pointer border-r"
              @click="decreaseAmount(item)">
              -
            </button>
            <!-- amount -->
            <div class="h-full flex justify-center items-center px-3">
              {{ item.amount }}
            </div>
            <!-- plus icon -->
            <button
class="flex-1 h-full flex justify-center items-center cursor-pointer border-l"
              @click="increaseAmount(item)">
              +
            </button>
          </div>
        </div>
        <!-- price -->
        <div class="flex-1 flex items-center justify-end font-medium">
          {{ $filters.thousandsFilter(item.price) }}
        </div>
      </div>
    </div>
    <!-- remove btn -->
    <button class="cursor-pointer absolute -top-1 right-1 text-gray-400 text-md md:text-lg" @click="removeFromCart(item)">
      &#10761;
      <!-- 刪除 -->
    </button>
  </div>
</template>
<script setup>
import { useStore } from "vuex";

const store = useStore();

defineProps({
	item: {
		type: Object, default: ()=> {}},
});

const removeFromCart = (item) => {
	store.dispatch("removeFromCart", item);
};

const increaseAmount = (item) => {
	store.dispatch("addToCart", item);
};

const decreaseAmount = (item) => {
	store.dispatch("decreaseAmount", item);
};

const checkItem = (id) => {
	store.dispatch("checkItem", id);
};
</script>
