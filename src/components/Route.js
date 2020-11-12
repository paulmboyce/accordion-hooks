const Route = ({ path, component }) => {
	return path === window.location.pathname
		? component
		: null;
};

export default Route;
