import React, { useState, useEffect } from "react";
import Axios from "axios";

const SearchField = ({ setResults }) => {
	const [term, setTerm] = useState("cats");
	const [shadowTerm, setShadowTerm] = useState(term);

	useEffect(() => {
		let id = window.setTimeout(() => {
			setShadowTerm(term);
		}, 700);
		return () => {
			window.clearTimeout(id);
		};
	}, [term]);

	useEffect(() => {
		const doSearch = async () => {
			const { data } = await Axios.get(
				"https://en.wikipedia.org/w/api.php",
				{
					params: {
						action: "query",
						list: "search",
						srsearch: shadowTerm,
						format: "json",
						origin: "*",
					},
				}
			);
			if (data.query) {
				setResults(data.query.search);
			}
		};

		if (shadowTerm) {
			doSearch();
		}
	}, [shadowTerm, setResults]);

	return (
		<div>
			<h1>Search</h1>
			<div className='ui form'>
				<div className='field'>
					<label>Search Wikipedia:</label>
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
