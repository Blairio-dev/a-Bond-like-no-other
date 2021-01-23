import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const StyledBody = styled('span')`
	color: white;
	font-size: 2416x;
	margin-bottom: 8px;
	margin-top: 0;
`;

const Body = ({ text }) => <StyledBody>{text}</StyledBody>;

Body.propTypes = {
	text: PropTypes.node.isRequired,
};

export { Body };
