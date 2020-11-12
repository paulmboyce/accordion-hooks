const MyRouter = ({ route, component }) => {
	return route === window.location.pathname
		? component
		: null;
};

export default MyRouter;
