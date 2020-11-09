import Axios from "axios";

function doSearch(term) {
	let results = [];
	return Axios.get("https://en.wikipedia.org/w/api.php", {
		params: {
			action: "query",
			list: "search",
			srsearch: term,
			format: "json",
			origin: "*",
		},
	}).then(({ data }) => {
		if (data.query) {
			results = data.query.search;
		}
		return results;
	});
}

export default doSearch;
