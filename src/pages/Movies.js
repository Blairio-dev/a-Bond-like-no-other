import React, { Component } from 'react';
import { MovieModal, Page, PreviewPanel } from '../components';
import movies from '../data/movies.json';
import styled from '@emotion/styled';
import { PageHeading } from '../typography';
import { checkSelectedMovie } from '../data/SessionStorageReader';
import { updateSelectedMovie } from '../data/SessionStorageWriter';

const StyledGrid = styled('div')`
	display: flex;
	flex-wrap: wrap;
`;

class Movies extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedMovieDetails: checkSelectedMovie(),
		};
	}

	closeOnClickHandler = () => {
		this.setState(() => ({ selectedMovieDetails: '' }));
		updateSelectedMovie('');
	};

	previewOnClickHandler = (movie) => {
		this.setState(() => ({ selectedMovieDetails: movie }));
		updateSelectedMovie(movie);
	};

	render() {
		const { selectedMovieDetails } = this.state;
		const { toggleFavouriteMovieOnClick, favouriteMovieTitles } = this.props;
		return (
			<Page>
				<PageHeading text="Movies" />
				<StyledGrid>
					{movies['Bond Films'].map((movie) => (
						<div key={movie.Film + movie['UK release date']}>
							<PreviewPanel
								actorName={movie['Bond Actor']}
								imageUrl={movie.ImageURL}
								movieName={movie.Film}
								onClick={() => this.previewOnClickHandler(movie)}
								ukReleaseDate={movie['UK release date']}
							/>
						</div>
					))}
					{selectedMovieDetails !== '' && (
						<MovieModal
							actorName={selectedMovieDetails['Bond Actor']}
							toggleFavouriteMovieOnClick={toggleFavouriteMovieOnClick}
							boxOfficeTakings={selectedMovieDetails['Box Office(Millions)']}
							description={selectedMovieDetails['Description']}
							favouriteMovieTitles={favouriteMovieTitles}
							imageUrl={selectedMovieDetails.ImageURL}
							key={selectedMovieDetails.Film + selectedMovieDetails['UK release date']}
							movieName={selectedMovieDetails.Film}
							isOpen={selectedMovieDetails !== ''}
							onClick={() => this.closeOnClickHandler()}
							ukReleaseDate={selectedMovieDetails['UK release date']}
						/>
					)}
				</StyledGrid>
			</Page>
		);
	}
}

export { Movies };
