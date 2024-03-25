// import { createSelector } from '@reduxjs/toolkit';

export const selectAllContacts = store => store.contacts;
export const selectFilterValueContacts = store => store.contacts.filterValue;

export const selectSortedContacts = store => {
  return store.contacts.contacts?.toSorted((a, b) => {
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
