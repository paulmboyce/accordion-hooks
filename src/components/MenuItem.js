import React from "react";

const MenuItem = ({
	href,
	className,
	label,
	index,
	onItemSelected,
}) => {
	const setActive = (event) => {
		onItemSelected(
			parseInt(event.target.getAttribute("index"))
		);
	};

	const forceHashBeforeReRender = (hash) => {
		window.location.hash = hash;
	};

	return (
		<a
			index={index}
			href={href}
			className={className}
			onClick={(e) => {
				forceHashBeforeReRender(href);
				setActive(e);
			}}
		>
			{label}
		</a>
	);
};

export default MenuItem;
