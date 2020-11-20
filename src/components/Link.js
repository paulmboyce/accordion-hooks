import React from "react";

const Link = ({
	href,
	className,
	children,
	index,
	onNavigate,
}) => {
	return (
		<a
			index={index}
			href={href}
			className={className}
			onClick={(e) => {
				e.preventDefault();
				window.history.pushState({}, "", href);
				onNavigate(e);
			}}
		>
			{children}
		</a>
	);
};

export default Link;
