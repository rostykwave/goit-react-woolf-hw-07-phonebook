import axios from 'axios';

const baseURL = 'https://6601c1c19d7276a75552196a.mockapi.io/api/v1/';

const instanceContacts = axios.create({
  baseURL
});

export const getAllContactsApi = async () => {
  const { data } = await instanceContacts(
    `contacts`
  );
  return data;
};

export const getSearchContactsApi = async query => {
  const { data } = await instanceContacts(`contacts/?name=${query}`);
  return data;
};

export const getSingleContactApi = async id => {
  const { data } = await instanceContacts(`contacts/${id}`);
  return data;
};

export const deleteContactApi = async id => {
  const { data } = await instanceContacts.delete(`contacts/${id}`)
  return data;
};

export const addContactApi = async contact => {
  const { data } = await instanceContacts.post('contacts', contact);
  return data;
};
