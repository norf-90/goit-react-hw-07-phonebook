import { useSelector } from 'react-redux';
import React from 'react';
import Contact from 'components/Contact/Contact';
import { List } from './ContactList.styled';
import { filterContacts } from 'utils/filterContacts';
import { getContacts, getFilter } from 'redux/selectors';

const ContactList = () => {
  const items = useSelector(getContacts);
  const filter = useSelector(getFilter);
  return (
    <List>
      {filterContacts(items, filter).map(({ id, name, phone }) => (
        <Contact key={id} id={id} name={name} phone={phone} />
      ))}
    </List>
  );
};

export default ContactList;
