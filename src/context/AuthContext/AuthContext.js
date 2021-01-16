import React, { createContext, useEffect, useReducer } from 'react';
import { localStorageKeys } from 'constants/localStorageKeys';
import { authReducer } from './authReducer';
import authActionTypes from './authActionTypes';

const rememberedUserData = JSON.parse(
  localStorage.getItem(localStorageKeys.authState)
);

const IAuthContext = {
  state: {
    username: '',
    userId: '',
  },
  dispatch: () => {},
};

export const defaultAuthState = rememberedUserData || IAuthContext.state;

export const AuthContext = createContext(IAuthContext);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, defaultAuthState);

  useEffect(() => {
    (async () => {
      // Check if the user has token(s)
      try {
        const res = await fetch('/auth/check_auth', {
          method: 'POST',
        });

        const data = await res.json();

        const { userId, username } = data;

        // Tokens validity confirmed, authenticate the user

        dispatch({ type: authActionTypes.SIGN_IN, userId, username });
      } catch (e) {
        // Proceed without throwing (the user remains unauthenticated)
        return;
      }
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
