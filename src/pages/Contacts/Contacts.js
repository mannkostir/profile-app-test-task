import Container from 'components/Container';
import Search from 'pages/Contacts/Search';
import React, { useState } from 'react';
import AddContact from './AddContact';
import { ContactsWrapper } from './Contacts.styles';
import ContactsList from './ContactsList';

const Contacts = () => {
  const [filteredContacts, setFilteredContacts] = useState(null);

  return (
    <ContactsWrapper>
      <Container>
        <Search
          setFilteredContacts={(contacts) => setFilteredContacts(contacts)}
        />
        <ContactsList filteredContacts={filteredContacts} />
        <AddContact />
      </Container>
    </ContactsWrapper>
  );
};

export default Contacts;
