import vue from 'vue';
import Vuex from 'vuex';

vue.use(Vuex);

export default new Vuex.Store({
	state: {
		count: 100,
		obj: {
			a: 1,
			b: 2,
		},
	},
});
