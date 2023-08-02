<template>
  <main class="p-24 text-center">
    <div class='flex flex-col gap-y-2 overflow-x-hidden border-b'>
        <CartItem :item="item" v-for="item in products" :key="item.id" />
    </div>
  </main>
</template>
<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import CartItem from '@/components/CartItem.vue'

const store = useStore()
const products = computed(() => {
  return store.state.cart.products
})
</script>