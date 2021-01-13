import React, { createContext, useEffect, useReducer } from 'react';
import { localStorageKeys } from 'constants/localStorageKeys';
import { authReducer } from './authReducer';

const rememberedUserData = JSON.parse(
  localStorage.getItem(localStorageKeys.authState)
);

const IAuthContext = {
  state: {
    username: '',
    userId: 'asd',
  },
  dispatch: () => {},
};

export const defaultAuthState = rememberedUserData || IAuthContext.state;

export const AuthContext = createContext(IAuthContext);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, defaultAuthState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
