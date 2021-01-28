import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { colours, marginExternal } from '../assets/tokens';
import { ProminentText } from '../typography';

const StyledButton = styled('button')`
	background: ${(props) => (props.displayType === 'primary' ? colours.gold : colours.black)};
	border: 2px solid ${colours.gold};
	border-radius: 8px;
	color: ${(props) => (props.displayType === 'primary' ? colours.black : colours.gold)};
	cursor: pointer;
	${marginExternal}
	padding: 8px 12px;
	transition: transform 0.05s ease-out;
	width: min-content;

	:focus,
	:hover {
		outline: 0;
		transform: scale(1.05);
	}
`;

const basePropTypes = {
	onClick: PropTypes.func.isRequired,
};

const Base = ({ displayType, labelText, onClick }) => (
	<StyledButton displayType={displayType} onClick={onClick} type="button">
		<ProminentText text={labelText} />
	</StyledButton>
);

Base.propTypes = {
	...basePropTypes,
	displayType: PropTypes.oneOf(['primary', 'secondary']).isRequired,
	labelText: PropTypes.string.isRequired,
};

const Primary = ({ labelText, onClick }) => <Base displayType="primary" labelText={labelText} onClick={onClick} />;

Primary.propTypes = {
	...basePropTypes,
	labelText: PropTypes.string.isRequired,
};

const Secondary = ({ labelText, onClick }) => <Base displayType="secondary" labelText={labelText} onClick={onClick} />;

Secondary.propTypes = {
	...basePropTypes,
	labelText: PropTypes.string.isRequired,
};

const ActionButton = {
	Primary,
	Secondary,
};

export { ActionButton };
