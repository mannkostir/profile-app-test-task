import { useAuthContext } from 'context/AuthContext/useAuthContext';
import Auth from 'pages/Auth';
import Contacts from 'pages/Contacts';
import { Redirect, Route, Switch } from 'react-router-dom';

const AuthOnlyRoute = ({ children, path, ...args }) => {
  const { isAuthenticated } = useAuthContext();

  return (
    <Route path={path} {...args}>
      {isAuthenticated ? children : <Redirect to={{ pathname: '/auth' }} />}
    </Route>
  );
};

const UnAuthOnlyRoute = ({ children, path, ...args }) => {
  const { isAuthenticated } = useAuthContext();

  return (
    <Route path={path} {...args}>
      {!isAuthenticated ? (
        children
      ) : (
        <Redirect to={{ pathname: '/contacts' }} />
      )}
    </Route>
  );
};

export const useRoutes = () => {
  const initRoutes = () => {
    return (
      <Switch>
        <AuthOnlyRoute path="/contacts">
          <Contacts />
        </AuthOnlyRoute>
        <UnAuthOnlyRoute path="/auth">
          <Auth />
        </UnAuthOnlyRoute>
        <Redirect to={{ pathname: '/contacts' }} />
      </Switch>
    );
  };

  return { initRoutes };
};
