import { Outlet } from 'react-router-dom';

import { Header } from '@/widgets/header/ui/Header';
import { Sidebar } from '@/widgets/sidebar/ui/Sidebar';
import styles from './style.module.scss';

const AppLayout = () => {
  return (
    <div className={styles.app}>
      <Sidebar />

      <div className={styles.app__wrapper}>
        <Header />

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export { AppLayout };
