import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as Chevron } from '../assets/svgs/chevron.svg';
import { StandardLabel } from '../typography';
import { colours, marginExternal } from '../assets/tokens';

const StyledIconWrapper = styled('span')`
	svg {
		fill: ${(props) => (props.isSecondary ? colours.white : colours.black)};
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
	background-color: ${(props) => (props.isSecondary ? colours.black : colours.gold)};
	border: 2px solid ${(props) => (props.isSecondary ? colours.gold : colours.black)};
	border-radius: 4px;
	color: ${(props) => (props.isSecondary ? colours.white : colours.black)};
	font-size: 16px;
	font-weight: bold;
	line-height: 24px;
	padding: 4px 8px;
	padding-right: 40px;
	transition: transform 0.05s ease-out;

	:focus,
	:hover {
		cursor: pointer;
		outline: 0;
		transform: scale(1.05);
		~ span {
			svg {
				transform: scale(1.05);
			}
		}
`;

const StyledWrapper = styled('div')`
	align-items: center;
	color: ${colours.white};
	display: flex;
	height: min-content;
	${marginExternal}
	position: relative;
	width: fit-content;
`;

const Select = ({ id, isSecondary, labelText, onChange, selectedOption, selectOptions }) => (
	<StyledWrapper>
		<StyledFlexWrapper>
			<StandardLabel htmlFor={id} text={labelText} />
			<StyledSelect id={id} isSecondary={isSecondary} onChange={onChange} value={selectedOption}>
				{selectOptions.map((item, index) => {
					const key = `${id}-${index}`;
					return (
						<option key={key} value={item}>
							{item}
						</option>
					);
				})}
			</StyledSelect>
			<StyledIconWrapper isSecondary={isSecondary}>
				<Chevron />
			</StyledIconWrapper>
		</StyledFlexWrapper>
	</StyledWrapper>
);

Select.propTypes = {
	/** Unique string id. */
	id: PropTypes.string,
	isSecondary: PropTypes.bool,
	/** Label text. */
	labelText: PropTypes.string,
	/** Callback function triggered on change. */
	onChange: PropTypes.func,
	/** Selected item. */
	selectedOption: PropTypes.string.isRequired,
	/** Array of string options. */
	selectOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
};
Select.defaultProps = {
	isSecondary: false,
};

export { Select };
