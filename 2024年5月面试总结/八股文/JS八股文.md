# 模块化

## CommonJS 规范

主要用在 nodejs 开发，module.export 暴漏属性和方法，通过 require 引入

-   优点

简单易用，服务器端模块便于重用

-   缺点

同步的模块加载方式，不适合在浏览器环境中.
不能非阻塞的并行加载多个模块

## AMD 规范(异步模块定义)

采用异步加载模块，所有依赖模块的语句再回调函数中执行，使用 define 定义模块，require 加载模块

-   优点

适合在浏览器中异步加载模块
可以并行加载多个模块

-   缺点

提高了开发成本
不符合通用的模块化思维方式

## UMD 规范（ 通用模块定义）

UMD 是 AMD 和 CommonJS 的一个糅合。AMD 是浏览器优先，异步加载；CommonJS 是服务器优先，同步加载

那就先判断是否支持 node 的模块，支持就使用 node；再判断是否支持 AMD，支持则使用 AMD 的方式加载。这就是所谓的 UMD。

## CMD 规范（公共模块定义）

CMD 可能是在 CommonJS 之后抽象出来的一套模块化语法定义和使用的标准。

在 CMD 规范中，一个模块就是一个文件。
我们可以通过 SeaJs 的 use 方法加载模块:

优点：可以很容易在 node 中运行
缺点：依赖 SPM 打包，模块的加载逻辑偏重

## ES6 模块化

尽量静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的关系

在 ES6 中，我们使用 export 关键字来导出模块，使用 import 关键字来引入模块。

优点：容易进行静态分析

缺点：原生浏览器端还没有实现该标准

## AMD 和 CMD 的区别

1、对于依赖的模块，AMD 是提前执行，CMD 是延迟执行
2、AMD 依赖前置，CMD 依赖就近

## ES6 模块与 CommonJS 模块的差异

1、CommonJS 模块输出的是一个 值的拷贝，ES6 模块输出的是 值的引用。
2、CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
3、CommonJS 模块的 require() 是 同步加载 模块，ES6 模块的 import 命令是 异步加载，有一个独立的模块依赖的解析阶段。

# 数据类型检测方法

## typeof

```js
// 其中数组、对象、null都会被判断为object，其他判断都正确。
console.log(typeof null); // object
console.log(typeof function () {}); // function
```

## instanceof

```js
// instanceof只能正确判断引用数据类型，而不能判断基本数据类型
console.log(2 instanceof Number); // false
console.log(true instanceof Boolean); // false
console.log('str' instanceof String); // false
console.log([] instanceof Array); // true
console.log(function () {} instanceof Function); // true
console.log({} instanceof Object); // true
```

## constructor

```js
// constructor有两个作用，一是判断数据的类型，二是对象实例通过 constrcutor 对象访问它的构造函数。需要注意，如果创建一个对象来改变它的原型，constructor就不能用来判断数据类型了：
console.log((2).constructor === Number); // true
console.log(true.constructor === Boolean); // true
console.log('str'.constructor === String); // true
console.log([].constructor === Array); // true
console.log(function () {}.constructor === Function); // true
console.log({}.constructor === Object); // true
```

## Object.prototype.toString.call()

# 判断数组的方法

```js
Object.prototype.toString.call();
instanceof ;
isArrary;
__proto__;
Arrary.prototype.isPrototypeOf()
```

# new 操作符的实现原理

1、首先创建一个空对象
2、设置原型，将对象的原型设置为函数的 prototype 对象
3、让函数的 this 指向这个对象，执行构造函数的代码
4、判断函数的返回值类型，值类型，返回创建的对象，引用类型就返回

```js
function Person(name) {
	this.name = name;
}

let p = new Person('000');
console.log(p);

function cerate(fn, ...args) {
	let obj = {};
	obj.__proto__ = fn.prototype;
	let res = fn.apply(obj, args);
	return res instanceof Object ? res : obj;
}

let h = cerate(Person, '1111');
console.log(h);
```

# for in 和 for of 的区别

for…of 遍历获取的是对象的键值，for…in 获取的是对象的键名；
for… in 会遍历对象的整个原型链，性能非常差不推荐使用，而 for … of 只遍历当前对象不会遍历原型链；
对于数组的遍历，for…in 会返回数组中所有可枚举的属性(包括原型链上可枚举的属性)，for…of 只返回数组的下标对应的属性值；
总结： for...in 循环主要是为了遍历对象而生，不适用于遍历数组；for...of 循环可以用来遍历数组、类数组对象，字符串、Set、Map 以及 Generator 对象。

正常情况下 对象(Object)没有 iterator 接口，不能用 for of 遍历。

# Promise.all 和 Promise.race 的区别的使用场景

Promise.all 可以将多个 Promise 实例包装成一个新的 Promise 实例。同时，成功和失败的返回值是不同的，成功的时候返回的是一个结果数组，而失败的时候则返回最先被 reject 失败状态的值。

Promse.race 就是赛跑的意思，意思就是说，Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。当要做一件事，超过多长时间就不做了，可以用这个方法来解决：

# ES6

Map 和 Set，引入了两种新的数据结构，分别用于存储键值对和唯一值

# 你能举出一个柯里化函数（curry function）的例子吗？它有哪些好处？

柯里化（currying）是一种模式，其中具有多个参数的函数被分解为多个函数，当被串联调用时，将一次一个地累积所有需要的参数。这种技术帮助编写函数式风格的代码，使代码更易读、紧凑。

# js 设计模式有哪些？

创建型模式，共五种：工厂方法模式、抽象工厂模式、单例模式、建造者模式、原型模式。
结构型模式，共七种：适配器模式、装饰器模式、代理模式、外观模式、桥接模式、组合模式、享元模式。
行为型模式，共十一种：策略模式、模板方法模式、观察者模式/发布订阅模式、迭代子模式、责任链模式、命令模式、备忘录模式、状态模式、访问者模式、中介者模式、解释器模式。
