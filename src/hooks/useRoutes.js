import { useAuthContext } from 'context/AuthContext/useAuthContext';
import { Redirect, Route, Switch } from 'react-router-dom';

const AuthOnlyRoute = ({ children, ...args }) => {
  const { isAuthenticated } = useAuthContext();

  return (
    <Route {...args}>
      {isAuthenticated ? children : <Redirect to={{ pathname: '/auth' }} />}
    </Route>
  );
};

const UnAuthOnlyRoute = ({ children, ...args }) => {
  const { isAuthenticated } = useAuthContext();

  return (
    <Route {...args}>
      {isAuthenticated ? children : <Redirect to={{ pathname: '/contacts' }} />}
    </Route>
  );
};

export const useRoutes = () => {
  const initRoutes = () => {
    return (
      <Switch>
        <AuthOnlyRoute></AuthOnlyRoute>
        <UnAuthOnlyRoute></UnAuthOnlyRoute>
      </Switch>
    );
  };

  return { initRoutes };
};
