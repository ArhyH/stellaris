import { useState } from 'react';
import {
  RecentTransaction as RecentTransactionType,
  SortConfig,
  sortDirections,
  sortFields,
} from '../../data';
import styles from './style.module.scss';
import { Transaction } from './Transaction';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { colors, sizes } from '@/shared/styles';
import { Button, ButtonIcon, buttonProps } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { icons } from '@/shared/assets';
import { ID } from '@/shared/types';
import { TransactionsPlaceholder } from './TransactionsPlaceholder';
import { Box } from '@/shared/ui/Box';
import { getCallbacks } from '../model/getCallbacks';
import { getButtonState } from '../model/helpers';
import { useSortedTransactions } from '../model/useSortedTransactions';

type FullTransactionsListProps = {
  transactions: RecentTransactionType[];
  onDelete: (id: ID) => void;
};

const FullTransactionsList = (props: FullTransactionsListProps) => {
  const { transactions, onDelete } = props;

  const [sortConfig, setSortConfig] = useState<SortConfig>({
    field: sortFields.date,
    direction: sortDirections.desc,
  });

  const { sortedTransactions, transactionsCount } = useSortedTransactions(
    transactions,
    sortConfig,
  );

  const { handleSort } = getCallbacks(setSortConfig, sortConfig);

  const hasTransactions = transactions.length > 0;

  return (
    <Box>
      <div className={styles['transactions-list__wrapper']}>
        <div className={styles['transactions-list__header']}>
          <Button
            theme={buttonProps.themes.transparent}
            height={sizes.sizes[24]}
            width={sizes.sizes.parent}
            justify={buttonProps.justifies.left}
            onClick={() => handleSort(sortFields.date)}
            isDisabled={!hasTransactions}
            {...getButtonState(sortFields.date, sortConfig)}
          >
            <Typography type={typographyProps.types.text16}>Date</Typography>
            <ButtonIcon>
              <Icon icon={icons.arrowDown14} />
            </ButtonIcon>
          </Button>

          <Button
            theme={buttonProps.themes.transparent}
            height={sizes.sizes[24]}
            width={sizes.sizes.parent}
            justify={buttonProps.justifies.left}
            onClick={() => handleSort(sortFields.category)}
            isDisabled={!hasTransactions}
            {...getButtonState(sortFields.category, sortConfig)}
          >
            <Typography type={typographyProps.types.text16}>
              Category
            </Typography>
            <ButtonIcon>
              <Icon icon={icons.arrowDown14} />
            </ButtonIcon>
          </Button>

          <Typography
            type={typographyProps.types.text16}
            color={colors.lightgray[1]}
          >
            Note
          </Typography>

          <Button
            theme={buttonProps.themes.transparent}
            height={sizes.sizes[24]}
            width={sizes.sizes.parent}
            justify={buttonProps.justifies.right}
            onClick={() => handleSort(sortFields.amount)}
            isDisabled={!hasTransactions}
            {...getButtonState(sortFields.amount, sortConfig)}
          >
            <Typography type={typographyProps.types.text16}>Amount</Typography>
            <ButtonIcon>
              <Icon icon={icons.arrowDown14} />
            </ButtonIcon>
          </Button>
        </div>
        {hasTransactions ? (
          <ul className={styles['transactions-list']}>
            {sortedTransactions.map((transaction) => {
              return (
                <Transaction
                  key={transaction.id}
                  data={transaction}
                  onDelete={onDelete}
                />
              );
            })}
          </ul>
        ) : (
          <TransactionsPlaceholder />
        )}
        <div className={styles['transactions-list__footer']}>
          <Typography
            type={typographyProps.types.text12}
            color={colors.lightgray[1]}
          >
            {transactionsCount} transactions
          </Typography>
        </div>
      </div>
    </Box>
  );
};

export { FullTransactionsList };
export type { FullTransactionsListProps };
