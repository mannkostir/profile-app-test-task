import { updateState } from 'utils/updateState';
import authActionTypes from './authActionTypes';

export const authReducer = (state, action = { username: '', userId: '' }) => {
  switch (action.type) {
    case authActionTypes.SIGN_IN:
      return updateState(state, {
        username: action.username,
        userId: action.userId,
      });
    case authActionTypes.SIGN_OUT:
      return {};
    default:
      throw new Error(`Action type ${action.type} not specified`);
  }
};
