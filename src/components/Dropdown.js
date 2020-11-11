import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, onSelectionChange, init }) => {
	const ref = useRef();
	init = !init ? 0 : init;
	const [index, setIndex] = useState(init);

	useEffect(() => {
		onSelectionChange(options[index]);
		return () => {};
	}, [index, onSelectionChange, options]);

	useEffect(() => {
		const listener = (event) => {
			if (
				!ref.current ||
				ref.current.contains(event.target)
			) {
				return;
			}
			ref.current.style.color = "red";
		};
		document.body.addEventListener("click", listener);

		return () => {
			console.log("CLEANUP: ALWAYS REMOVE EVENT LISTENERS");
			document.body.removeEventListener("click", listener);
		};
	}, []);

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
