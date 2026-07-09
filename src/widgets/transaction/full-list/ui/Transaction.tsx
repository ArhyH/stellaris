import { ID } from '@/shared/types';
import styles from './style.module.scss';
import { colors, sizes } from '@/shared/styles';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { Box, BoxWrapper } from '@/shared/ui/Box';
import { Icon } from '@/shared/ui/Icon';
import { icons } from '@/shared/assets';
import { FinanceTransferTypes } from '@/shared/consts';
import { formatAmount } from '@/shared/helpers';
import { formatTypes } from '@/shared/helpers/formatAmount';
import { Button, buttonProps } from '@/shared/ui/Button';
import { RecentTransaction } from '../../data';

type TransactionProps = {
  data: RecentTransaction;
  onDelete: (id: ID) => void;
};

const Transaction = (props: TransactionProps) => {
  const { data, onDelete } = props;

  const {
    categoryIcon,
    categoryName,
    categoryColor,
    categoryIconColor,
    date,
    amount,
    note,
    type,
    id,
  } = data;

  if (!categoryIcon || !categoryColor || !categoryIconColor) {
    return;
  }

  return (
    <li className={styles['transactions-list__item']}>
      <Typography
        type={typographyProps.types.text14}
        color={colors.lightgray[6]}
      >
        {date}
      </Typography>
      <div className={styles['transactions-list__cell']}>
        <Box
          bgColor={colors.categoryOp[categoryColor]}
          size={sizes.sizes[32]}
          radius={sizes.radiuses[14]}
        >
          <BoxWrapper hasAlign>
            <Icon
              icon={icons[categoryIcon]}
              color={categoryIconColor}
              size={sizes.sizes[20]}
            />
          </BoxWrapper>
        </Box>
        <div>
          <Typography
            type={typographyProps.types.text14}
            color={colors.base.white}
            tag={typographyProps.tags.p}
          >
            {categoryName}
          </Typography>
          <Typography
            type={typographyProps.types.text12}
            color={
              type === FinanceTransferTypes.income
                ? colors.green[1]
                : colors.red[1]
            }
            tag={typographyProps.tags.p}
          >
            {type}
          </Typography>
        </div>
      </div>

      <Typography
        type={typographyProps.types.text14}
        color={colors.lightgray[3]}
      >
        {note}
      </Typography>
      <Typography
        type={typographyProps.types.title14}
        textAlign={typographyProps.aligns.end}
        color={
          type === FinanceTransferTypes.expense
            ? colors.red[1]
            : colors.green[1]
        }
      >
        {formatAmount({ amount: amount, format: formatTypes.full, type: type })}
      </Typography>

      <div className={styles['transactions-list__button']}>
        <Button
          size={sizes.sizes['28']}
          theme={buttonProps.themes.transparentRed}
          onClick={() => onDelete(id)}
        >
          <Icon icon={icons.trash24} size={sizes.sizes[14]} />
        </Button>
      </div>
    </li>
  );
};

export { Transaction };
export type { TransactionProps };
