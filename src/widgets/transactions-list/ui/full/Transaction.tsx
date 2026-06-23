import { AMOUNT, DATE, FinanceTransferType, ICON, LABEL } from '@/shared/types';
import styles from './style.module.scss';
import { CategoryColor, colors, sizes } from '@/shared/styles';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { Box, BoxWrapper, boxProps } from '@/shared/ui/Box';
import { Icon } from '@/shared/ui/Icon';
import { icons } from '@/shared/assets';
import { FinanceTransferTypes } from '@/shared/consts';
import { formatAmount } from '@/shared/helpers';
import { formatTypes } from '@/shared/helpers/formatAmount';
import { Button, buttonProps } from '@/shared/ui/Button';

type TransactionProps = {
  categoryIcon: ICON;
  categoryName: LABEL;
  categoryColor?: CategoryColor;
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
    date,
    amount,
    note,
    type,
  } = props;

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
          bgColor={
            categoryColor
              ? colors.categoryOp[categoryColor]
              : colors.categoryOp['category-blue-1']
          }
          size={boxProps.sizes[32]}
          radius={sizes.radiuses[14]}
        >
          <BoxWrapper hasAlign>
            <Icon
              icon={icons[categoryIcon]}
              color={categoryColor}
              width={sizes.sizes[20]}
              height={sizes.sizes[20]}
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
        {formatAmount(amount, formatTypes.full, type)}
      </Typography>

      <div className={styles['transactions-list__button']}>
        <Button
          size={buttonProps.sizes['28x28']}
          theme={buttonProps.themes.red}
        >
          <Icon
            icon={icons.trash24}
            width={sizes.sizes[14]}
            height={sizes.sizes[14]}
          />
        </Button>
      </div>
    </li>
  );
};

export { Transaction };
export type { TransactionProps };
