//类型推断
let a = 'aa';
a = 'ss';

//类型断言

let arr = [1, 2, 3];

let result = arr.find(v => v > 2) as number;

let sum = result * 5;

//基础类型

let b: number = 1;
let c: boolean = false;

//联合类型

let d: number | string = 'false';

//数组

let arr1: number[] = [1, 2, 3];

let arr2: Array<string> = ['a', 'b', 'c'];

//元组

let e: [number, string, boolean?] = [1, 'w', false];

//枚举

enum myType {
	'A',
	'B',
	'C',
}

myType.A;
myType[0];

//函数

function sum1(a: number, b: string): void {}
sum1(1, '2');

//接口

interface objType {
	name: string;
	age: number;
}

let obj: objType = {
	name: 'ss',
	age: 11,
};

//类型别名
type myType1 = number | string;
let f: myType1 = 'aaa';

//泛型

function sum2<T>(a: T, b: T): T[] {
	return [a, b];
}

sum2<number>(1, 2);
