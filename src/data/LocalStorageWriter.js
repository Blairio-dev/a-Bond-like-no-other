const updateCustomMovies = (customMovies) => localStorage.setItem('Bond-custom-movies', JSON.stringify(customMovies));

const updateFavouriteMovies = (favouriteMovies) =>
	localStorage.setItem('Bond-favourite-movies', JSON.stringify(favouriteMovies));

export { updateCustomMovies, updateFavouriteMovies };
