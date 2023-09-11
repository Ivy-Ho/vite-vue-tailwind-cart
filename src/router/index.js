import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		component: () => import('@/views/LayoutView.vue'),
		children: [
			{
				path: '',
				component: () => import('@/views/HomeView.vue'),
			},
			{
				path: '/cart',
				name: 'CartView',
				component: () => import('@/views/CartView.vue'),
			},
		],
	},
];

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
