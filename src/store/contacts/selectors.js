// import { createSelector } from '@reduxjs/toolkit';

export const selectAllContacts = store => {
  return store.contacts.contacts.items
};
export const selectFilterValueContacts = store => store.filter;

export const selectSortedContacts = store => {
  return store.contacts.contacts?.items?.toSorted((a, b) => {
    console.log('sorting...');
    return a.price - b.price;
  });
};

// export const contactsSelector = createSelector(
// 	selectFilterValueContacts,
// 	selectSortedContacts,
// 	(filterValue, sortedContacts) => {
// 		return sortedContacts?.filter((el) => el.name.includes(filterValue))
// 	}
// )
