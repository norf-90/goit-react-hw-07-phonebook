import {
  ContactForm,
  FilterForm,
  ContactList,
  Layout,
  MainTitle,
  SecondaryTitle,
  GlobalStyles,
  Loader,
} from '.';

import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Layout>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm />

        <SecondaryTitle>Contacts</SecondaryTitle>
        {isLoading && <Loader />}
        {!isLoading && !error && contacts.length > 0 && (
          <>
            <FilterForm />
            <ContactList />
          </>
        )}
      </Layout>
      <GlobalStyles />
    </>
  );
};

export default App;
