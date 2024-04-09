//函数重载

function hello(name: string): string;
function hello(age: number): string;
function hello(value: number | string): string {
	if (typeof value === 'string') {
		return 'my name is: ' + value;
	} else if (typeof value === 'number') {
		return 'my age is: ' + value;
	} else {
		return 'illegal';
	}
}

//接口继承

interface parent {
	name: string;
	age: number;
}

interface child extends parent {
	a: boolean;
}

const myobj: child = {
	name: 'a',
	age: 11,
	a: false,
};

//类
class Article {
	public title: string;
	public content: string;
	public a?: string;
	public b = 100;

	private d?: number; //私有属性,只能当前类内部使用

	protected e?: string; //受保护的,只能当前类和子类中使用

	static f: number; //静态属性，只能设置给类本身，而不是类的实例

	private static g: string; //私有静态属性
	private static readonly h: string = '88888'; //私有静态只读属性

	constructor(title: string, content: string) {
		this.title = title;
		this.content = content;
		Article.g = '111';
	}
}

const myArticle = new Article('你好', '测试 ');
Article.f = 4444;

class B extends Article {
	constructor(title: string, content: string) {
		super(title, content);
		this.e = '999';
	}
}

//存取器

class User {
	private _password: string = '';
	get password(): string {
		return '*******';
	}
	set password(new_password: string) {
		this._password = new_password;
	}
}

const user = new User();

//抽象类

abstract class Animal {
	name: string = '11';
	abstract age: number;
	abstract say(): void;
	move() {
		console.log('000');
	}
}

class cat extends Animal {
	age: number = 20;
	say() {
		console.log('---');
	}
}

//类实现接口
interface A {
	a: string;
	get sound(): string;
	make(): void;
}
class A1 implements A {
	get sound(): string {
		throw new Error('Method not implemented.');
	}
	make(): void {
		throw new Error('Method not implemented.');
	}
	a: string = '000';
}

//类与泛型结合

class myClass<T> {
	public value: T;
	constructor(value: T) {
		this.value = value;
	}
	do() {
		console.log('处理数据', this.value);
	}
}

const aa = new myClass<number>(2);
