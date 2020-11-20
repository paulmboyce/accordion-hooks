const Route = ({ path, children }) => {
	return path === window.location.pathname ? children : null;
};

export default Route;
