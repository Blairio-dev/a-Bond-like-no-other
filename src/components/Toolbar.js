import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { ActionButton } from './ActionButton';
import { Select } from './Select';
import { CreateModal } from './CreateModal';
import { colours, marginExternal, paddingInternalRegular } from '../assets/tokens';
import { DateInput } from './DateInput';

const StyledDateFilterWrapper = styled('div')`
	display: flex;
	color: ${colours.white};
`;

const StyledFilerWrapper = styled('div')`
	align-items: center;

	display: flex;
`;

const StyledWrapper = styled('div')`
	background: hsl(0deg 0% 18%);
	border-radius: 4px;
	display: flex;
	justify-content: space-between;
	${marginExternal}
	${paddingInternalRegular}
`;
const Toolbar = ({
	closeCreateOnClickHandler,
	createModalIsOpen,
	createMovieOnClickHandler,
	currentFilter,
	dateFilter,
	filterDateOnChangeHandler,
	filterSelectOnChangeHandler,
	moviesList,
	openCreateOnClickHandler,
}) => (
	<StyledWrapper>
		<StyledFilerWrapper>
			<Select
				id="filter-select"
				labelText="Filter by:"
				onChange={(event) => filterSelectOnChangeHandler(event)}
				selectedOption={currentFilter}
				selectOptions={['None', 'Actor', 'Release Date']}
			/>
			{currentFilter === 'Actor' && <span>Actor filter</span>}
			{currentFilter === 'Release Date' && (
				<StyledDateFilterWrapper>
					<DateInput
						labelText="From"
						id="release-date-filter-from-input"
						onChange={({ value }) => filterDateOnChangeHandler(value, true)}
						isRequired
						isRow
						value={dateFilter.from}
					/>
					<DateInput
						labelText="To"
						id="release-date-filter-from-input"
						onChange={({ value }) => filterDateOnChangeHandler(value)}
						isRequired
						isRow
						value={dateFilter.to}
					/>
				</StyledDateFilterWrapper>
			)}
		</StyledFilerWrapper>
		<ActionButton.Primary labelText="Create" onClick={() => openCreateOnClickHandler()} />
		{createModalIsOpen && (
			<CreateModal
				closeOnClick={() => closeCreateOnClickHandler()}
				createMovieOnClickHandler={createMovieOnClickHandler}
				moviesList={moviesList}
				isOpen={createModalIsOpen}
			/>
		)}
	</StyledWrapper>
);

Toolbar.propTypes = {
	closeCreateOnClickHandler: PropTypes.func.isRequired,
	createModalIsOpen: PropTypes.bool.isRequired,
	createMovieOnClickHandler: PropTypes.func.isRequired,
	currentFilter: PropTypes.string.isRequired,
	dateFilter: PropTypes.shape({
		from: PropTypes.string.isRequired,
		to: PropTypes.string.isRequired,
	}).isRequired,
	filterDateOnChangeHandler: PropTypes.func.isRequired,
	filterSelectOnChangeHandler: PropTypes.func.isRequired,
	moviesList: PropTypes.array.isRequired,
	openCreateOnClickHandler: PropTypes.func.isRequired,
};

export { Toolbar };
