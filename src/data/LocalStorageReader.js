const checkFavouriteMovies = () =>
	localStorage.getItem('Bond-favourite-movies') ? JSON.parse(localStorage.getItem('Bond-favourite-movies')) : [];

export { checkFavouriteMovies };
