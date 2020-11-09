import Axios from "axios";

async function doSearch(term) {
	let results = [];
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
		results = data.query.search;
	}
	return results;
}

export default doSearch;
