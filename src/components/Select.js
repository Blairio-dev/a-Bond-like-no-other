import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as Chevron } from '../assets/svgs/chevron.svg';
import { StandardLabel } from '../typography';
import { colours, marginExternal } from '../assets/tokens';

const StyledIconWrapper = styled('div')`
	svg {
		fill: ${colours.white};
		height: 12px;
		pointer-events: none;
		position: absolute;
		right: 8px;
		speak: none;
		top: 13px;
		width: 22px;
	}
`;

const StyledFlexWrapper = styled('div')`
	align-items: center;
	display: inline-flex;
	justify-content: space-between;
	width: 100%;
`;

const StyledSelect = styled('select')`
	appearance: none;
	background-color: black;
	border: 2px solid black;
	border-radius: 4px;
	color: inherit;
	font-family: inherit;
	font-size: inherit;
	font-weight: normal;
	line-height: 24px;
	padding: 4px 8px;
	padding-right: 40px;

	:focus,
	:hover {
		border-color: ${colours.gold};
		cursor: pointer;
		outline: 0;
	}
`;

const StyledWrapper = styled('div')`
	align-items: center;
	color: ${colours.white};
	display: flex;
	font-size: 16px;
	font-weight: bold;
	height: min-content;
	${marginExternal}
	position: relative;
	width: fit-content;
`;

const Select = ({ id, labelText, onChange, selectedOption, selectOptions }) => (
	<StyledWrapper>
		<StyledFlexWrapper>
			<StandardLabel htmlFor={id} text={labelText} />
			<StyledSelect id={id} value={selectedOption} onChange={onChange}>
				{selectOptions.map((item, index) => {
					const key = `${id}-${index}`;
					return (
						<option key={key} value={item}>
							{item}
						</option>
					);
				})}
			</StyledSelect>
		</StyledFlexWrapper>
		<StyledIconWrapper>
			<Chevron />
		</StyledIconWrapper>
	</StyledWrapper>
);

Select.propTypes = {
	/** Unique string id. */
	id: PropTypes.string,
	/** Label text. */
	labelText: PropTypes.string,
	/** Callback function triggered on change. */
	onChange: PropTypes.func,
	/** Selected item. */
	selectedOption: PropTypes.string.isRequired,
	/** Array of string options. */
	selectOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export { Select };
