<template>
  <div class="product group">
    <div class="relative mb-4 overflow-hidden transition">
      <!-- image -->
      <img
        class="block h-[300px] w-full rounded-tl rounded-tr object-cover transition duration-300 lg:group-hover:scale-110"
        :src="product.image"
        :alt="`${product.title}-image`"
      />
      <!-- buttons -->
      <button
        class="absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded bg-theme-orange text-white lg:hover:bg-[#ef733e]"
        @click="addToCart(product)"
      >
        <font-awesome-icon :icon="['fas', 'cart-plus']" />
      </button>
    </div>
    <!-- category & title & price -->
    <div>
      <!-- category -->
      <div class="mb-2 text-sm capitalize text-gray-700">
        {{ product.category }}
      </div>
      <!-- title -->
      <h2 class="mb-1 font-medium">{{ product.title }}</h2>
      <!-- price -->
      <div class="mb-1 font-bold">
        {{ $filters.thousandsFilter(product.price) }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import Swal from 'sweetalert2';
const store = useStore();

defineProps({
  product: {
    type: Object,
    default: () => {}
  }
});

const addToCart = (product) => {
  store.dispatch('addToCart', product);
  Swal.fire({
    icon: 'success',
    title: 'Success!',
    text: `Add "${product.title}" to the cart.`,
    showConfirmButton: false,
    timer: 1500
  });
};
</script>
