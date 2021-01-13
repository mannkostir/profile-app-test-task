import { interactionModes } from 'constants/interactionModes';
import { useContext, useMemo } from 'react';
import contactsActionTypes from './contactsActionTypes';
import { ContactsContext } from './ContactsContext';

export const useContactsContext = () => {
  const { state, dispatch } = useContext(ContactsContext);

  const { interactionMode, deleteRequest } = state;

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
    interactionMode,
    deleteRequest,
    setInteractionMode,
    setDeleteRequest,
  };
};
