import Axios from "axios";

const Convert = async (text, language) => {
	return Axios.post(
		"https://translation.googleapis.com/language/translate/v2",
		{},
		{
			params: {
				q: text,
				target: language,
				format: "text",
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
