import { Outlet } from 'react-router-dom';

import { Header } from '@/widgets/header/ui/Header';
import { Sidebar } from '@/widgets/sidebar/ui/Sidebar';
import { useCategories } from '@/entity/category';
import { useTransactions } from '@/entity/transaction';
import styles from './style.module.scss';

const AppLayout = () => {
  const { categoriesList } = useCategories();
  const { addTransaction } = useTransactions();

  return (
    <div className={styles.app}>
      <Sidebar onSubmit={addTransaction} categories={categoriesList} />

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
