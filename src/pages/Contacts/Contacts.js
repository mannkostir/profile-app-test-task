import Container from 'components/Container';
import { useContactsContext } from 'context/ContactsContext';
import { useAPI } from 'hooks/useAPI';
import Search from 'pages/Contacts/Search';
import React, { useEffect } from 'react';
import AddContact from './AddContact';
import { ContactsWrapper } from './Contacts.styles';
import ContactsList from './ContactsList';

const Contacts = () => {
  return (
    <ContactsWrapper>
      <Container>
        <Search />
        <ContactsList />
        <AddContact />
      </Container>
    </ContactsWrapper>
  );
};

export default Contacts;
