import React, { useRef } from "react";

const MenuItem = ({
	href,
	className,
	label,
	setActiveMenu,
}) => {
	const ref = useRef();

	const setActive = (event) => {
		if (ref.current !== event.target) {
			return;
		}

		const className = event.target.className;
		if (className.includes("active")) {
			event.target.className = "active item";
			setActiveMenu(event.target);
		} else {
			event.target.className = "item";
		}
	};

	return (
		<a
			ref={ref}
			href={href}
			className={className}
			onClick={(e) => {
				setActive(e);
			}}
		>
			{label}
		</a>
	);
};

export default MenuItem;
