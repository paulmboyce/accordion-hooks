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
	const [input, setInput] = useState("Hi there");
	const [text, setText] = useState(input);
	const [language, setLanguage] = useState(languages[0]);
	const [translated, setTranslated] = useState("");

	useEffect(() => {
		const throttleTextInput = (delay) => {
			return window.setTimeout(() => {
				setText(input);
			}, delay);
		};
		const id = throttleTextInput(1000);

		const resetPrevious = () => {
			clearTimeout(id);
		};

		return resetPrevious;
	}, [input]);

	useEffect(() => {
		const runAsync = async () => {
			setTranslated("Translating...");
			const got = await convert(text, language.value);
			setTranslated(got);
		};
		runAsync();
	}, [text, language]);

	return (
		<div className='ui segment'>
			<h1>Translate</h1>
			<SearchField
				initTerm={input}
				setSearchTerm={setInput}
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
