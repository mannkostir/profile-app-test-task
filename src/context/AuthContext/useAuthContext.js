import { useContext, useMemo } from 'react';
import authActionTypes from './authActionTypes';
import AuthContext from './AuthContext';

export const useAuthContext = () => {
  const { state, dispatch } = useContext(AuthContext);

  const { userId, username } = state;

  const isAuthenticated = useMemo(() => !!userId, [userId]);

  const signIn = ({ userId = '', username = '' }) => {
    dispatch({
      type: authActionTypes.SIGN_IN,
      userId,
      username,
    });
  };

  const signOut = () => {
    dispatch({ type: authActionTypes.SIGN_OUT });
  };

  return { isAuthenticated, userId, username, signIn, signOut };
};
