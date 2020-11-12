import React, { useState, useEffect } from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
import MyRouter from "./MyRouter";

const items = [
	{ title: "What is React?", content: "A way to get paid" },
	{
		title: "What is coding?",
		content: "A way to be creative",
	},
	{
		title: "Why React?",
		content: "Because it is popular and effective",
	},
];
const options = [
	{ value: "red", label: "Red Face" },
	{ value: "blue", label: "Blue Fist" },
	{ value: "green", label: "Green Eyes" },
];

const App = () => {
	const initColor = 1;
	const [color, setColor] = useState(options[initColor]);
	const [show, setShow] = useState(true);
	const route = window.location.pathname;
	console.log(`ROUTE is ${route}`);

	useEffect(() => {
		console.log(
			`APP: selected color: ${JSON.stringify(color)}`
		);
	}, [color]);

	const renderAccordion = () => {
		return (
			<MyRouter
				route='/'
				component={<Accordion items={items} />}
			/>
		);
	};

	const renderTranslate = () => {
		return (
			<MyRouter
				route='/translate'
				component={<Translate />}
			/>
		);
	};

	const renderSearch = () => {
		return (
			<MyRouter route='/search' component={<Search />} />
		);
	};

	const renderDropdown = () => {
		return (
			<MyRouter
				route='/dropdown'
				component={
					<div>
						<button
							className='ui button grey'
							onClick={(evt) => {
								setShow(!show);
							}}
						>
							Toggle
						</button>

						{show ? (
							<Dropdown
								options={options}
								onSelectionChange={setColor}
								init={initColor}
							/>
						) : null}
					</div>
				}
			/>
		);
	};

	return (
		<div className='ui container'>
			<h1>So good to be back coding :)</h1>
			<hr />
			{renderTranslate()}
			{renderDropdown()}
			{renderSearch()}
			{renderAccordion()}
		</div>
	);
};

export default App;
