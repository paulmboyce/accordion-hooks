import React from "react";

const Link = ({
	href,
	className,
	children,
	index,
	onClickLink,
}) => {
	return (
		<a
			index={index}
			href={href}
			className={className}
			onClick={(e) => {
				e.preventDefault();
				window.history.pushState({}, "", href);
				onClickLink(e);

				const event = new Event("LINK_CLICK");
				window.dispatchEvent(event);
			}}
		>
			{children}
		</a>
	);
};

export default Link;
