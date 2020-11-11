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
		const doConvert = async () => {
			setTranslated("Translating...");
			const got = await convert(text, language.value);
			setTranslated(got);
		};

		// Run async code with timer delay to allow for typing
		const timeoutId = window.setTimeout(doConvert, 1000);

		const cleanupPendingTimer = () => {
			clearTimeout(timeoutId);
		};

		// Release last timer
		return cleanupPendingTimer;
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
