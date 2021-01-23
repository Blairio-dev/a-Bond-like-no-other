import React from 'react';
import styled from '@emotion/styled';
import colours from '../assets/colours.json';

const StyledWrapper = styled('div')`
	background-color: ${colours.darkGrey};
	margin-left: 188px;
	padding: 24px;
`;

const Page = ({ children }) => <StyledWrapper>{children}</StyledWrapper>;

export { Page };
