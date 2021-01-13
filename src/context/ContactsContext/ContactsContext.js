import React, { createContext, useReducer } from 'react';
import { localStorageKeys } from 'constants/localStorageKeys';
import { interactionModes } from 'constants/interactionModes';
import { contactsReducer } from './contactsReducer';

const rememberedContactsContext = JSON.parse(
  localStorage.getItem(localStorageKeys.authState)
);

const IContactsContext = {
  state: {
    interactionMode: interactionModes.view,
    deleteRequest: { contactId: '' },
  },
  dispatch: () => {},
};

export const defaultContactsContext =
  rememberedContactsContext || IContactsContext.state;

export const ContactsContext = createContext(IContactsContext);

export const ContactsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contactsReducer, defaultContactsContext);

  return (
    <ContactsContext.Provider value={{ state, dispatch }}>
      {children}
    </ContactsContext.Provider>
  );
};

export default ContactsContext;
