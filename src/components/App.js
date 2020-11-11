import React, { useState, useEffect } from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";

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

const optionsSize = [
	{ value: "", label: "-- Please choose a size: --" },
	{ value: "sm", label: "Teeny Small" },
	{ value: "md", label: "Midroad Medium" },
	{ value: "lg", label: "Big Style Large" },
];

const App = () => {
	const initColor = 1;
	const [color, setColor] = useState(options[initColor]);
	const [size, setSize] = useState(optionsSize[0]);
	const [show, setShow] = useState(true);

	console.log("RENDER APP");
	useEffect(() => {
		console.log(
			`APP: selected color: ${JSON.stringify(color)}`
		);
	}, [color]);

	return (
		<div
			className='ui container'
			style={{ marginTop: "40px" }}
		>
			<h1>So good to be back coding :)</h1>
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

			<hr />
			<Search />
			<hr />
			<br />

			<Accordion items={items} />
		</div>
	);
};

export default App;
