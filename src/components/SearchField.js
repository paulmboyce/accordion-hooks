import React, { useState, useEffect } from "react";

const SearchField = ({
	initTerm,
	setSearchTerm,
	typingDelay,
	title,
}) => {
	const [term, setTerm] = useState(initTerm);

	useEffect(() => {
		let id = window.setTimeout(() => {
			setSearchTerm(term);
		}, typingDelay);
		return () => {
			window.clearTimeout(id);
		};
	}, [term, setSearchTerm, typingDelay]);

	return (
		<div>
			<div className='ui form'>
				<div className='field'>
					<label>{`${title}`}</label>
					<input
						className='input'
						value={term}
						onChange={(e) => {
							setTerm(e.target.value);
						}}
					></input>
				</div>
			</div>
		</div>
	);
};

export default SearchField;
