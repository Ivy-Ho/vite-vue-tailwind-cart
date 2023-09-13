<template>
	<div
		class="cartItem relative mb-4 flex w-full items-center justify-between gap-2 border-b py-6"
	>
		<!-- checkbox -->
		<input
			type="checkbox"
			class="h-4 w-4 accent-theme-orange"
			:checked="item.checked"
			@click="checkItem(item.id)"
		/>
		<!-- image -->
		<div class="w-[80px] md:w-[140px]">
			<img
				class="block h-[70px] w-full rounded object-cover md:h-[100px]"
				:src="item.image"
				alt=""
			/>
		</div>
		<!-- title & [qty & price]  -->
		<div
			class="flex flex-1 flex-col justify-between pr-4 md:flex-row md:items-center md:gap-4 md:pr-0"
		>
			<!-- title -->
			<div class="mb-2 flex-1 text-left text-sm font-medium md:text-lg">
				{{ item.title }}
			</div>
			<!-- [qty & price] -->
			<div class="flex flex-1 justify-between gap-6">
				<!-- qty -->
				<div class="flex-1">
					<div
						class="flex h-full w-[90px] items-center border font-medium md:h-9 md:w-[120px]"
					>
						<!-- minus icon -->
						<button
							class="flex h-full flex-1 cursor-pointer items-center justify-center border-r"
							@click="decreaseAmount(item)"
						>
							-
						</button>
						<!-- amount -->
						<div class="flex h-full items-center justify-center px-3">
							{{ item.amount }}
						</div>
						<!-- plus icon -->
						<button
							class="flex h-full flex-1 cursor-pointer items-center justify-center border-l"
							@click="increaseAmount(item)"
						>
							+
						</button>
					</div>
				</div>
				<!-- price -->
				<div class="flex flex-1 items-center justify-end font-medium">
					{{ $filters.thousandsFilter(item.price) }}
				</div>
			</div>
		</div>
		<!-- remove btn -->
		<button
			class="text-md absolute -top-1 right-1 cursor-pointer text-gray-400 md:text-lg"
			@click="removeFromCart(item)"
		>
			&#10761;
			<!-- 刪除 -->
		</button>
	</div>
</template>
<script setup>
import { useStore } from 'vuex';

const store = useStore();

defineProps({
	item: {
		type: Object,
		default: () => {},
	},
});

const removeFromCart = (item) => {
	store.dispatch('removeFromCart', item);
};

const increaseAmount = (item) => {
	store.dispatch('addToCart', item);
};

const decreaseAmount = (item) => {
	store.dispatch('decreaseAmount', item);
};

const checkItem = (id) => {
	store.dispatch('checkItem', id);
};
</script>
