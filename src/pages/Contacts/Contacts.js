import Container from 'components/Container';
import Search from 'pages/Contacts/Search';
import React from 'react';
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
