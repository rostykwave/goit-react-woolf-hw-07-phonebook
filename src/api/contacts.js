import axios from 'axios';

// axios.defaults.baseURL =
// const baseURL = 'https://api.escuelajs.co/api/v1'

const instanceContacts = axios.create({
  baseURL: 'https://6601c1c19d7276a75552196a.mockapi.io/api/v1/contacts',
});

export const getAllContactsApi = async (offset, limit) => {
  const { data } = await instanceContacts(
    `contacts?offset=${offset}&limit=${limit}`
  );
  return data;
};

export const getSearchContactsApi = async query => {
  const { data } = await instanceContacts(`contacts/?title=${query}`);
  return data;
};

export const getSingleContactuctApi = async id => {
  const { data } = await instanceContacts(`contacts/${id}`);
  return data;
};

export const deleteContactuctApi = async id => {
  // const { data } = await instanceContacts(`contacts/${id}`)
  const { data } = await instanceContacts.delete('contacts', {
    params: { id },
  });
  return data;
};

export const addContactApi = async contact => {
  const { data } = await instanceContacts.post('contacts', contact);
  return data;
};
