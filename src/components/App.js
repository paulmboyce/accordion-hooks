import React, { useState, useEffect } from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
import Route from "./Route";
import NavMenu from "./NavMenu";

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
	const [refresh, setRefresh] = useState(false);
	const route = window.location.hash;

	console.log("Rendering APP...");
	console.log(`ROUTE is ${route}`);

	useEffect(() => {
		console.log(
			`APP: selected color: ${JSON.stringify(color)}`
		);
	}, [color]);

	useEffect(() => {
		console.log("REFRESH is: ", refresh);
	}, [refresh]);

	const renderDropdown = () => {
		return (
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
		);
	};

	return (
		<div className='ui container'>
			<h1>So good to be back coding :)</h1>
			<hr />
			<NavMenu refresh={refresh} onRefresh={setRefresh} />

			<Route path='#translate'>
				<Translate />
			</Route>

			<Route path='#search'>
				<Search />
			</Route>

			<Route path=''>
				<Accordion items={items} />
			</Route>

			<Route path='#dropdown'>{renderDropdown()}</Route>
		</div>
	);
};

export default App;
