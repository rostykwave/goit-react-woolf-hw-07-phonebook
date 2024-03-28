import { FilterField, FilterInput, FilterLabel } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../store/contacts/actions';
import {
  selectFilterValueContacts,
} from '../../store/contacts/selectors';

export const Filter = () => {
  const value = useSelector(selectFilterValueContacts);
  const dispatch = useDispatch();
  const onChange = e => dispatch(changeFilter(e.target.value));

  return (
    <FilterField>
      <FilterLabel>Find contacts by name</FilterLabel>
      <FilterInput type="text" value={value} onChange={onChange} />
    </FilterField>
  );
};
