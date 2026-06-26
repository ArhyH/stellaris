import { AMOUNT, DATE, FinanceTransferType, ICON, LABEL } from '@/shared/types';
import { Box, boxProps, BoxWrapper } from '@/shared/ui/Box';
import { FinanceTransferTypes } from '@/shared/consts';
import styles from './style.module.scss';
import { colors, sizes, CategoryColor } from '@/shared/styles';
import { formatAmount, formatTypes } from '@/shared/helpers/formatAmount';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { Icon } from '@/shared/ui/Icon';
import { icons } from '@/shared/assets';

type TransactionProps = {
  categoryIcon: ICON;
  categoryName: LABEL;
  categoryColor?: CategoryColor;
  categoryIconColor?: CategoryColor;
  date: DATE;
  amount: AMOUNT;
  note: LABEL;
  type: FinanceTransferType;
};

const Transaction = (props: TransactionProps) => {
  const {
    categoryIcon,
    categoryName,
    categoryColor,
    categoryIconColor,
    date,
    amount,
    note,
    type,
  } = props;

  return (
    <li className={styles['recent-transaction']}>
      <div className={styles['recent-transaction__cell']}>
        <Box
          size={boxProps.sizes[40]}
          radius={sizes.radiuses[12]}
          {...(categoryColor && { bgColor: colors.categoryOp[categoryColor] })}
        >
          <BoxWrapper hasAlign>
            <Icon
              icon={icons[categoryIcon]}
              color={categoryIconColor}
              width={sizes.sizes[24]}
              height={sizes.sizes[24]}
            />
          </BoxWrapper>
        </Box>
      </div>
      <div className={styles['recent-transaction__content']}>
        {note && (
          <Typography
            type={typographyProps.types.title14}
            color={colors.base.white}
          >
            {note}
          </Typography>
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

export { Transaction };
export type { TransactionProps };
