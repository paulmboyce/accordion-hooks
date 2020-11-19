import React from "react";

const Link = ({
	href,
	className,
	children,
	index,
	onNavigate,
}) => {
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
				onNavigate(e);
			}}
		>
			{children}
		</a>
	);
};

export default Link;
