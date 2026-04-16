import { RouterProvider } from 'react-router-dom';
import { router } from '../router/router';

const AppRouterProvider = () => {
  return <RouterProvider router={router} />;
};

export { AppRouterProvider };
