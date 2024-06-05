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
	{
		path: '/instruct',
		component: () => import('../views/instruct/index.vue'),
		meta: { title: 'vue修饰符' },
	},
	{
		path: '/vuex',
		component: () => import('../views/vuex/index.vue'),
		meta: { title: 'vuex' },
	},
	{
		path: '/query-page-1',
		component: () => import('../views/query-page/index-1.vue'),
		meta: { title: 'query传值-1' },
	},
	{
		path: '/query-page-2/:a/:b',
		name: 'query-page-2',
		component: () => import('../views/query-page/index-2.vue'),
		meta: { title: 'query传值-2' },
	},
	{
		path: '/attrs',
		name: 'attrs',
		component: () => import('../views/attrs/list.vue'),
		meta: { title: '透传' },
	},
];
