import { ContentCard } from '@/features/ContentCard';
import { RecentTransaction as RecentTransactionType } from '../../model/types';
import styles from './style.module.scss';
import { Transaction } from './Transaction';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { colors, sizes } from '@/shared/styles';

type FullTransactionsListProps = {
  transactions: RecentTransactionType[];
};

const FullTransactionsList = (props: FullTransactionsListProps) => {
  const { transactions } = props;

  return (
    <ContentCard padding={sizes.sizes[0]}>
      <div className={styles['transactions-list__wrapper']}>
        <div className={styles['transactions-list__header']}></div>
        <ul className={styles['transactions-list']}>
          {transactions.map((transaction) => {
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
        <div className={styles['transactions-list__footer']}>
          <Typography
            type={typographyProps.types.text12}
            color={colors.lightgray[1]}
          >
            {transactions.length} transactions
          </Typography>
        </div>
      </div>
    </ContentCard>
  );
};

export { FullTransactionsList };
export type { FullTransactionsListProps };
