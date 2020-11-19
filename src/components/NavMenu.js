import React, { useState } from "react";
import MenuItem from "./MenuItem";

const items = [
	{ href: "#", className: "item", label: "Home" },
	{ href: "#search", className: "item", label: "Search" },
	{
		href: "#dropdown",
		className: "item",
		label: "Dropdown",
	},
	{
		href: "#translate",
		className: "item",
		label: "Translate",
	},
];

const NavMenu = ({ onNavigate }) => {
	const [selectedIndex, setSelectedIndex] = useState(0);

	const onItemSelected = (index) => {
		setSelectedIndex(index);
		onNavigate(window.location.hash);
	};

	const renderMenuItems = () => {
		return items.map((item, index) => {
			return (
				<MenuItem
					key={index}
					index={index}
					href={item.href}
					className={
						index === selectedIndex ? "item active" : "item"
					}
					label={item.label}
					onItemSelected={onItemSelected}
				/>
			);
		});
	};
	return (
		<div>
			<div className='ui secondary pointing menu'>
				{renderMenuItems()}
			</div>
			<br />
		</div>
	);
};

export default NavMenu;
