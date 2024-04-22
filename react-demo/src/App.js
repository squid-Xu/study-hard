import logo from './logo.svg';
// import './App.css';

import { Fragment, useState } from 'react';

function Article({ title, content }) {
	return (
		<div>
			<h1>{title}</h1>
			<p>{content}</p>
		</div>
	);
}

function List({ title, children }) {
	return (
		<div>
			<h1>{title}</h1>
			<ul>{children}</ul>
		</div>
	);
}

function Detail({ content, onActive }) {
	const [flag, setFlag] = useState(true);
	function handleDetail() {
		setFlag(!flag);
		onActive(flag);
	}
	return (
		<div>
			<button onClick={handleDetail}>按钮</button>
			<p style={{ display: flag ? 'block' : 'none' }}>{content}</p>
		</div>
	);
}

function App() {
	const a = 1;
	const b = 2;
	const flag = false;
	let element = '';
	if (flag) {
		element = <span>11</span>;
	} else {
		element = <p>22</p>;
	}

	const list = ['张三', '李四', '王五'];

	const listContent = list.map((item, index) => (
		<Fragment key={index}>
			<li>{item}</li>
			<p>--------------</p>
		</Fragment>
	));

	function handleClick(e) {
		// alert(1);
		console.log(e);
		setContent('新内容');
		setData({
			...data,
			title: '新内容',
		});

		setNames(name.reverse());
	}
	const [content, setContent] = useState('默认内容');

	const [data, setData] = useState({
		title: '默认标题',
		content: '默认文案',
	});

	const [name, setNames] = useState(['张三', '李四', '王五']);

	const listDom = name.map((item, index) => <li key={index}>{item}</li>);

	const imgData = {
		className: 'abc',
		src: logo,
		style: {
			width: 200,
		},
	};

	function handleOnActive(state) {
		console.log(state);
	}

	return (
		<div className="App">
			<h1 title={b}>{a}</h1>
			{element}
			<ul>{listContent}</ul>
			<hr></hr>
			<button onClick={handleClick}>按钮</button>
			<p>{content}</p>
			<hr></hr>
			<h2 title={data.title}>{data.content}</h2>
			<hr></hr>
			<ul>{listDom}</ul>
			<hr></hr>
			<img {...imgData} alt=""></img>
			<hr></hr>
			<Article title="标题1" content="内容1"></Article>
			<Article title="标题2" content="内容2"></Article>
			<Article title="标题3" content="内容3"></Article>
			<hr></hr>
			<List title="标题">
				<li>1</li>
				<li>2</li>
				<li>3</li>
			</List>
			<hr></hr>
			<h2>父子传值</h2>
			<Detail content="内容" onActive={handleOnActive}></Detail>
		</div>
	);
}

export default App;
