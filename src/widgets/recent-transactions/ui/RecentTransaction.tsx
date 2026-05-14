import classnames from 'classnames';
import {
  AMOUNT,
  DATE,
  FinanceTransferType,
  ICON,
  LABEL,
} from '@/shared/types/types';
import { Box, boxProps, BoxWrapper } from '@/shared/ui/Box';
import { FinanceTransferTypes } from '@/shared/consts/consts';
import { formatAmount } from '../model/helpers';
import styles from './style.module.scss';
import { colors, sizes } from '@/shared/styles';
import { CategoryColor } from '@/shared/styles/colors/consts';

type RecentTransactionProps = {
  categoryIcon: ICON;
  categoryName: LABEL;
  categoryColor?: CategoryColor;
  date: DATE;
  amount: AMOUNT;
  note: LABEL;
  type: FinanceTransferType;
};

const RecentTransaction = (props: RecentTransactionProps) => {
  const {
    categoryIcon,
    categoryName,
    categoryColor,
    date,
    amount,
    note,
    type,
  } = props;

  return (
    <li className={styles['recent-transaction']}>
      <div className={styles['recent-transaction__cell']}>
        <Box
          size={boxProps.sizes[30]}
          radius={sizes.radiuses[12]}
          {...(categoryColor && { bgColor: colors.category[categoryColor] })}
        >
          <BoxWrapper hasAlign>{categoryIcon}</BoxWrapper>
        </Box>
      </div>
      <div className={styles['recent-transaction__content']}>
        {note && <p className={styles['recent-transaction__title']}>{note}</p>}
        <p className={styles['recent-transaction__description']}>
          {categoryName} &middot; {date}
        </p>
      </div>
      <div
        className={classnames(styles['recent-transaction__cell'], {
          [styles['is-red']]: type === FinanceTransferTypes.expense,
        })}
      >
        {formatAmount(amount, type)}
      </div>
    </li>
  );
};

export { RecentTransaction };
export type { RecentTransactionProps };
