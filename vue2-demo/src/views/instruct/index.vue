<template>
	<div>
		<!-- <h1>Vue2指令</h1> -->
		<h2>表单修饰符</h2>
		<ul>
			<li>
				<p>1、失去焦点才会更新数据</p>
				<p>.lazy ---- {{ one }}</p>
				<input type="text" v-model.lazy="one" />
			</li>
			<li>
				<p>2、去除首尾空格</p>
				<p>.trim ----- {{ two }}</p>
				<input type="text" v-model.trim="two" />
			</li>
			<li>
				<p>3、先输入的数字转数字，先输入字符串无效</p>
				<p>.number ------- {{ typeof three }}</p>
				<input type="text" v-model.number="three" />
			</li>
		</ul>
		<h2>事件修饰符</h2>
		<ul>
			<li>
				<p>4、阻止事件冒泡</p>
				<p>.stop</p>
				<div @click="handleEvent(2)" style="width: 300px; height: 100px; background: red">
					<button @click="handleEvent(1)">不加.stop点击</button>
				</div>
				<br />
				<div @click="handleEvent(2)" style="width: 300px; height: 100px; background: red">
					<button @click.stop="handleEvent(1)">加.stop点击</button>
				</div>
			</li>
			<li>
				<p>5、阻止默认行为，例如a链接跳转</p>
				<p>.prevent</p>
				<a href="#" @click="handleEvent(1)">不加.prevent超链接</a>
				<br />
				<a href="#" @click.prevent="handleEvent(1)">加.prevent超链接</a>
			</li>
			<li>
				<p>6、只有点击事件绑定本身才会触发事件，变相阻止冒泡</p>
				<p>.self</p>
				<div @click="handleEvent(2)" style="width: 300px; height: 100px; background: red">
					<button @click="handleEvent(1)">不加.self点击</button>
				</div>
				<br />
				<div @click.self="handleEvent(2)" style="width: 300px; height: 100px; background: red">
					<button @click="handleEvent(1)">加.self点击</button>
				</div>
			</li>
			<li>
				<p>7、事件只执行一次</p>
				<p>.once</p>
				<button @click="handleEvent(1)">不加.once点击</button>
				<br />
				<button @click.once="handleEvent(2)">加.once点击</button>
			</li>

			<li>
				<p>8、默认冒泡由内往外，capture反过来</p>
				<p>.capture</p>
				<div @click="handleEvent(2)" style="width: 300px; height: 100px; background: red">
					<button @click="handleEvent(1)">不加.capture点击</button>
				</div>
				<br />
				<div @click.capture="handleEvent(2)" style="width: 300px; height: 100px; background: red">
					<button @click="handleEvent(1)">加.capture点击</button>
				</div>
			</li>
			<li>
				<p>9、保证自定义事件能执行</p>
				<p>.native</p>
				<child @click="handleEvent(1)"></child>
				<br />
				<child @click.native="handleEvent(1)"></child>
			</li>
			<li>
				<p>10、鼠标左中右事件</p>
				<p>.left，right，middle</p>
				<button @click.left="handleEvent(1)">左</button>
				<br />
				<button @click.middle="handleEvent(2)">中</button>
				<br />
				<button @click.right="handleEvent(3)">右</button>
			</li>
			<li>
				<p>passive主要用在移动端的scroll事件，来提高浏览器响应速度，提升用户体验</p>
				<p>
					因为passive=true等于提前告诉了浏览器，touchstart和touchmove不会阻止默认事件，
					手刚开始触摸，浏览器就可以立刻给与响应；否则，手触摸屏幕了，但要等待touchstart和touchmove的结果，
					多了这一步，响应时间就长了，用户体验也就差了。
				</p>
				<p>.passive</p>
				<div @scroll="onScroll" class="box">
					<li v-for="n in 100" :key="n">{{ n }}</li>
				</div>
				<div @scroll.passive="onScroll" class="box">
					<li v-for="n in 100" :key="n">{{ n }}</li>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
import child from './components/child.vue';
export default {
	components: {
		child,
	},
	data() {
		return {
			one: 1,
			two: '         2',
			three: '3',
		};
	},
	methods: {
		handleEvent(val) {
			alert(val);
		},
		onScroll() {
			console.log('onScroll');
		},
	},
};
</script>
<style scoped>
.box {
	width: 300px;
	height: 300px;
	overflow: scroll;
	background-color: aquamarine;
}
</style>
