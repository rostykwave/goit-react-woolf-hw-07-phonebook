import { DeleteBtn, Item, List } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContactThunk } from '../../store/contacts/thunks';
import {
  selectVisibleContacts,
} from '../../store/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(deleteContactThunk(id));

  return (
    <List>
      {contacts && contacts.map(({ id, name, phone }) => (
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
