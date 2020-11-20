import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
	const [winLocPath, setwinLocPath] = useState(
		window.location.pathname
	);

	useEffect(() => {
		window.addEventListener(
			"LINK_CLICK",
			(event) => {
				setwinLocPath(window.location.pathname);
			},
			false
		);
	}, []);

	return path === winLocPath ? children : null;
};

export default Route;
