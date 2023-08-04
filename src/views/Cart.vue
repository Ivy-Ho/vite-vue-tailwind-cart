<template>
  <main class="cart overflow-hidden">
    <h2 class="text-2xl mb-4">購物車</h2>

    <div v-if="cartItems.length">
      <div class="flex justify-between py-2">
        <!-- checkbox -->
        <div 
          class="relative -left-20 top-0 opacity-0 transition-all duration-300"
          :class="{'left-0 opacity-100': multipleRemove}"
        >
          <input 
            class="mr-2"
            id="checkAll"
            name="checkAll"
            type="checkbox"
            :checked="checkAll"
          />
          <label for="checkAll">全選</label>
        </div>
        <!-- multiple remove button -->
        <button 
          class="bg-[#f15c1b] lg:hover:bg-[#ef733e] text-white px-2 py-1"
          @click="multipleRemove = !multipleRemove"
        >
          多項刪除
        </button>
      </div>
      <hr class="mb-5">
      <div class='flex flex-col gap-5 mb-5'>
        <CartItem :item="item" :multipleRemove="multipleRemove" v-for="item in cartItems" :key="item.id" />
      </div>
      <hr class="mb-5">
      <div class="w-[150px] md:w-1/3 flex flex-col ml-auto">
        <p>共 {{ totalAmount }} 件商品</p>
        <div class="flex justify-between py-5">
          <span>合計金額</span>
          <span>$ {{ totalPrice }}</span>
        </div>
      </div>
    </div>

    <div v-else>購物車內目前沒有商品(ಥ_ಥ)</div>
  </main>
</template>
<script setup>
import { onMounted, computed, ref } from 'vue';
import { useStore } from 'vuex';
import CartItem from '@/components/CartItem.vue';

const store = useStore()

const multipleRemove = ref(false);

onMounted(() => {
  store.commit("getCartItems");
});


const cartItems = computed(() => {
  return store.state.cart.cartItems;
})

const totalAmount = computed(() => {
  let total = 0;
  cartItems.value.forEach((item) => {
    total += item.amount
  })
  
  return total;
})

const totalPrice = computed(()=> {
  let total = 0;
  cartItems.value.forEach((item) => {
    total += item.amount * item.price
  })

  return total
})

</script>