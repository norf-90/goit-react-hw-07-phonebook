import ContactForm from 'components/ContactForm/ContactForm';
import FilterForm from 'components/FilterForm/FilterForm';
import ContactList from 'components/ContactList/ContactList';
import { Layout, MainTitle, SecondaryTitle, GlobalStyles } from '.';

const App = () => {
  return (
    <>
      <Layout>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm />
        <SecondaryTitle>Contacts</SecondaryTitle>
        <FilterForm />
        <ContactList />
      </Layout>
      <GlobalStyles />
    </>
  );
};

export default App;
