import { AMOUNT, DATE, FinanceTransferType, ICON, LABEL } from '@/shared/types';
import { Box, boxProps, BoxWrapper } from '@/shared/ui/Box';
import { FinanceTransferTypes } from '@/shared/consts';
import styles from './style.module.scss';
import { colors, sizes, CategoryColor } from '@/shared/styles';
import { formatAmount, formatTypes } from '@/shared/helpers/formatAmount';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { Icon } from '@/shared/ui/Icon';
import { icons } from '@/shared/assets';

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
          {...(categoryColor && { bgColor: colors.categoryOp[categoryColor] })}
        >
          <BoxWrapper hasAlign>
            <Icon icon={icons[categoryIcon]} />
          </BoxWrapper>
        </Box>
      </div>
      <div className={styles['recent-transaction__content']}>
        {note && (
          <Typography type={typographyProps.types.title14}>{note}</Typography>
        )}
        <Typography
          type={typographyProps.types.text12}
          color={colors.lightgray[2]}
        >
          {categoryName} &middot; ${date}
        </Typography>
      </div>
      <div className={styles['recent-transaction__cell']}>
        <Typography
          type={typographyProps.types.transaction}
          color={
            type === FinanceTransferTypes.expense
              ? colors.red[1]
              : colors.green[1]
          }
        >
          {formatAmount(amount, formatTypes.full, type)}
        </Typography>
      </div>
    </li>
  );
};

export { RecentTransaction };
export type { RecentTransactionProps };
