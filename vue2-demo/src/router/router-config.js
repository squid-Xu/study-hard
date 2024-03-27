export const constantRouterMap = [
	{
		path: '/',
		component: () => import('../views/home/index.vue'),
		meta: { title: '首页' },
	},
	{
		path: '/props',
		component: () => import('../views/props/index.vue'),
		meta: { title: '组件通信方式' },
	},
];
