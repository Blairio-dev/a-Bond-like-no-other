const updateSelectedMovie = (selectedMovie) =>
	sessionStorage.setItem('Bond-selected-movie', JSON.stringify(selectedMovie));

export { updateSelectedMovie };
