import React from 'react';
import PropTypes from 'prop-types';
import { DetailsModal, PreviewPanel } from '.';
import movies from '../data/movies.json';
import styled from '@emotion/styled';

const StyledGrid = styled('div')`
	display: flex;
	flex-wrap: wrap;
`;

const MoviesGallery = ({
	closePreviewOnClickHandler,
	favouriteMovieTitles,
	detailsModalIsOpen,
	openPreviewOnClickHandler,
	selectedMovieDetails,
	showOnlyFavourites,
	toggleFavouriteMovieOnClick,
}) => {
	const moviesList = showOnlyFavourites
		? movies['Bond Films'].filter((movie) => favouriteMovieTitles.includes(movie.Film))
		: [...movies['Bond Films']];
	return (
		<StyledGrid>
			{detailsModalIsOpen ? document.body.classList.add('modal-open') : document.body.classList.remove('modal-open')}
			{moviesList.map((movie) => (
				<div key={movie.Film + movie['UK release date']}>
					<PreviewPanel
						actorName={movie['Bond Actor']}
						imageUrl={movie.ImageURL}
						movieName={movie.Film}
						onClick={() => openPreviewOnClickHandler(movie)}
						ukReleaseDate={movie['UK release date']}
					/>
				</div>
			))}
			{detailsModalIsOpen && (
				<DetailsModal
					closeOnClick={() => closePreviewOnClickHandler()}
					favouriteMovieTitles={favouriteMovieTitles}
					isOpen={detailsModalIsOpen}
					selectedMovieDetails={selectedMovieDetails}
					toggleFavouriteMovieOnClick={toggleFavouriteMovieOnClick}
				/>
			)}
		</StyledGrid>
	);
};

MoviesGallery.propTypes = {
	closePreviewOnClickHandler: PropTypes.func.isRequired,
	favouriteMovieTitles: PropTypes.array.isRequired,
	detailsModalIsOpen: PropTypes.bool.isRequired,
	openPreviewOnClickHandler: PropTypes.func.isRequired,
	selectedMovieDetails: PropTypes.object.isRequired,
	showOnlyFavourites: PropTypes.bool.isRequired,
	toggleFavouriteMovieOnClick: PropTypes.func.isRequired,
};

MoviesGallery.defaultProps = {
	showOnlyFavourites: false,
};

export { MoviesGallery };
