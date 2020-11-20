import React, { useState } from "react";
import MenuItem from "./MenuItem";

const NavMenu = ({ items }) => {
	const [selectedIndex, setSelectedIndex] = useState(0);

	const onItemSelected = (index) => {
		setSelectedIndex(index);
	};

	const renderMenuItems = () => {
		return items.map(({ href, label }, index) => {
			return (
				<MenuItem
					key={index}
					index={index}
					href={href}
					className={
						"item" +
						(index === selectedIndex ? " active" : "")
					}
					label={label}
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
