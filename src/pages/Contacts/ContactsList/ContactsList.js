import ModalDialog from 'components/ModalDialog';
import { useContactsContext } from 'context/ContactsContext';
import { useAPI } from 'hooks/useAPI';
import { useToggle } from 'hooks/useToggle';
import React, { useEffect, useState } from 'react';
import Contact from '../Contact/Contact';
import {
  StyledContactsList,
  ContactsItem,
  ContactsListContainer,
} from './ContactsList.styles';

const ContactsList = () => {
  const {
    currentContacts,
    setDeleteRequest,
    deleteRequest,
    setCurrentContacts,
    deleteContact,
    interactionMode,
  } = useContactsContext();

  const [contactData, setContactData] = useState({});

  const api = useAPI();

  useEffect(() => {
    // Set contacts as state on mount
    (async () => {
      const data = await api.getAllContacts();
      const contacts = data.contacts;

      setCurrentContacts(contacts);
    })();
  }, []);

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
  }, [interactionMode]);

  const handleDelete = async (e) => {
    e.preventDefault();

    await api.deleteContact({ contactId: deleteRequest.contactId });

    deleteContact(deleteRequest.contactId);
  };

  return (
    <ContactsListContainer>
      <h1>Contacts</h1>
      {api.isLoading ? 'LOADING...' : null}
      <ModalDialog
        isOpen={!!deleteRequest?.contactId}
        onClose={() => setDeleteRequest({})}
        style={{ zIndex: '2' }}
      >
        Do you really want to delete the contact?
        <div>
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
      <ModalDialog isOpen={isOn} onClose={toggle} style={{ zIndex: '1' }}>
        <Contact contactData={contactData} />
      </ModalDialog>
      <StyledContactsList>
        {currentContacts.map((contact) => {
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
        {/* <ControlButtons>
            <ControlButtons.EditButton />
            <ControlButtons.DeleteButton
              onClick={(e) => {
                e.stopPropagation();
                setDeleteRequest({});
              }}
            />
          </ControlButtons> */}
      </StyledContactsList>
    </ContactsListContainer>
  );
};

export default ContactsList;
