import React, { useRef } from "react";

const MenuItem = ({
	href,
	className,
	label,
	index,
	onItemSelected,
}) => {
	const _ref = useRef();

	const setActive = (event) => {
		if (_ref.current !== event.target) {
			return;
		}
		onItemSelected(
			parseInt(event.target.getAttribute("index"))
		);
	};

	return (
		<a
			ref={_ref}
			index={index}
			href={href}
			className={className}
			onClick={(e) => {
				console.log("Force hash on click event");
				window.location.hash = href;
				setActive(e);
			}}
		>
			{label}
		</a>
	);
};

export default MenuItem;
