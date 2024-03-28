import { ContactForm } from './components/ContactForm';
import { ContactList } from './components/ContactList';
import { Container } from './components/Container';
import { Filter } from './components/Filter';
import { getContactsThunk } from './store/contacts/thunks';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <Container>
      <h1>PhoneBook</h1>
      <ContactForm />
      <h1>Contacts</h1>
      <Filter />
      <ContactList />
    </Container>
  );
};
