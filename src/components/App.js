import React, { useState, useEffect } from "react";
import NavMenu from "./NavMenu";
import Route from "./Route";
import Translate from "./Translate";
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

const App = () => {
	const initColor = 1;
	const [color, setColor] = useState(options[initColor]);
	const [show, setShow] = useState(true);

	useEffect(() => {
		console.log(
			`APP: selected color: ${JSON.stringify(color)}`
		);
	}, [color]);

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

	const menuItems = [
		{
			href: "/",
			label: "Home",
			component: <Accordion items={items} />,
		},
		{
			href: "/search",
			label: "Search",
			component: <Search />,
		},
		{
			href: "/dropdown",
			label: "Dropdown",
			component: renderDropdown(),
		},
		{
			href: "/translate",
			label: "Translate",
			component: <Translate />,
		},
	];

	const renderRoutes = () => {
		return menuItems.map(({ href, component }) => {
			return (
				<Route key={href} path={href}>
					{component}
				</Route>
			);
		});
	};

	return (
		<div className='ui container'>
			<h1>So good to be back coding :)</h1>
			<hr />
			<NavMenu items={menuItems} />
			{renderRoutes()}
		</div>
	);
};

export default App;
