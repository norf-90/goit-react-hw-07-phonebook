import { useSelector } from 'react-redux';
import React from 'react';
import Contact from './Contact/Contact';
import { List } from './ContactList.styled';
import { filterContacts } from 'utils/filterContacts';
import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  return (
    <List>
      {filterContacts(contacts, filter).map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
};

export default ContactList;
