const checkSelectedMovie = () =>
	sessionStorage.getItem('Bond-selected-movie') ? JSON.parse(sessionStorage.getItem('Bond-selected-movie')) : {};

export { checkSelectedMovie };
