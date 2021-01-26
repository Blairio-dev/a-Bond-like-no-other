import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { colours } from '../assets/tokens';

const StyleHeading = styled('h1')`
	color: ${colours.white};
	margin-bottom: 16px;
	margin-top: 0;
`;

const PageHeading = ({ text }) => <StyleHeading>{text}</StyleHeading>;

PageHeading.propTypes = {
	text: PropTypes.node.isRequired,
};

export { PageHeading };
