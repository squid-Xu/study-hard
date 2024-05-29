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

UMD 是 AMD 和 CommonJS 的一个糅合。

那就先判断是否支持 node 的模块，支持就使用 node；再判断是否支持 AMD，支持则使用 AMD 的方式加载。这就是所谓的 UMD。

## CMD 规范（公共模块定义）

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
