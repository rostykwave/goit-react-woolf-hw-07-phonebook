import { DeleteBtn, Item, List } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
// import { contactsOperations } from 'redux/contacts';
import { getContactsThunk } from '../../store/contacts/thunks';
import {
  selectAllContacts,
  // selectFilterValueContacts,
  // selectSortedContacts,
} from '../../store/contacts/selectors';
// import { getVisibleContacts } from 'redux/contacts/contacts-selectors';

export const ContactList = () => {
  const contacts = useSelector(selectAllContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(getContactsThunk());

  return (
    <List>
      {contacts.map(({ id, name, phone }) => (
        <Item key={id}>
          <span>
            {name}: {phone}
          </span>
          <DeleteBtn type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </DeleteBtn>
        </Item>
      ))}
    </List>
  );
};
