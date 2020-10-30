import React from "react";
import AccordionElement from "./AccordionElement";

class Accordion extends React.Component {
	state = { activeIndex: 0 };

	onElementClicked = (index) => {
		this.setState({ activeIndex: index });
	};

	getActiveStatus = (index) => {
		return index === this.state.activeIndex ? "active" : "";
	};

	renderElements = () => {
		return this.props.items.map((item, index) => {
			return (
				<AccordionElement
					key={index}
					item={item}
					index={index}
					onElementClicked={this.onElementClicked}
					active={this.getActiveStatus(index)}
				/>
			);
		});
	};

	render = () => {
		return (
			<div className='ui styled accordion'>
				{this.renderElements()}
			</div>
		);
	};
}

export default Accordion;
