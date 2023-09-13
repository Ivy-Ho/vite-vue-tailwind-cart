<template>
	<main class="home">
		<h2 class="mb-4 text-xl md:text-2xl">Product List</h2>
		<div
			v-if="products.length"
			class="mx-auto grid max-w-sm grid-cols-1 gap-[45px] md:mx-0 md:max-w-none md:grid-cols-2 lg:grid-cols-4 lg:gap-[60px]"
		>
			<ProductItem
				v-for="product in products"
				:key="product.id"
				:product="product"
			/>
		</div>

		<div v-else class="text-xl text-gray-500">Loading...</div>
	</main>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import ProductItem from '@/components/ProductItem.vue';
import { useStore } from 'vuex';
const store = useStore();

onMounted(() => {
	store.dispatch('getProducts');
	store.dispatch('getCartItems');
});

const products = computed(() => {
	return store.state.cart.products;
});
</script>

<style>
/* Add your styles here */
</style>
