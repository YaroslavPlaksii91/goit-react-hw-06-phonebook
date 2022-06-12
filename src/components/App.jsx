import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

const App = () => (
  <div>
    <h1>Phonebook</h1>
    <ContactForm />

    <h2>Contacts</h2>
    <Filter />
    <ContactList />
  </div>
);

export default App;
