<template>
  <main class="p-24 text-center">
    <div class='flex flex-col gap-y-2 overflow-x-hidden border-b'>
        <CartItem :item="item" v-for="item in cartItems" :key="item.id" />
    </div>
  </main>
</template>
<script setup>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import CartItem from '@/components/CartItem.vue'

const store = useStore()

onMounted(() => {
  store.commit("getCartItems");
});


const cartItems = computed(() => {
  return store.state.cart.cartItems
})

</script>