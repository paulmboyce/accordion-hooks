import Axios from "axios";

const Convert = async (text, language) => {
	// SEE: https://cloud.google.com/translate/docs/reference/rest/v2/translate
	return Axios.post(
		"https://translation.googleapis.com/language/translate/v2",
		{},
		{
			params: {
				q: text,
				// SEE: https://cloud.google.com/translate/docs/languages
				target: language,
				format: "text",
				// NOTE: key from Stephen Grider udemy course
				// (https://www.udemy.com/course/react-redux/learn/lecture/20788918#overview)
				// (only works for localhost:3000)
				key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
			},
		}
	)
		.then(function (response) {
			return response
				.data.data.translations[0].translatedText;
		})
		.catch(function (error) {
			console.log(error);
			return "OOPS - error accessing Translate API";
		});
};

export default Convert;
