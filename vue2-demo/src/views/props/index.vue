<template>
	<div>
		<h1>vue2组件通信（12种）</h1>
		<child
			:first="first"
			:second="second"
			@change="change"
			:third.sync="third"
			v-model="four"
			:fifth="fifth"
			:sixth="sixth"
			@handleSixth="handleSixth"
			:eighth="eighth"
			:ninth="ninth"
			:tenth="tenth"
			@handleTenth="handleTenth"
		>
			<template v-slot="slotProps">
				<p>第十种接收值：{{ slotProps.tenth }}</p>
			</template>
		</child>
	</div>
</template>
<script>
import child from './components/child.vue';
import eventBus from './eventBus';
export default {
	components: { child },
	provide() {
		return {
			seventh: () => {
				return this.seventh;
			},
			handleSeventh: val => {
				this.seventh = val;
			},
		};
	},
	data() {
		return {
			first: 1,
			second: 2,
			third: 3,
			four: 4,
			fifth: 5,
			sixth: 6,
			seventh: 7,
			eighth: 8,
			ninth: 9,
			tenth: 10,
		};
	},
	created() {
		eventBus.$on('handleEighth', val => {
			this.eighth = val;
		});
		this.$root.$on('handleNinth', () => {
			this.ninth = 90;
		});
	},
	mounted() {
		this.seventh = 700;
	},
	methods: {
		change(val) {
			this.second = val;
		},
		handleSixth() {
			this.sixth = 60;
		},
		handleTenth() {
			this.tenth = 100;
		},
	},
};
</script>
