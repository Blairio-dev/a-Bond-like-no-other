const checkCustomMovies = () =>
	localStorage.getItem('Bond-custom-movies') ? JSON.parse(localStorage.getItem('Bond-custom-movies')) : [];

const checkFavouriteMovies = () =>
	localStorage.getItem('Bond-favourite-movies') ? JSON.parse(localStorage.getItem('Bond-favourite-movies')) : [];

export { checkCustomMovies, checkFavouriteMovies };
