import ModalDialog from 'components/ModalDialog';
import { interactionModes } from 'constants/interactionModes';
import { useContactsContext } from 'context/ContactsContext';
import { useToggle } from 'hooks/useToggle';
import React, { useState } from 'react';
import Contact from '../Contact/Contact';
import ControlButtons from '../ControlButtons';
import EditContact from '../EditContact';
import ViewContact from '../ViewContact';
import {
  StyledContactsList,
  ContactsItem,
  ContactsListContainer,
} from './ContactsList.styles';

const ContactsList = () => {
  const {
    setInteractionMode,
    setDeleteRequest,
    deleteRequest,
  } = useContactsContext();

  const { isOn, toggle } = useToggle();

  const handleDelete = (e) => {
    e.preventDefault();
  };

  return (
    <ContactsListContainer>
      <ModalDialog
        isOpen={!!deleteRequest.contactId}
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
        <Contact />
      </ModalDialog>
      <StyledContactsList>
        <ContactsItem
          onClick={toggle}
          contactData={{
            contactId: 'test',
            name: 'John Doe',
            email: 'qwerty@asd.xyz',
          }}
        >
          Contact's Name
          {/* <ControlButtons>
            <ControlButtons.EditButton />
            <ControlButtons.DeleteButton
              onClick={(e) => {
                e.stopPropagation();
                setDeleteRequest({});
              }}
            />
          </ControlButtons> */}
        </ContactsItem>
        <ContactsItem>Contact's Name</ContactsItem>
        <ContactsItem>Contact's Name</ContactsItem>
        <ContactsItem>Contact's Name</ContactsItem>
        <ContactsItem>Contact's Name</ContactsItem>
        <ContactsItem>Contact's Name</ContactsItem>
      </StyledContactsList>
    </ContactsListContainer>
  );
};

export default ContactsList;
