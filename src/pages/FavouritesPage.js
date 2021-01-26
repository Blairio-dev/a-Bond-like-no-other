import React from 'react';
import PropTypes from 'prop-types';
import { MoviesGallery, PageShell } from '../components';
import { PageHeading } from '../typography';

const FavouritesPage = ({
	closeOnClickHandler,
	favouriteMovieTitles,
	isOpen,
	previewOnClickHandler,
	selectedMovieDetails,
	toggleFavouriteMovieOnClick,
}) => (
	<PageShell>
		<PageHeading text="Favourites" />
		<MoviesGallery
			closeOnClickHandler={closeOnClickHandler}
			favouriteMovieTitles={favouriteMovieTitles}
			isOpen={isOpen}
			previewOnClickHandler={previewOnClickHandler}
			selectedMovieDetails={selectedMovieDetails}
			showOnlyFavourites
			toggleFavouriteMovieOnClick={toggleFavouriteMovieOnClick}
		/>
	</PageShell>
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
