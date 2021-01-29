import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { injectGlobal } from 'emotion';
import { colours, marginExternal } from '../assets/tokens';
import { Title } from '../typography';
import { paddingInternalRegular } from '../assets/tokens';

injectGlobal(`
	.modal-open {
		overflow: hidden;
	}
`);

const StyledCloseButton = styled('button')`
	background: none;
	border: 1px solid black;
	border-radius: 8px;
	color: ${colours.white};
	font-size: 16px;
	font-weight: bold;
	${marginExternal}

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
	border-radius: 8px;
	display: flex;
	height: min-content;
	flex-direction: column;
	${paddingInternalRegular}
	width: 676px;
`;

const StyledTitleBar = styled('div')`
	display: flex;
	justify-content: space-between;
`;

const StyledWrapper = styled('div')`
	align-items: center;
	background: rgba(0, 0, 0, 0.8);
	display: flex;
	left: 0;
	height: 100vh;
	justify-content: center;
	padding: 24px;
	position: fixed;
	top: 0;
	width: 100vw;
`;

const BaseModal = ({ children, closeOnClick, title }) => {
	const isTitleString = typeof title === 'string';
	return (
		<StyledWrapper>
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
	children: PropTypes.node.isRequired,
	closeOnClick: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
};

export { BaseModal };
