const updateFavouriteMovies = (favouriteMovies) =>
	localStorage.setItem('Bond-favourite-movies', JSON.stringify(favouriteMovies));

export { updateFavouriteMovies };
