<template>
  <main class="cart overflow-hidden">
    <h2 class="text-2xl mb-4">Cart List</h2>

    <div v-if="cartItems.length">
      <div class="flex items-center py-2">
        <!-- checkbox -->
        <input class="mr-2" id="checkAll" name="checkAll" type="checkbox" :checked="checkAll" @click="handleCheckAll()" />
        <label for="checkAll">check all</label>
        <!-- multiple remove button -->
        <button class="bg-[#f15c1b] lg:hover:bg-[#ef733e] text-white px-3 py-1 rounded ml-auto" @click="multipleRemove()">
          Remove checked Items
        </button>
      </div>
      <hr class="mb-5" />
      <div class="flex flex-col mb-5">
        <CartItem :item="item" v-for="item in cartItems" :key="item.id" />
      </div>
      <div class="w-2/3 md:w-1/3 flex flex-col ml-auto mb-10 pr-4 md:pr-0">
        <p class="mb-3">{{ totalAmount }} items</p>
        <div class="flex justify-between pt-3 pb-5 text-red-500 font-medium border-t border-gray-500">
          <span>Total Price</span>
          <span>{{ $filters.thousandsFilter(totalPrice) }}</span>
        </div>
      </div>
      <div class="flex justify-between">
        <router-link class="bg-gray-500 lg:hover:bg-gray-400 text-white w-32 md:w-48 py-1 md:py-2 rounded text-center"
          to="/">
          Return to product list
        </router-link>
        <button class="bg-gray-700 lg:hover:bg-gray-600 text-white w-32 md:w-48 py-1 md:py-2 rounded" to="/">
          Check out
        </button>
      </div>
    </div>

    <div v-else>Shopping cart is empty(ಥ_ಥ)，please add some products to the cart.</div>
  </main>
</template>
<script setup>
import { onMounted, computed, ref, watch } from "vue";
import { useStore } from "vuex";
import CartItem from "@/components/CartItem.vue";

const store = useStore();

const checkAll = ref(false);

onMounted(() => {
  store.dispatch("getCartItems");
  store.dispatch("resetChecked");
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
  store.dispatch("handleCheckAll", checkAll.value);
};

const multipleRemove = () => {

  store.dispatch("multipleRemove");
};

watch(
  () => cartItems.value,
  () => {
    let hasAnyNonChecked = cartItems.value.some(
      (item) => item.checked === false
    );
    hasAnyNonChecked ? (checkAll.value = false) : (checkAll.value = true);
  }
);
</script>
