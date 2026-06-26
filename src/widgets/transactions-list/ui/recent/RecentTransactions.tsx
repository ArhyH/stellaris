import styles from './style.module.scss';
import { RecentTransaction } from '../../model/types';
import { Transaction } from './Transaction';
import { RouterLink } from '@/shared/ui/RouterLink/RouterLink';
import { ContentCard, ContentCardHeader } from '@/features/ContentCard';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { colors, sizes } from '@/shared/styles';
import { Icon } from '@/shared/ui/Icon';
import { icons } from '@/shared/assets';

type RecentTransactionsProps = {
  recentTransactions: RecentTransaction[];
};

const RecentTransactions = (props: RecentTransactionsProps) => {
  const { recentTransactions } = props;

  return (
    <div className={styles['recent-transaction__wrapper']}>
      <ContentCard>
        <ContentCardHeader paddingBottom={sizes.sizes[20]}>
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
            <Icon
              icon={icons.arrowRight12}
              width={sizes.sizes[12]}
              height={sizes.sizes[12]}
            />
          </RouterLink>
        </ContentCardHeader>

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
      </ContentCard>
    </div>
  );
};

export { RecentTransactions };
export type { RecentTransactionsProps };
