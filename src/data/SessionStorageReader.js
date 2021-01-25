const checkFavouriteMovies = () =>
	sessionStorage.getItem('Bond-favourite-movies') ? JSON.parse(sessionStorage.getItem('Bond-favourite-movies')) : [];

const checkSelectedMovie = () =>
	sessionStorage.getItem('Bond-selected-movie') ? JSON.parse(sessionStorage.getItem('Bond-selected-movie')) : '';

export { checkFavouriteMovies, checkSelectedMovie };
