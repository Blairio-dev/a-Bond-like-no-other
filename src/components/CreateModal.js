import React from 'react';
import PropTypes from 'prop-types';
import { ActionButton, BaseModal } from '../components';
import styled from '@emotion/styled';
import { colours } from '../assets/tokens';
import { TextInput } from './TextInput';

const StyledForm = styled('form')`
	color: ${colours.white};
	display: flex;
	flex-direction: column;
`;

const StyledButtonsWrapper = styled('div')`
	display: flex;
	justify-content: flex-end;
`;

const CreateModal = ({ closeOnClick, isOpen }) => (
	<BaseModal closeOnClick={closeOnClick} isOpen={isOpen} title="Create Movie">
		<StyledForm>
			<TextInput labelText="Movie" id="movie-name-input" onChange={() => {}} />
			<TextInput labelText="Bond Actor" id="bond-actor-name-input" onChange={() => {}} />
			<TextInput labelText="Release Date (UK)" id="uk-release-date-input" onChange={() => {}} />
			<TextInput labelText="Box Office (Millions)" id="box-office-takings-input" onChange={() => {}} />
			<TextInput labelText="Image URL" id="image-url-input" onChange={() => {}} />
			<TextInput labelText="Description" id="description-input" onChange={() => {}} />
		</StyledForm>
		<StyledButtonsWrapper>
			<ActionButton.Secondary labelText="Cancel" onClick={() => closeOnClick()} />
			<ActionButton.Submit labelText="Create" onClick={() => closeOnClick()} />
		</StyledButtonsWrapper>
	</BaseModal>
);

CreateModal.propTypes = {
	closeOnClick: PropTypes.func.isRequired,
	isOpen: PropTypes.bool.isRequired,
};

CreateModal.defaultProps = {
	isOpen: false,
};

export { CreateModal };
