import React from "react";
import Link from "./Link";

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

	return (
		<Link
			index={index}
			href={href}
			className={className}
			onNavigate={setActive}
		>
			{label}
		</Link>
	);
};

export default MenuItem;
