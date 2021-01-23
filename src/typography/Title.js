import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const StyleTitle = styled('span')`
	color: white;
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
