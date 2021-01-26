import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import colours from '../assets/colours.json';

const StyleTitle = styled('span')`
	color: ${colours.white};
	font-size: 24px;
	font-weight: bold;
	margin-bottom: 16px;
	margin-top: 0;
`;

const Title = ({ text }) => <StyleTitle>{text}</StyleTitle>;

Title.propTypes = {
	text: PropTypes.node.isRequired,
};

export { Title };
