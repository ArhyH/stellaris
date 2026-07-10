import { Outlet } from 'react-router-dom';
import { Header, Sidebar } from '@/widgets/layout';
import { useTransactions } from '@/entity/transaction';
import { useCategories } from '@/entity/category';
import styles from './style.module.scss';

const AppLayout = () => {
  const { addTransaction } = useTransactions();
  const { addCategory, activeCategories } = useCategories();

  const hasCategories = activeCategories.length > 0;

  return (
    <div className={styles.app}>
      <Sidebar
        onTransactionCreate={addTransaction}
        onCategoryCreate={addCategory}
        hasCategories={hasCategories}
      />

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
