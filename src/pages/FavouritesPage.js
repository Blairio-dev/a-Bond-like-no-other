import React from 'react';
import PropTypes from 'prop-types';
import { MoviesGallery } from '../components';

const FavouritesPage = ({
	closeOnClickHandler,
	favouriteMovieTitles,
	isOpen,
	previewOnClickHandler,
	selectedMovieDetails,
	toggleFavouriteMovieOnClick,
}) => (
	<MoviesGallery
		closeOnClickHandler={closeOnClickHandler}
		favouriteMovieTitles={favouriteMovieTitles}
		isOpen={isOpen}
		previewOnClickHandler={previewOnClickHandler}
		selectedMovieDetails={selectedMovieDetails}
		showOnlyFavourites
		toggleFavouriteMovieOnClick={toggleFavouriteMovieOnClick}
	/>
);

FavouritesPage.propTypes = {
	closeOnClickHandler: PropTypes.func.isRequired,
	favouriteMovieTitles: PropTypes.array.isRequired,
	isOpen: PropTypes.bool.isRequired,
	previewOnClickHandler: PropTypes.func.isRequired,
	selectedMovieDetails: PropTypes.object.isRequired,
	toggleFavouriteMovieOnClick: PropTypes.func.isRequired,
};

export { FavouritesPage };
