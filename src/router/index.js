import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/",
		component: () => import("@/views/LayoutView.vue"),
		children: [
			{
				path: "",
				component: () => import("@/views/HomeView.vue"),
			},
			{
				path: "/cart",
				name: "CartView",
				component: () => import("@/views/CartView.vue"),
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;