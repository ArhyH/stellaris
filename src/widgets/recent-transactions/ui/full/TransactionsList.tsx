import { ContentCard } from '@/features/ContentCard';
import { RecentTransaction as RecentTransactionType } from '../../model/types';
import styles from './style.module.scss';
import { Transaction } from './Transaction';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { colors, sizes } from '@/shared/styles';

type TransactionsListProps = {
  recentTransactions: RecentTransactionType[];
};

const TransactionsList = (props: TransactionsListProps) => {
  const { recentTransactions } = props;

  return (
    <div className={styles['recent-transaction__wrapper']}>
      <ContentCard padding={sizes.sizes[0]}>
        <div className={styles['recent-transaction__list-wrapper']}>
          <div className={styles['recent-transaction__list-header']}></div>
          <ul className={styles['recent-transaction__list']}>
            {recentTransactions.map((transaction) => {
              return (
                <Transaction
                  key={transaction.id}
                  categoryIcon={transaction.categoryIcon ?? 'wallet18'}
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
          <div className={styles['recent-transaction__list-footer']}>
            <Typography
              type={typographyProps.types.text12}
              color={colors.lightgray[1]}
            >
              {recentTransactions.length} transactions
            </Typography>
          </div>
        </div>
      </ContentCard>
    </div>
  );
};

export { TransactionsList };
export type { TransactionsListProps };
