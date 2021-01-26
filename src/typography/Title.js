import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { colours, marginExternal } from '../assets/tokens';

const StyleTitle = styled('span')`
	color: ${colours.white};
	font-size: 24px;
	font-weight: bold;
	margin-top: 0;
	${marginExternal}
`;

const Title = ({ text }) => <StyleTitle>{text}</StyleTitle>;

Title.propTypes = {
	text: PropTypes.node.isRequired,
};

export { Title };
