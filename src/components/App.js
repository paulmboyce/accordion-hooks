import React from "react";
import Accordion from "./Accordion";
import Search from "./Search";

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

const App = () => {
	return (
		<div
			className='ui container'
			style={{ marginTop: "40px" }}
		>
			<h1>So good to be back coding :)</h1>
			<Search />
			<hr />
			<br />

			<Accordion items={items} />
		</div>
	);
};

export default App;
