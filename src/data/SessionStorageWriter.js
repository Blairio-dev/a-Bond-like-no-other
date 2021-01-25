const updateFavouriteMovies = (favouriteMovies) =>
	sessionStorage.setItem('Bond-favourite-movies', JSON.stringify(favouriteMovies));
const updateSelectedMovie = (selectedMovie) =>
	sessionStorage.setItem('Bond-selected-movie', JSON.stringify(selectedMovie));

export { updateFavouriteMovies, updateSelectedMovie };
