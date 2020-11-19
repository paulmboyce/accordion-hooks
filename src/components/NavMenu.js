import React, { useState } from "react";
import MenuItem from "./MenuItem";
const NavMenu = () => {
	const [activeMenu, setActiveMenu] = useState(null);

	return (
		<div>
			<div className='ui secondary pointing menu'>
				<MenuItem
					href='/'
					className='item'
					label='Home'
					setActiveMenu={setActiveMenu}
				/>

				<MenuItem
					href='/search'
					className='item'
					label='Search'
					setActiveMenu={setActiveMenu}
				/>
				<MenuItem
					href='/dropdown'
					className='item'
					label='Dropdown'
					setActiveMenu={setActiveMenu}
				/>
				<MenuItem
					href='/translate'
					className='item'
					label='Translate'
					setActiveMenu={setActiveMenu}
				/>
			</div>
			<br />
		</div>
	);
};

export default NavMenu;
