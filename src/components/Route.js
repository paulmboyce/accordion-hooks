const Route = ({ path, children }) => {
	return path === window.location.hash ? children : null;
};

export default Route;
