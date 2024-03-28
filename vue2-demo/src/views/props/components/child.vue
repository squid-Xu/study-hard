<template>
	<div>
		<p>第一种接收值：{{ first }} --- props</p>
		<p>第二种接收值:{{ second }} ---$emit</p>
		<button @click="$emit('change', 20)">第二种</button>
		<p>第三种接收值：{{ third }} --- .sync</p>
		<button @click="$emit('update:third', 30)">第三种</button>
		<p>第四种接收值：{{ value }} --- v-model</p>
		<button @click="$emit('input', 40)">第四种</button>
		<p>第五种接收值：{{ fifth }} --- ref/children/parent</p>
		<button @click="handleFifth">第五种</button>
		<p>第六种接收值：{{ $attrs.sixth }} --- attrs/listeners</p>
		<button @click="$emit('handleSixth')">第六种</button>
		<p>第七种接收值：{{ seventh() }} --- provide/inject</p>
		<button @click="handleSeventh(70)">第七种</button>
		<p>第八种接收值：{{ eighth }} --- eventBus</p>
		<button @click="handleEighth">第八种</button>
		<p>第九种接收值：{{ ninth }} --- $root</p>
		<button @click="handleNinth">第九种</button>
		<slot :tenth="tenth"></slot>
		<button @click="$emit('handleTenth')">第十种 --- slot</button>
	</div>
</template>
<script>
import eventBus from '../eventBus';
export default {
	props: {
		first: {
			type: Number,
			defaut: 0,
		},
		second: {
			type: Number,
			defaut: 0,
		},
		third: {
			type: Number,
			defaut: 0,
		},
		value: {
			type: Number,
			defaut: 0,
		},
		fifth: {
			type: Number,
			defaut: 0,
		},
		eighth: {
			type: Number,
			defaut: 0,
		},
		ninth: {
			type: Number,
			defaut: 0,
		},
		tenth: {
			type: Number,
			defaut: 0,
		},
	},
	inject: {
		seventh: {
			type: Number,
			defaut: 0,
		},
		handleSeventh: {
			type: Function,
			defaut: () => {},
		},
	},
	data() {
		return {};
	},
	methods: {
		handleFifth() {
			this.$parent.fifth = 50;
		},
		handleEighth() {
			eventBus.$emit('handleEighth', 80);
		},
		handleNinth() {
			this.$root.$emit('handleNinth');
		},
	},
};
</script>
