<template>
	<div>
		<div>页面1</div>
		<button @click="handleClick">跳转页面</button>
	</div>
</template>
<script>
export default {
	methods: {
		handleClick() {
			console.log('111');
			this.$router.push({
				// path: 'query-page-2',
				// query: {
				// 	a: 1,
				// 	b: 2,
				// },
				name: 'query-page-2',
				params: {
					a: 1,
					b: 2,
				},
			});
		},
	},
};
</script>
