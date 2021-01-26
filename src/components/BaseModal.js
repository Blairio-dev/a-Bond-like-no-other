import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { injectGlobal } from 'emotion';
import colours from '../assets/colours.json';
import { Title } from '../typography';

injectGlobal(`
	.modal-open {
		overflow: hidden;
	}
`);

const StyledCloseButton = styled('button')`
	background: none;
	border: 1px solid black;
	border-radius: 8px;
	color: hsl(0, 0%, 100%);
	font-size: 16px;
	font-weight: bold;
	margin-bottom: 16px;
	margin-left: 8px;

	:focus,
	:hover {
		background: ${colours.red};
		cursor: pointer;
		outline: 0;
	}
`;

const StyledModal = styled('div')`
	background: hsl(0deg 0% 0%);
	border: 2px solid ${colours.gold};
	display: flex;
	height: min-content;
	flex-direction: column;
	width: 660px;
	padding: 16px;
`;

const StyledTitleBar = styled('div')`
	display: flex;
	justify-content: space-between;
`;

const StyledWrapper = styled('div')`
	align-items: center;
	background: rgba(0, 0, 0, 0.8);
	display: ${(props) => (props.isOpen ? 'flex' : 'none')};
	left: 0;
	height: 100vh;
	justify-content: center;
	padding: 24px;
	position: fixed;
	top: 0;
	width: 100vw;
`;

const BaseModal = ({ children, closeOnClick, isOpen, title }) => {
	const isTitleString = typeof title === 'string';
	console.log(isTitleString);
	return (
		<StyledWrapper isOpen={isOpen}>
			<StyledModal>
				<StyledTitleBar>
					{isTitleString ? <Title text={title} /> : title}
					<StyledCloseButton onClick={closeOnClick}>Close</StyledCloseButton>
				</StyledTitleBar>
				{children}
			</StyledModal>
		</StyledWrapper>
	);
};

BaseModal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
};

BaseModal.defaultProps = {
	isOpen: false,
};

export { BaseModal };
