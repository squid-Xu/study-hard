// import logo from './logo.svg';
// import './App.css';

import { Fragment, useState } from 'react';

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
		</div>
	);
}

export default App;
