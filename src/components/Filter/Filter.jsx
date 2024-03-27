import { FilterField, FilterInput, FilterLabel } from './Filter.styled';
// import { getFilter } from 'redux/contacts/contacts-selectors';
import { useSelector, useDispatch } from 'react-redux';
// import { contactsActions } from 'redux/contacts';
import { filterContactsThunk } from '../../store/contacts/thunks';
import {
  // selectAllContacts,
  selectFilterValueContacts,
  // selectSortedContacts,
} from '../../store/contacts/selectors';

export const Filter = () => {
  const value = useSelector(selectFilterValueContacts);
  const dispatch = useDispatch();
  const onChange = e => dispatch(filterContactsThunk(e.target.value));

  return (
    <FilterField>
      <FilterLabel>Find contacts by name</FilterLabel>
      <FilterInput type="text" value={value} onChange={onChange} />
    </FilterField>
  );
};
