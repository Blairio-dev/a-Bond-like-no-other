import React, { Component } from 'react';
import { MovieModal, Page, PreviewPanel } from '../components';
import movies from '../data/movies.json';
import styled from '@emotion/styled';
import { PageHeading } from '../typography';

const StyledGrid = styled('div')`
	display: flex;
	flex-wrap: wrap;
`;

class Movies extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false,
			selectedMovieDetails: null,
		};
	}

	render() {
		const { isOpen, selectedMovieDetails } = this.state;
		const { addFavouriteMovieOnClick, favouriteMovieTitles } = this.props;
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
								onClick={() => this.setState(() => ({ isOpen: true, selectedMovieDetails: movie }))}
								ukReleaseDate={movie['UK release date']}
							/>
						</div>
					))}
					{selectedMovieDetails && (
						<MovieModal
							actorName={selectedMovieDetails['Bond Actor']}
							addFavouriteMovieOnClick={addFavouriteMovieOnClick}
							boxOfficeTakings={selectedMovieDetails['Box Office(Millions)']}
							description={selectedMovieDetails['Description']}
							favouriteMovieTitles={favouriteMovieTitles}
							imageUrl={selectedMovieDetails.ImageURL}
							key={selectedMovieDetails.Film + selectedMovieDetails['UK release date']}
							movieName={selectedMovieDetails.Film}
							isOpen={isOpen}
							onClick={() => this.setState(() => ({ isOpen: false }))}
							ukReleaseDate={selectedMovieDetails['UK release date']}
						/>
					)}
				</StyledGrid>
			</Page>
		);
	}
}

export { Movies };
