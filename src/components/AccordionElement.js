import React from "react";

const AccordionElement = ({
	item,
	index,
	onElementClicked,
	active,
}) => {
	return (
		<React.Fragment>
			<div onClick={() => onElementClicked(index)}>
				<div className={`title ${active}`}>
					<i className='dropdown icon'></i>
					{item.title}
				</div>
				<div className={`content ${active}`}>
					<p>{item.content}</p>
				</div>
			</div>
		</React.Fragment>
	);
};

export default AccordionElement;
