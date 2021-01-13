import { localStorageKeys } from 'constants/localStorageKeys';
import { updateState } from 'utils/updateState';
import contactsActionTypes from './contactsActionTypes';

export const contactsReducer = (
  state,
  action = { interactionMode: '', deleteRequest: {} }
) => {
  switch (action.type) {
    case contactsActionTypes.SET_INTERACTION_MODE:
      return updateState(state, {
        interactionMode: action.interactionMode,
      });
    case contactsActionTypes.SET_DELETE_REQUEST:
      return updateState(state, {
        deleteRequest: action.deleteRequest,
      });
    default:
      throw new Error(`Action type ${action.type} not specified`);
  }
};
