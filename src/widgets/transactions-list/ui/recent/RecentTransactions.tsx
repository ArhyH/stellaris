import styles from './style.module.scss';
import { RecentTransaction } from '../../model/types';
import { Transaction } from './Transaction';
import { RouterLink } from '@/shared/ui/RouterLink/RouterLink';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { colors, sizes } from '@/shared/styles';
import { Icon } from '@/shared/ui/Icon';
import { icons } from '@/shared/assets';
import { TransactionsPlaceholder } from './TransactionsPlaceholder';
import { Box, BoxHeader } from '@/shared/ui/Box';

type RecentTransactionsProps = {
  recentTransactions: RecentTransaction[];
};

const RecentTransactions = (props: RecentTransactionsProps) => {
  const { recentTransactions } = props;

  if (!recentTransactions) {
    return;
  }

  const hasTransactions = recentTransactions.length > 0;

  return (
    <div className={styles['recent-transaction__wrapper']}>
      <Box padding={sizes.sizes[24]}>
        <BoxHeader paddingBottom={sizes.sizes[20]}>
          <Typography
            type={typographyProps.types.title16}
            color={colors.base.white}
          >
            Recent Transactions
          </Typography>
          <RouterLink to={'/transactions'}>
            <Typography type={typographyProps.types.text12}>
              View All
            </Typography>
            <Icon icon={icons.arrowRight12} size={sizes.sizes[12]} />
          </RouterLink>
        </BoxHeader>

        {hasTransactions ? (
          <ul className={styles['recent-transaction__list']}>
            {recentTransactions.map((transaction) => {
              return (
                <Transaction
                  key={transaction.id}
                  categoryIcon={transaction.categoryIcon ?? 'wallet18'}
                  categoryName={transaction.categoryName}
                  categoryColor={transaction.categoryColor}
                  categoryIconColor={transaction.categoryIconColor}
                  date={transaction.date}
                  amount={transaction.amount}
                  note={transaction.note}
                  type={transaction.type}
                />
              );
            })}
          </ul>
        ) : (
          <TransactionsPlaceholder />
        )}
      </Box>
    </div>
  );
};

export { RecentTransactions };
export type { RecentTransactionsProps };
