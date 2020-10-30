import React, { useState } from "react";
import AccordionElement from "./AccordionElement";

const Accordion = (props) => {

	const [ activeIndex, setActiveIndex] = useState(0); 

	const onElementClicked = (index) => {
		setActiveIndex( index );
	}

	const getActiveStatus = (index) => {
		return index === activeIndex ? "active" : "";
	}

	const renderElements = () => {
		return props.items.map((item, index) => {
			return (
				<AccordionElement
					key={index}
					item={item}
					index={index}
					onElementClicked={onElementClicked}
					active={getActiveStatus(index)}
				/>
			);
		});
	}

	return (
			<div className='ui styled accordion'>
				{renderElements()}
			</div>
		);
}

export default Accordion;
