import React, { useState, useEffect } from "react";
import SearchField from "./SearchField";
import Dropdown from "./Dropdown";
import convert from "../apis/Convert";

const languages = [
	{ value: "es", label: "Spanish" },
	{ value: "pt", label: "Portuguese" },
	{ value: "ja", label: "Japanese" },
	{ value: "af", label: "Africaans" },
	{ value: "ar", label: "Arabic" },
	{ value: "hi", label: "Hindi" },
	{ value: "zh-CN", label: "Chinese (Simple)" },
	{ value: "zh-TW", label: "Chinese (Traditional)" },
];

const Translate = () => {
	const [text, setText] = useState("Hi there");
	const [language, setLanguage] = useState(languages[0]);
	const [translated, setTranslated] = useState("Hola");

	useEffect(() => {
		const WAIT_FOR_STOP_TYPING = 700;

		// Do work async
		const runAsync = async () => {
			setTranslated("Translating...");
			const got = await convert(text, language.value);
			setTranslated(got);
		};

		// Respond when user stops typing
		const throttle = (delay) => {
			return window.setTimeout(runAsync, delay);
		};
		const id = throttle(WAIT_FOR_STOP_TYPING);

		// Prevent old response
		const cleanup = () => {
			clearTimeout(id);
		};

		// Send to React (to call next render)
		return cleanup;
	}, [text, language]);

	return (
		<div className='ui segment'>
			<h1>Translate</h1>
			<SearchField
				initTerm={text}
				setSearchTerm={setText}
				typingDelay='0'
				title='What do you want to translate?'
			/>
			<br />
			<Dropdown
				options={languages}
				onSelectionChange={setLanguage}
			></Dropdown>
			<div className='ui segment'>
				<h3>Output:</h3>
				<p>{translated}</p>
			</div>
		</div>
	);
};

export default Translate;
