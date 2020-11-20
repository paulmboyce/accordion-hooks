import React from "react";
import Link from "./Link";

const MenuItem = ({
	href,
	className,
	label,
	index,
	onItemSelected,
}) => {
	const setActiveMenuItem = (event) => {
		onItemSelected(
			parseInt(event.target.getAttribute("index"))
		);
	};

	return (
		<Link
			index={index}
			href={href}
			className={className}
			onClickLink={setActiveMenuItem}
		>
			{label}
		</Link>
	);
};

export default MenuItem;
