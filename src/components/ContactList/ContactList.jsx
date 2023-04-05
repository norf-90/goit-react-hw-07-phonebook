import { useSelector } from 'react-redux';
import React from 'react';
import Contact from 'components/Contact/Contact';
import { List } from './ContactList.styled';
import { selectFilteredContacts } from 'redux/selectors';

const ContactList = () => {
  const items = useSelector(selectFilteredContacts);
  return (
    <List>
      {items.map(({ id, name, phone }) => (
        <Contact key={id} id={id} name={name} phone={phone} />
      ))}
    </List>
  );
};

export default ContactList;
