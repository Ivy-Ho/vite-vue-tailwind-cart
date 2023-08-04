<template>
  <main class="cart">
    <h2 class="text-2xl mb-4">購物車</h2>
    <!-- checkbox -->
      <input 
        class="mr-2"
        id="checkAll"
        name="checkAll"
        type="checkbox"
      />
      <label for="checkAll">全選</label>
    <hr class="mb-5">
    <div class='flex flex-col gap-5 mb-5'>
      <CartItem :item="item" v-for="item in cartItems" :key="item.id" />
    </div>
    <hr>
    <div class="flex py-5">
      <span>合計金額</span>

    </div>
  </main>
</template>
<script setup>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import CartItem from '@/components/CartItem.vue';

const store = useStore()

onMounted(() => {
  store.commit("getCartItems");
});


const cartItems = computed(() => {
  return store.state.cart.cartItems;
})

</script>