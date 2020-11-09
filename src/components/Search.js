import React, { useState, useEffect } from "react";
import wpSearch from "../apis/Wikipedia";
import SearchField from "./SearchField";
import DisplayResults from "./DisplayResults";

const Search = () => {
	const initTerm = "cats";
	const [results, setResults] = useState([]);
	const [term, setTerm] = useState(initTerm);

	useEffect(() => {
		const doSearch = () => {
			console.log("Search for ", term);
			wpSearch(term).then((result) => {
				console.log("FOUND: ", result.length);
				setResults(result);
			});
		};

		doSearch();
	}, [term, setResults]);

	return (
		<div>
			<h1>Search</h1>
			<SearchField
				setResults={setResults}
				initTerm={initTerm}
				setSearchTerm={setTerm}
				typingDelay='700'
				title='Search Wikipedia'
			/>
			<DisplayResults
				results={results}
				linkUrl='http://en.wikipedia.org/?curid'
			/>
		</div>
	);
};

export default Search;
