import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { colours } from '../assets/tokens';

const StyledBody = styled('div')`
	color: ${colours.white};
	font-size: 16px;
	margin-bottom: 8px;
	margin-top: 0;
`;

const StandardBody = ({ children }) => <StyledBody>{children}</StyledBody>;

StandardBody.propTypes = {
	children: PropTypes.node.isRequired,
};

export { StandardBody };
