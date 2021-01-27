import React from 'react';
import PropTypes from 'prop-types';
import { MoviesGallery, PageShell } from '../components';
import { PageHeading } from '../typography';

const FavouritesPage = ({
	closePreviewOnClickHandler,
	favouriteMovieTitles,
	detailsModalIsOpen,
	moviesList,
	openPreviewOnClickHandler,
	selectedMovieDetails,
	toggleFavouriteMovieOnClick,
}) => (
	<PageShell>
		<PageHeading text="Favourites" />
		<MoviesGallery
			closePreviewOnClickHandler={closePreviewOnClickHandler}
			favouriteMovieTitles={favouriteMovieTitles}
			detailsModalIsOpen={detailsModalIsOpen}
			moviesList={moviesList}
			openPreviewOnClickHandler={openPreviewOnClickHandler}
			selectedMovieDetails={selectedMovieDetails}
			showOnlyFavourites
			toggleFavouriteMovieOnClick={toggleFavouriteMovieOnClick}
		/>
	</PageShell>
);

FavouritesPage.propTypes = {
	closePreviewOnClickHandler: PropTypes.func.isRequired,
	favouriteMovieTitles: PropTypes.array.isRequired,
	detailsModalIsOpen: PropTypes.bool.isRequired,
	moviesList: PropTypes.array.isRequired,
	openPreviewOnClickHandler: PropTypes.func.isRequired,
	selectedMovieDetails: PropTypes.object.isRequired,
	toggleFavouriteMovieOnClick: PropTypes.func.isRequired,
};

export { FavouritesPage };
