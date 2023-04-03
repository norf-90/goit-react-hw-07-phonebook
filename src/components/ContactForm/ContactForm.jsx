import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

import { Formik, ErrorMessage } from 'formik';
import {
  Form,
  Label,
  InputTitle,
  Field,
  SubmitBtn,
  Wrapper,
} from './ContactForm.styled';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .required()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(3, 'Must be more 3 digits'),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    const isNameAlreadyExist = Boolean(
      contacts.data.find(contact => contact.name === name)
    );
    if (isNameAlreadyExist) {
      alert(`${name} is already in contacts.`);
      return;
    }
    resetForm();
    dispatch(addContact(name, number));
  };

  const initialValues = { number: '', name: '' };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Label>
          <InputTitle>Name</InputTitle>
          <Wrapper>
            <Field
              type="text"
              name="name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              placeholder="Brendan Eich"
              required
            />
            <ErrorMessage name="name" />
          </Wrapper>
        </Label>

        <Label>
          <InputTitle>Number</InputTitle>
          <Wrapper>
            <Field
              type="tel"
              name="number"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              placeholder="063-111-22-33"
            />
            <ErrorMessage name="number" />
          </Wrapper>
        </Label>
        <SubmitBtn type="submit">Add contact</SubmitBtn>
      </Form>
    </Formik>
  );
};

// ContactForm.propTypes = { handleSubmit: PropTypes.func.isRequired };

export default ContactForm;
