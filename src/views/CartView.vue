<template>
  <main class="cart overflow-hidden">
    <h2 class="mb-4 text-2xl">Cart List</h2>

    <div v-if="cartItems.length">
      <div class="flex items-center py-2">
        <!-- checkbox -->
        <input
          id="checkAll"
          class="mr-2 h-4 w-4 accent-theme-orange"
          name="checkAll"
          type="checkbox"
          :checked="checkAll"
          @click="handleCheckAll()"
        />
        <label for="checkAll">check all</label>
        <!-- multiple remove button -->
        <button
          class="ml-auto rounded bg-theme-orange px-3 py-1 text-white lg:hover:bg-[#ef733e]"
          @click="multipleRemove()"
        >
          Remove checked Items
        </button>
      </div>
      <hr class="mb-5" />
      <div class="mb-5 flex flex-col">
        <CartItem v-for="item in cartItems" :key="item.id" :item="item" />
      </div>
      <div class="mb-10 ml-auto flex w-2/3 flex-col pr-4 md:w-1/3 md:pr-0">
        <p class="mb-3">{{ totalAmount }} items</p>
        <div
          class="flex justify-between border-t border-gray-500 pb-5 pt-3 font-medium text-red-500"
        >
          <span>Total Price</span>
          <span>{{ $filters.thousandsFilter(totalPrice) }}</span>
        </div>
      </div>
      <div class="flex justify-between">
        <router-link
          class="w-32 rounded bg-gray-500 py-1 text-center text-white md:w-48 md:py-2 lg:hover:bg-gray-400"
          to="/"
        >
          Return to product list
        </router-link>
        <button
          class="w-32 rounded bg-gray-700 py-1 text-white md:w-48 md:py-2 lg:hover:bg-gray-600"
          to="/"
        >
          Check out
        </button>
      </div>
    </div>

    <div v-else>Shopping cart is empty(ಥ_ಥ)，please add some products to the cart.</div>
  </main>
</template>
<script setup>
import { onMounted, computed, ref, watch } from 'vue';
import { useStore } from 'vuex';
import CartItem from '@/components/CartItem.vue';

const store = useStore();

const checkAll = ref(false);

onMounted(() => {
  store.dispatch('getCartItems');
  store.dispatch('resetChecked');
});

const cartItems = computed(() => {
  return store.state.cart.cartItems;
});

const totalAmount = computed(() => {
  return store.getters.totalAmount;
});

const totalPrice = computed(() => {
  let total = 0;
  cartItems.value.forEach((item) => {
    total += item.amount * item.price;
  });

  return total;
});

const handleCheckAll = () => {
  checkAll.value = !checkAll.value;
  store.dispatch('handleCheckAll', checkAll.value);
};

const multipleRemove = () => {
  store.dispatch('multipleRemove');
};

watch(
  () => cartItems.value,
  () => {
    let hasAnyNonChecked = cartItems.value.some((item) => item.checked === false);
    hasAnyNonChecked ? (checkAll.value = false) : (checkAll.value = true);
  }
);
</script>
