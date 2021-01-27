import React from 'react';
import PropTypes from 'prop-types';
import { DetailsModal, PreviewPanel } from '.';
import styled from '@emotion/styled';

const StyledGrid = styled('div')`
	display: flex;
	flex-wrap: wrap;
`;

const MoviesGallery = ({
	closePreviewOnClickHandler,
	favouriteMovieTitles,
	createModalIsOpen,
	detailsModalIsOpen,
	moviesList,
	openPreviewOnClickHandler,
	selectedMovieDetails,
	showOnlyFavourites,
	toggleFavouriteMovieOnClick,
}) => {
	const filteredMoviesList = showOnlyFavourites
		? moviesList.filter((movie) => favouriteMovieTitles.includes(movie.Film))
		: [...moviesList];
	const modalIsOpen = createModalIsOpen || detailsModalIsOpen;
	return (
		<StyledGrid>
			{modalIsOpen ? document.body.classList.add('modal-open') : document.body.classList.remove('modal-open')}
			{filteredMoviesList.map((movie) => (
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
	createModalIsOpen: PropTypes.bool,
	detailsModalIsOpen: PropTypes.bool.isRequired,
	favouriteMovieTitles: PropTypes.array.isRequired,
	moviesList: PropTypes.array.isRequired,
	openPreviewOnClickHandler: PropTypes.func.isRequired,
	selectedMovieDetails: PropTypes.object.isRequired,
	showOnlyFavourites: PropTypes.bool.isRequired,
	toggleFavouriteMovieOnClick: PropTypes.func.isRequired,
};

MoviesGallery.defaultProps = {
	createModalIsOpen: false,
	detailsModalIsOpen: false,
	showOnlyFavourites: false,
};

export { MoviesGallery };
