import { AppRouterProvider } from './providers/router-provider';
import { StoreInitializer } from './store/StoreInitializer';

const App = () => {
  return (
    <>
      <StoreInitializer />
      <AppRouterProvider />
    </>
  );
};

export { App };
