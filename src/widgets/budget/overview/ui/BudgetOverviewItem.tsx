import classnames from 'classnames';
import styles from './style.module.scss';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { colors, sizes } from '@/shared/styles';
import { formatAmount } from '@/shared/helpers/formatAmount';
import { Progress } from '@/shared/ui/Progress';
import { Icon } from '@/shared/ui/Icon';
import { icons } from '@/shared/assets';
import { BudgetOverviewItem as BudgetOverviewItemType } from '@/entity/budget';
import { statusColors } from '../../data';
import { Box, BoxWrapper } from '@/shared/ui/Box';

type BudgetOverviewItemProps = {
  budget: BudgetOverviewItemType;
};

const BudgetOverviewItem = (props: BudgetOverviewItemProps) => {
  const { budget } = props;
  const {
    categoryName,
    categoryIcon,
    categoryColor,
    categoryIconColor,
    spent,
    limit,
    status,
    clampedProgressPercent,
    remaining,
    overflowAmount,
  } = budget;

  return (
    <li className={styles['budget-overview__item']}>
      <div className={styles['budget-overview__row']}>
        <div
          className={classnames(
            styles['budget-overview__cell'],
            styles['gap-8'],
          )}
        >
          <Box
            size={sizes.sizes[24]}
            radius={sizes.radiuses[8]}
            bgColor={
              categoryColor
                ? colors.categoryOp[categoryColor]
                : colors.categoryOp['category-blue-1']
            }
          >
            <BoxWrapper hasAlign>
              <Icon
                icon={categoryIcon ? icons[categoryIcon] : icons.wallet18}
                color={categoryIconColor}
                size={sizes.sizes[16]}
              />
            </BoxWrapper>
          </Box>
          <Typography
            type={typographyProps.types.text14}
            color={colors.base.white}
          >
            {categoryName}
          </Typography>
        </div>
        <div className={styles['budget-overview__cell']}>
          <Typography
            type={typographyProps.types.title14}
            color={statusColors[status]}
          >
            {formatAmount(spent)}
          </Typography>
          <Typography
            type={typographyProps.types.title14}
            color={colors.lightgray[3]}
          >
            &#160;/ {formatAmount(limit)}
          </Typography>
        </div>
      </div>
      <div className={styles['budget-overview__row']}>
        <Progress
          color={statusColors[status]}
          min={0}
          max={limit}
          percent={clampedProgressPercent}
        />
      </div>
      <div
        className={classnames(
          styles['budget-overview__row'],
          styles['justify-end'],
        )}
      >
        <div className={styles['budget-overview__cell']}>
          {remaining > 0 ? (
            <Typography
              type={typographyProps.types.text12}
              color={colors.lightgray[2]}
            >
              {formatAmount(remaining)} remaining
            </Typography>
          ) : (
            <Typography
              type={typographyProps.types.text12}
              color={colors.red[1]}
            >
              {formatAmount(overflowAmount)} over
            </Typography>
          )}
        </div>
      </div>
    </li>
  );
};

export { BudgetOverviewItem };
export type { BudgetOverviewItemProps };
