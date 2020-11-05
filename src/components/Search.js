import React, { useState, useEffect } from "react";
import Axios from "axios";

const Search = () => {
	const [term, setTerm] = useState("cats");
	const [results, setResults] = useState([]);

	useEffect(() => {
		const doSearch = async () => {
			const { data } = await Axios.get(
				"https://en.wikipedia.org/w/api.php",
				{
					params: {
						action: "query",
						list: "search",
						srsearch: term,
						format: "json",
						origin: "*",
					},
				}
			);
			if (data.query) {
				setResults(data.query.search);
			}
		};
		doSearch();
	}, [term]);

	const renderResults = results.map((result) => {
		return (
			<div className='item' key={result.pageid}>
				<div className='right floated content'>
					<a
						href={`http://en.wikipedia.org/?curid=${result.pageid}`}
						// eslint-disable-next-line react/jsx-no-target-blank
						target='_blank'
						className='ui button blue'
					>
						Wikipedia
					</a>
				</div>
				<div className='content'>
					<div className='header'>{result.title}</div>
					<div className='description'>
						<span
							dangerouslySetInnerHTML={{
								__html: result.snippet,
							}}
						></span>
					</div>
				</div>
			</div>
		);
	});

	return (
		<div>
			<h1>Search</h1>
			<div className='ui form'>
				<div className='field'>
					<label>Search Wikipedia:</label>
					<input
						className='input'
						value={term}
						onChange={(e) => setTerm(e.target.value)}
					></input>
				</div>
			</div>
			<div className='ui middle aligned divided list'>
				{renderResults}
			</div>
		</div>
	);
};

export default Search;
