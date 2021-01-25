import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import colours from '../assets/colours.json';

const StyledWrapper = styled('div')`
	background-color: ${colours.darkGrey};
	margin-left: 188px;
	padding: 24px;
`;

const PageShell = ({ children }) => <StyledWrapper>{children}</StyledWrapper>;

PageShell.propTypes = {
	children: PropTypes.node,
};

export { PageShell };
