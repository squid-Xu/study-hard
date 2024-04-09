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
	title: string;
	content: string;
	aa?: string;
	constructor(title: string, content: string) {
		this.title = title;
		this.content = content;
	}
}

const myArticle = new Article('你好', '测试 ');
