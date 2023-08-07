<template>
  <div class="product group">
    <div class="relative h-[150px] mb-4 overflow-hidden transition">
      <!-- image -->
      <img
        class="w-full h-[150px] object-cover block lg:group-hover:scale-110 transition duration-300 rounded-tl rounded-tr"
        :src="product.picture" alt="" />
      <!-- status -->
      <div class="text-sm capitalize mb-2 w-20 py-1 rounded text-center absolute top-3 right-2" :class="[
        product.status === '尚未開始'
          ? 'bg-gray-500 text-white'
          : 'bg-[#f4ba63] text-gray-700',
      ]">
        {{ product.status }}
      </div>
    </div>
    <!-- category & title & price -->
    <div>
      <!-- title -->
      <h2 class="font-medium mb-1">{{ product.title }}</h2>
      <!-- price -->
      <div class="font-bold mb-1">$ {{ product.price }}</div>
      <!-- buttons -->
      <button @click="addToCart(product)" class="w-full text-center py-1 rounded" :class="[
        product.status === '尚未開始'
          ? 'bg-gray-500 text-white cursor-default'
          : 'bg-[#f15c1b] lg:hover:bg-[#ef733e] text-white',
      ]">
        <font-awesome-icon :icon="['fas', 'cart-plus']" class="mr-3" />加入購物車
      </button>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import Swal from "sweetalert2";
const store = useStore();

const props = defineProps({
  product: {
    type: Object,
    default: {},
  },
});

const addToCart = (product) => {
  if (product.status !== "尚未開始") {
    store.dispatch("addToCart", product);
    Swal.fire({
      icon: 'success',
       title: "加入成功",
      text: `已將 ${product.title} 加入購物車內`,
      showConfirmButton: false,
      timer: 1500
    })
  } else {
    return;
  }
};
</script>
