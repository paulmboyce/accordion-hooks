import React, { useState } from "react";
import SearchField from "./SearchField";
import DisplayResults from "./DisplayResults";

const Search = () => {
	const [results, setResults] = useState([]);

	return (
		<div>
			<SearchField setResults={setResults} />
			<DisplayResults results={results} />
		</div>
	);
};

export default Search;
