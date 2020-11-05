import React, { useState, useEffect } from "react";
import Axios from "axios";

const Search = () => {
	const [term, setTerm] = useState("cats");
	const [pageId, setPageId] = useState("");
	const [results, setResults] = useState([]);
	const [fullUrl, setFullUrl] = useState("");

	console.log("----> RENDER <---------------------");
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

	useEffect(() => {
		const getPage = async () => {
			const { data } = await Axios.get(
				"https://en.wikipedia.org/w/api.php",
				{
					params: {
						action: "query",
						prop: "info",
						pageids: pageId,
						inprop: "url",
						format: "json",
						origin: "*",
					},
				}
			);
			console.log(data.query.pages[pageId].fullurl);
			setFullUrl(data.query.pages[pageId].fullurl);
			console.log(pageId);
		};

		if (pageId !== "") {
			getPage();
			setPageId(""); // Important to reset these to be abel to click same item.
		}
	}, [pageId]);

	useEffect(() => {
		if (fullUrl !== "") {
			console.log(`About to open: ${fullUrl}..`);
			window.open(fullUrl);
			setFullUrl("");
		}
	}, [fullUrl]);

	const renderResults = results.map((result) => {
		return (
			<div className='item' key={result.pageid}>
				<div className='right floated content'>
					<div
						onClick={(e) => {
							setPageId(result.pageid);
						}}
						className='ui button blue'
					>
						Wikipedia
					</div>
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
