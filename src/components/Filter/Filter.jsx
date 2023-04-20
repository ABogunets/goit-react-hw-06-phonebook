import { nanoid } from 'nanoid';
import {
  FilterWrapper,
  FilterLabel,
  FilterInput,
} from 'components/Filter/Filter.styled';

import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/actions';

export const Filter = () => {
  const filterInputId = nanoid();

  const dispatch = useDispatch();

  const onChangeFilter = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };

  return (
    <FilterWrapper>
      <FilterLabel htmlFor={filterInputId}>Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        id={filterInputId}
        // value={filter}
        onChange={onChangeFilter}
      />
    </FilterWrapper>
  );
};
