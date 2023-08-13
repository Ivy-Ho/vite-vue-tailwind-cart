<template>
  <div class="product group">
    <div class="relative h-[300px] mb-4 overflow-hidden transition">
      <!-- image -->
      <img
        class="w-full h-[300px] object-cover block lg:group-hover:scale-110 transition duration-300 rounded-tl rounded-tr"
        :src="product.image" :alt="`${product.title}-image`" />
      <!-- buttons -->
      <button class="w-9 h-9 flex items-center justify-center rounded bg-[#f15c1b] lg:hover:bg-[#ef733e] text-white absolute top-2 right-2" @click="addToCart(product)">
        <font-awesome-icon :icon="['fas', 'cart-plus']" />
      </button>
    </div>
    <!-- category & title & price -->
    <div>
      <!-- category -->
      <div class="text-sm capitalize mb-2 text-gray-700">
        {{ product.category }}
      </div>
      <!-- title -->
      <h2 class="font-medium mb-1">{{ product.title }}</h2>
      <!-- price -->
      <div class="font-bold mb-1">{{ $filters.thousandsFilter(product.price) }}</div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import Swal from "sweetalert2";
const store = useStore();

defineProps({
	product: {
		type: Object, default: ()=> {},
	},
});

const addToCart = (product) => {
	store.dispatch("addToCart", product);
	Swal.fire({
		icon: "success",
		title: "Success!",
		text: `Add "${product.title}" to the cart.`,
		showConfirmButton: false,
		timer: 1500
	});
};
</script>
