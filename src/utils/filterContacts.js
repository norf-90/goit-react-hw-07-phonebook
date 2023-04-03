export const filterContacts = (contacts, filter) => {
  return contacts.filter(({ name }) => {
    return name.toLowerCase().includes(filter.toLowerCase());
  });
};
