import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
	const [winLocPath, setwinLocPath] = useState(
		window.location.pathname
	);

	useEffect(() => {
		const handleLinkClickEvent = (event) => {
			setwinLocPath(window.location.pathname);
		};
		console.log("ADD listener LINK CLICK");
		window.addEventListener(
			"LINK_CLICK",
			handleLinkClickEvent,
			false
		);
	}, []); // No need to return cleanup because effect runs one time only.

	return path === winLocPath
		? (() => {
				console.log("Rendering Children for path ", path);
				return children;
		  })()
		: null;
};

export default Route;
