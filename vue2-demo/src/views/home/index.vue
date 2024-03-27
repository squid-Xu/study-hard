<template>
	<div>
		<h3>导航</h3>
		<ul>
			<li v-for="(item, index) in nav" :key="index">
				<router-link :to="item.path">{{ item.title }}</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
import { constantRouterMap } from '../../router/router-config';
export default {
	data() {
		return {
			nav: [],
		};
	},
	created() {
		this.nav = constantRouterMap.map(v => {
			return {
				path: v.path,
				title: v.meta.title,
			};
		});
	},
};
</script>
<style scoped>
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
