export const selectAllContacts = store => {
  return store.contacts.contacts.items
};

export const selectFilterValueContacts = store => store.contacts.filter;

export const selectVisibleContacts = store => {
  const contacts = selectAllContacts(store);
  const filter = selectFilterValueContacts(store);

  if (filter && filter.length === 0) {
    return contacts;
  }

  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};