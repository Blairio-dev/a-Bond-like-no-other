import React from 'react';
import PropTypes from 'prop-types';
import { MovieModal, PreviewPanel } from '.';
import movies from '../data/movies.json';
import styled from '@emotion/styled';

const StyledGrid = styled('div')`
	display: flex;
	flex-wrap: wrap;
`;

const MoviesGallery = ({
	closeOnClickHandler,
	favouriteMovieTitles,
	isOpen,
	previewOnClickHandler,
	selectedMovieDetails,
	showOnlyFavourites,
	toggleFavouriteMovieOnClick,
}) => {
	const moviesList = showOnlyFavourites
		? movies['Bond Films'].filter((movie) => favouriteMovieTitles.includes(movie.Film))
		: [...movies['Bond Films']];
	return (
		<StyledGrid>
			{isOpen ? document.body.classList.add('modal-open') : document.body.classList.remove('modal-open')}
			{moviesList.map((movie) => (
				<div key={movie.Film + movie['UK release date']}>
					<PreviewPanel
						actorName={movie['Bond Actor']}
						imageUrl={movie.ImageURL}
						movieName={movie.Film}
						onClick={() => previewOnClickHandler(movie)}
						ukReleaseDate={movie['UK release date']}
					/>
				</div>
			))}
			{isOpen && (
				<MovieModal
					closeOnClick={() => closeOnClickHandler()}
					favouriteMovieTitles={favouriteMovieTitles}
					isOpen={isOpen}
					selectedMovieDetails={selectedMovieDetails}
					toggleFavouriteMovieOnClick={toggleFavouriteMovieOnClick}
				/>
			)}
		</StyledGrid>
	);
};

MoviesGallery.propTypes = {
	closeOnClickHandler: PropTypes.func.isRequired,
	favouriteMovieTitles: PropTypes.array.isRequired,
	isOpen: PropTypes.bool.isRequired,
	previewOnClickHandler: PropTypes.func.isRequired,
	selectedMovieDetails: PropTypes.object.isRequired,
	showOnlyFavourites: PropTypes.bool.isRequired,
	toggleFavouriteMovieOnClick: PropTypes.func.isRequired,
};

MoviesGallery.defaultProps = {
	showOnlyFavourites: false,
};

export { MoviesGallery };
