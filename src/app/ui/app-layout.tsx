import { Outlet } from 'react-router-dom';

import { Header } from '@/widgets/header/ui/Header';
import { Sidebar } from '@/widgets/sidebar/ui/Sidebar';
import styles from './style.module.scss';
import { useCategoryStore } from '@/entity/category';
import { useTransactionStore } from '@/entity/transaction';

const AppLayout = () => {
  const categories = Object.values(
    useCategoryStore((state) => state.categories),
  );
  const addTransaction = useTransactionStore((state) => state.addTransaction);

  return (
    <div className={styles.app}>
      <Sidebar onSubmit={addTransaction} categories={categories} />

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
