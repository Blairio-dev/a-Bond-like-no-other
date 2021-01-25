import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const StyledBody = styled('span')`
	color: white;
	font-size: 16px;
	font-weight: bold;
	margin-bottom: 8px;
	margin-top: 0;
`;

const ProminentText = ({ text }) => <StyledBody>{text}</StyledBody>;

ProminentText.propTypes = {
	text: PropTypes.node.isRequired,
};

export { ProminentText };
