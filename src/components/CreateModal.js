import React from 'react';
import PropTypes from 'prop-types';
import { ActionButton, BaseModal } from '.';
import styled from '@emotion/styled';

const StyledButtonsWrapper = styled('div')`
	display: flex;
	justify-content: flex-end;
`;

const CreateModal = ({ closeOnClick, isOpen }) => (
	<BaseModal closeOnClick={closeOnClick} isOpen={isOpen} title="Create Movie">
		<StyledButtonsWrapper>
			<ActionButton labelText="Cancel" onClick={() => closeOnClick()} />
			<ActionButton labelText="Create" onClick={() => closeOnClick()} />
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
