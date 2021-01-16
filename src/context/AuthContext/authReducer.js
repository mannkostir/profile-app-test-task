import { localStorageKeys } from 'constants/localStorageKeys';
import { updateState } from 'utils/updateState';
import authActionTypes from './authActionTypes';
import { defaultAuthState } from './AuthContext';

export const authReducer = (state, action = { username: '', userId: '' }) => {
  switch (action.type) {
    case authActionTypes.SIGN_IN:
      return updateState(
        state,
        {
          username: action.username,
          userId: action.userId,
        },
        localStorageKeys.authState
      );
    case authActionTypes.SIGN_OUT:
      localStorage.removeItem(localStorageKeys.authState);
      return {};
    default:
      throw new Error(`Action type ${action.type} not specified`);
  }
};
