import styles from './style.module.scss';
import { RecentTransaction as RecentTransactionType } from '../model/types';
import { RecentTransaction } from './RecentTransaction';
import { RouterLink } from '@/shared/ui/RouterLink/RouterLink';
import { ContentCard, ContentCardHeader } from '@/features/ContentCard';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { sizes } from '@/shared/styles';

type RecentTransactionsProps = {
  recentTransactions: RecentTransactionType[];
};

const RecentTransactions = (props: RecentTransactionsProps) => {
  const { recentTransactions } = props;

  return (
    <div className={styles['recent-transaction__wrapper']}>
      <ContentCard>
        <ContentCardHeader paddingBottom={sizes.sizes[20]}>
          <Typography type={typographyProps.types.title16}>
            Recent Transactions
          </Typography>
          <RouterLink to={'/transactions'}>View All</RouterLink>
        </ContentCardHeader>

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
      </ContentCard>
    </div>
  );
};

export { RecentTransactions };
export type { RecentTransactionsProps };
