import styles from './style.module.scss';
import { Box, BoxHeader, boxProps } from '@/shared/ui/Box';
import { RecentTransaction as RecentTransactionType } from '../model/types';
import { RecentTransaction } from './RecentTransaction';
import { RouterLink } from '@/shared/ui/RouterLink/RouterLink';

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
          <RouterLink to={'/transactions'}>View All</RouterLink>
        </BoxHeader>
        <ul className={styles['recent-transaction__list']}>
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
        </ul>
      </Box>
    </div>
  );
};

export { RecentTransactions };
export type { RecentTransactionsProps };
