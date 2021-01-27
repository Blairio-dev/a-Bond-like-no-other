import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { ActionButton, BaseModal, DateInput, NumberInput, TextArea, TextInput, URLInput } from '../components';
import { colours, marginExternal } from '../assets/tokens';
import moment from 'moment';

const StyledForm = styled('form')`
	color: ${colours.white};
	display: flex;
	flex-direction: column;
`;

const StyledButtonsWrapper = styled('div')`
	display: flex;
	justify-content: flex-end;
`;

const StyledSubmit = styled('input')`
	background: ${colours.gold};
	border: 2px solid ${colours.gold};
	border-radius: 8px;
	color: ${colours.black};
	cursor: pointer;
	font-size: 16px;
	font-weight: bold;
	${marginExternal}
	padding: 8px 12px;
	transition: transform 0.05s ease-out;
	width: min-content;

	:focus,
	:hover {
		outline: 0;
		transform: scale(1.05);
	}
`;

const formatReleaseDate = (movieDetails) => {
	var formattedReleaseDate = moment(movieDetails['UK release date']).format('D MMMM YYYY');
	movieDetails['UK release date'] = formattedReleaseDate;
	return movieDetails;
};

class CreateModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			movieDetails: {
				Film: '',
				'Bond Actor': '',
				'UK release date': '',
				ImageURL: '',
				Description: '',
				'Box Office(Millions)': '',
			},
		};
	}

	onChangeHandler = (property, value) => {
		const updatedMovieDetails = Object.assign({}, this.state.movieDetails);
		updatedMovieDetails[property] = value;
		this.setState(() => ({ movieDetails: updatedMovieDetails }));
	};

	render() {
		const { closeOnClick, createMovieOnClickHandler, isOpen, moviesList } = this.props;
		const { movieDetails } = this.state;

		const isExistingMovie = (movieName) => !!!moviesList.find((movieObj) => movieObj.Film === movieName);

		return (
			<BaseModal closeOnClick={closeOnClick} isOpen={isOpen} title="Create Movie">
				<StyledForm onSubmit={() => createMovieOnClickHandler(formatReleaseDate(movieDetails))}>
					<TextInput
						customValidation={{
							checkIsValid: isExistingMovie,
							validationMessage: 'Movie already exists.',
						}}
						labelText="Movie"
						id="movie-name-input"
						isRequired
						onChange={({ value }) => this.onChangeHandler('Film', value)}
						value={movieDetails.Film}
					/>
					<TextInput
						labelText="Bond Actor"
						id="bond-actor-name-input"
						isRequired
						onChange={({ value }) => this.onChangeHandler('Bond Actor', value)}
						value={movieDetails['Bond Actor']}
					/>
					<DateInput
						labelText="Release Date (UK)"
						id="uk-release-date-input"
						onChange={({ value }) => this.onChangeHandler('UK release date', value)}
						isRequired
						value={movieDetails['UK release date']}
					/>
					<NumberInput
						labelText="Box Office (Millions)"
						id="box-office-takings-input"
						isRequired
						onChange={({ value }) => this.onChangeHandler('Box Office(Millions)', value)}
						value={movieDetails['Box Office(Millions)']}
					/>
					<URLInput
						labelText="Image URL"
						id="image-url-input"
						isRequired
						onChange={({ value }) => this.onChangeHandler('ImageURL', value)}
						value={movieDetails.ImageURL}
					/>
					<TextArea
						labelText="Description"
						id="description-input"
						isRequired
						onChange={({ value }) => this.onChangeHandler('Description', value)}
						value={movieDetails.Description}
					/>
					<StyledButtonsWrapper>
						<ActionButton.Secondary labelText="Cancel" onClick={() => closeOnClick()} />
						<StyledSubmit type="submit" value="Create" />
					</StyledButtonsWrapper>
				</StyledForm>
			</BaseModal>
		);
	}
}

CreateModal.propTypes = {
	closeOnClick: PropTypes.func.isRequired,
	createMovieOnClickHandler: PropTypes.func.isRequired,
	moviesList: PropTypes.array.isRequired,
	isOpen: PropTypes.bool.isRequired,
};

CreateModal.defaultProps = {
	isOpen: false,
};

export { CreateModal };
