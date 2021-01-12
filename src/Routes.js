import { useRoutes } from './hooks/useRoutes';

const Routes = () => {
  const { initRoutes } = useRoutes();

  return initRoutes();
};

export default Routes;
