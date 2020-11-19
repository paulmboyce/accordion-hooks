import React, { useState } from "react";
import MenuItem from "./MenuItem";

const items = [
	{ href: "#", label: "Home" },
	{ href: "#search", label: "Search" },
	{ href: "#dropdown", label: "Dropdown" },
	{ href: "#translate", label: "Translate" },
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
						"item" +
						(index === selectedIndex ? " active" : "")
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
