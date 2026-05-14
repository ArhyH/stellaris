import styles from './style.module.scss';
import { Box, BoxHeader, boxProps } from '@/shared/ui/Box';
import { Link } from 'react-router-dom';
import { RecentTransaction as RecentTransactionType } from '../model/types';
import { RecentTransaction } from './RecentTransaction';

type RecentTransactionsProps = {
  recentTransactions: RecentTransactionType[];
};

const RecentTransactions = (props: RecentTransactionsProps) => {
  const { recentTransactions } = props;

  return (
    <div className={styles['recent-transaction__wrapper']}>
      <Box size={boxProps.sizes.parent} grow={boxProps.grow[1]}>
        <BoxHeader>
          <p className={styles['recent-transaction__title']}>
            Recent Transactions
          </p>
          <Link
            className={styles['recent-transaction__link']}
            to={'/transactions'}
          >
            View All
          </Link>
        </BoxHeader>
        {recentTransactions.map((transaction) => {
          console.log(transaction);
          return (
            <RecentTransaction
              key={transaction.id}
              categoryIcon={transaction.categoryIcon}
              categoryName={transaction.categoryName}
              categoryColor={transaction.categoryColor}
              date={transaction.date}
              amount={transaction.amount}
              note={transaction.note}
              type={transaction.type}
            />
          );
        })}
      </Box>
    </div>
  );
};

export { RecentTransactions };
export type { RecentTransactionsProps };
