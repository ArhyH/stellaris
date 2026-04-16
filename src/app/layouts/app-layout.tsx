import { Outlet } from 'react-router-dom';

import { Header } from '@/widgets/header/ui/Header';
import { Sidebar } from '@/widgets/sidebar/ui/Sidebar';

const AppLayout = () => {
  return (
    <div>
      <Sidebar />

      <div>
        <Header />

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export { AppLayout };
