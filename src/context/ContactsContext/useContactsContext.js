import { interactionModes } from 'constants/interactionModes';
import { useAPI } from 'hooks/useAPI';
import { useContext, useEffect } from 'react';
import contactsActionTypes from './contactsActionTypes';
import { ContactsContext } from './ContactsContext';

export const useContactsContext = () => {
  const { state, dispatch } = useContext(ContactsContext);

  const { interactionMode, deleteRequest, currentContacts } = state;

  const setCurrentContacts = (currentContacts = []) => {
    dispatch({
      type: contactsActionTypes.SET_CURRENT_CONTACTS,
      currentContacts,
    });
  };

  const addContact = (
    contact = { id: '', name: '', email: '', phone: '', comment: '' }
  ) => {
    setCurrentContacts([...currentContacts, contact]);
  };

  const deleteContact = (contactId = '') => {
    setCurrentContacts(
      currentContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const editContact = (contactId, payload = {}) => {
    const targetIndex = currentContacts.findIndex(
      (contact) => contact.id === contactId
    );

    let newContacts = currentContacts;

    if (targetIndex >= 0) {
      newContacts[targetIndex] = payload;
    }

    setCurrentContacts(newContacts);
  };

  const filterContacts = (
    pattern = { name: '', phone: '', email: '' },
    contactsToFilter = []
  ) => {
    const contacts = contactsToFilter.length
      ? contactsToFilter
      : currentContacts;

    const filteredContacts = contacts.filter((contact) => {
      return Object.entries(pattern).every(([prop, value]) => {
        if (!prop || !value) return true;
        return contact[prop].includes(value);
      });
    });

    setCurrentContacts([...filteredContacts]);
  };

  const setInteractionMode = (interactionMode = '') => {
    dispatch({
      type: contactsActionTypes.SET_INTERACTION_MODE,
      interactionMode,
    });
  };

  const setDeleteRequest = (deleteRequest = { contactId: '' }) => {
    dispatch({
      type: contactsActionTypes.SET_DELETE_REQUEST,
      deleteRequest,
    });
  };

  return {
    currentContacts,
    interactionMode,
    deleteRequest,
    setCurrentContacts,
    setInteractionMode,
    setDeleteRequest,
    addContact,
    deleteContact,
    editContact,
    filterContacts,
  };
};
