import React from "react";

const AccordionElement = ({
	item,
	index,
	onElementClicked,
	active,
}) => {
	return (
		<React.Fragment>
			<div
				className={`title ${active}`}
				onClick={() => onElementClicked(index)}
			>
				<i className='dropdown icon'></i>
				{item.title}
			</div>
			<div className={`content ${active}`}>
				<p>{item.content}</p>
			</div>
		</React.Fragment>
	);
};

export default AccordionElement;
