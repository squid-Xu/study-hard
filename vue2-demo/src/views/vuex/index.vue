<template>
	<div>
		<h1>Vuex</h1>
		<h2>count:{{ $store.state.count }}</h2>
		<h2>$store.state.obj : {{ $store.state.obj }}</h2>
		<h2>mapState-count:{{ count }}</h2>
		<h2>mapState-obj:{{ obj }}</h2>
		<button @click="handleClick">按钮</button>
	</div>
</template>
<script>
import { mapState } from 'vuex';
export default {
	created() {
		console.log(this.$store.state.count);
	},
	computed: {
		...mapState(['count', 'obj']),
	},
	methods: {
		handleClick() {
			// this.$store.state.count = 1000;
			// this.$store.state.obj = { a: 11, b: 22 };
			// this.count = 2000;
			this.obj.a = 33;
		},
	},
};
</script>
