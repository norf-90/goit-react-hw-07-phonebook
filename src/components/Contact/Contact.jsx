import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

const Contact = props => {
  const { id, name, phone } = props;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <ListItem>
      <ContactName>{name}</ContactName>
      <ContactNumber>{phone}</ContactNumber>
      <DeleteButton type="button" onClick={handleDelete}>
        X
      </DeleteButton>
    </ListItem>
  );
};
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Contact;
