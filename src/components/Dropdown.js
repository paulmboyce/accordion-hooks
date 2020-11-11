import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, onSelectionChange, init }) => {
	const ref = useRef();
	init = !init ? 0 : init;
	const [index, setIndex] = useState(init);

	useEffect(() => {
		document.body.addEventListener("click", (event) => {
			if (ref.current.contains(event.target)) {
				return;
			}
			ref.current.style.color = "red";
		});
	}, []);

	useEffect(() => {
		onSelectionChange(options[index]);
	}, [index, onSelectionChange, options]);

	const renderOptions = options.map(
		({ label, value }, idx) => {
			return (
				<option key={value} value={idx}>
					{label}
				</option>
			);
		}
	);
	return (
		<select
			ref={ref}
			className='ui selection fluid dropdown'
			value={index}
			onChange={(e) => {
				setIndex(parseInt(e.target.value));
			}}
		>
			{renderOptions}
		</select>
	);
};

export default Dropdown;
