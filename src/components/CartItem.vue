<template>
  <div class="cartItem w-full flex justify-between items-center gap-2 border-b pb-5">
    <!-- checkbox -->
    <input type="checkbox" :checked="item.checked" @click="checkItem(item.id)" />
    <!-- image -->
    <div class="w-[80px] h-[70px] md:w-[140px] md:h-[100px]">
      <img class="block w-full h-full object-cover rounded" :src="item.picture" alt="" />
    </div>
    <!-- title & [qty & price & remove button]  -->
    <div class="flex-1 flex flex-col justify-between md:flex-row md:items-center md:gap-3">
      <!-- title -->
      <div class="text-sm md:text-lg text-left font-medium mb-2">
        {{ item.title }}
      </div>
      <!-- [qty & price & remove button] -->
      <div class="flex justify-between gap-6">
        <!-- qty -->
        <div class="flex flex-1 items-center h-full border font-medium md:w-[160px] md:h-9">
          <!-- minus icon -->
          <button @click="decreaseAmount(item.id)"
            class="flex-1 h-full flex justify-center items-center cursor-pointer border-r">
            -
          </button>
          <!-- amount -->
          <div class="h-full flex justify-center items-center px-3">
            {{ item.amount }}
          </div>
          <!-- plus icon -->
          <button @click="increaseAmount(item)"
            class="flex-1 h-full flex justify-center items-center cursor-pointer border-l">
            +
          </button>
        </div>
        <!-- price -->
        <div class="flex-1 flex items-center font-medium">
          $ {{ item.price }}
        </div>
        <!-- remove btn -->
        <button @click="removeFromCart(item)" class="text-sm cursor-pointer">
          <font-awesome-icon :icon="['far', 'trash-can']" />
          <!-- 刪除 -->
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useStore } from "vuex";
import Swal from "sweetalert2";

const store = useStore();

const props = defineProps({
  item: {
    type: Object,
    default: {},
  },
});

const removeFromCart = (product) => {
  Swal.fire({
    title: "刪除單品項",
    text: `您是否確定將 ${product.title} 從購物車中刪除?`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "確定",
    cancelButtonText: "取消",
  }).then((result) => {
    if (result.isConfirmed) {
      store.dispatch("removeFromCart", product);
      Swal.fire("刪除成功", "", "success");
    }
  });
};

const increaseAmount = (item) => {
  store.dispatch("addToCart", item);
};

const decreaseAmount = (id) => {
  store.dispatch("decreaseAmount", id);
};

const checkItem = (id) => {
  store.dispatch("checkItem", id);
};
</script>
