import ModalDialog from 'components/ModalDialog';
import { useContactsContext } from 'context/ContactsContext';
import { useAPI } from 'hooks/useAPI';
import { usePagination } from 'hooks/usePagination';
import { useToggle } from 'hooks/useToggle';
import React, { useEffect, useState } from 'react';
import Contact from '../Contact/Contact';
import ContactsPreloader from '../ContactsPreloader';
import {
  StyledContactsList,
  ContactsItem,
  ContactsListContainer,
} from './ContactsList.styles';

const ContactsList = ({ filteredContacts = null }) => {
  const {
    currentContacts,
    setDeleteRequest,
    deleteRequest,
    setCurrentContacts,
    deleteContact,
    interactionMode,
  } = useContactsContext();

  const [contactData, setContactData] = useState({});

  const [contactsTotal, setContactsTotal] = useState(0);

  const [displayContacts, setDisplayContacts] = useState([]);

  const api = useAPI();

  const {
    itemsPerPage,
    currentPage,
    PageLinks,
    nextPage,
    previousPage,
  } = usePagination({
    itemsPerPage: 5,
    itemsAmount: contactsTotal,
  });

  useEffect(() => {
    (async () => {
      let contacts = [];

      if (filteredContacts) {
        contacts = filteredContacts;
        setContactsTotal(contacts.length);
      } else {
        const data = await api.getAllContacts({
          limit: itemsPerPage,
          page: currentPage,
        });
        contacts = data.contacts;
        setContactsTotal(data.contactsTotalAmount);
      }
      setDisplayContacts(contacts);
    })();
  }, [currentContacts, currentPage, itemsPerPage, filteredContacts]);

  const { isOn, toggle } = useToggle();

  useEffect(() => {
    // Synchronize modal dialog contact with changed data
    if (contactData.contactId && currentContacts.length) {
      const contact = currentContacts.find(
        (contact) => contact.id === contactData.contactId
      );

      if (!contact) return;

      setContactData({ contactId: contact.id, ...contact });
    }
  }, [interactionMode, contactData.contactId, currentContacts]);

  const handleDelete = async (e) => {
    e.preventDefault();

    await api.deleteContact({ contactId: deleteRequest.contactId });

    deleteContact(deleteRequest.contactId);
  };

  return (
    <ContactsListContainer>
      <h1>Contacts</h1>
      {api.isLoading ? (
        <ContactsPreloader>LOADING...</ContactsPreloader>
      ) : (
        <>
          <ModalDialog
            isOpen={!!deleteRequest?.contactId}
            onClose={() => setDeleteRequest({})}
            style={{ zIndex: '3' }}
          >
            <span style={{ marginBottom: '1.5em' }}>
              Do you really want to delete the contact?
            </span>
            <div style={{ display: 'flex', gap: '1em' }}>
              <button
                onClick={() => {
                  setDeleteRequest({});
                }}
              >
                Nah, just kiddin'
              </button>
              <button
                onClick={(e) => {
                  if (isOn) toggle();
                  setDeleteRequest({});
                  handleDelete(e);
                }}
                type="submit"
              >
                Yes!
              </button>
            </div>
          </ModalDialog>
          <ModalDialog isOpen={isOn} onClose={toggle}>
            <Contact contactData={contactData} />
          </ModalDialog>
          <StyledContactsList>
            {displayContacts.map((contact) => {
              return (
                <ContactsItem
                  key={contact.id}
                  onClick={() => {
                    setContactData({
                      contactId: contact.id,
                      name: contact.name,
                      email: contact.email,
                      phone: contact.phone,
                      comment: contact.comment,
                    });
                    toggle();
                  }}
                >
                  {contact.name}
                </ContactsItem>
              );
            })}
            {displayContacts?.length || filteredContacts?.length ? (
              <div style={{ display: 'flex' }}>
                <button onClick={previousPage}>{'<'}</button>
                <PageLinks style={{ display: 'flex' }} />
                <button onClick={nextPage}>{'>'}</button>
              </div>
            ) : (
              'No contacts :('
            )}
          </StyledContactsList>
        </>
      )}
    </ContactsListContainer>
  );
};

export default ContactsList;
