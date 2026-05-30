import classnames from 'classnames';
import { BudgetOverviewItem } from '@/entity/budget';
import { Progress } from '@/shared/ui/Progress';
import { statusColors } from '../../model/consts';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { formatAmount } from '@/shared/helpers/formatAmount';
import { colors, sizes } from '@/shared/styles';
import { Icon } from '@/shared/ui/Icon';
import { icons } from '@/shared/assets';
import { Box, BoxWrapper, boxProps } from '@/shared/ui/Box';
import { Button, buttonProps } from '@/shared/ui/Button';
import styles from './style.module.scss';

type BudgetItemProps = {
  budget: BudgetOverviewItem;
};

const BudgetItem = (props: BudgetItemProps) => {
  const { budget } = props;
  const {
    categoryName,
    categoryColor,
    categoryIcon,
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
            styles['gap-12'],
          )}
        >
          <Box
            bgColor={
              categoryColor
                ? colors.categoryOp[categoryColor]
                : colors.categoryOp['category-blue-1']
            }
            size={boxProps.sizes[40]}
          >
            <BoxWrapper hasAlign>
              <Icon
                icon={categoryIcon ? icons[categoryIcon] : icons.wallet18}
              />
            </BoxWrapper>
          </Box>

          <div className={styles['budget-overview__column']}>
            <Typography
              type={typographyProps.types.text14}
              color={colors.base.white}
            >
              {categoryName}
            </Typography>
            <Typography
              type={typographyProps.types.text12}
              color={colors.lightgray[2]}
            >
              {clampedProgressPercent}% used
            </Typography>
          </div>
        </div>

        <div
          className={classnames(
            styles['budget-overview__cell'],
            styles['gap-12'],
          )}
        >
          <div className={styles['budget-overview__column']}>
            <Typography
              type={typographyProps.types.title18}
              color={statusColors[status]}
            >
              {formatAmount(spent)}
            </Typography>
            <Typography
              type={typographyProps.types.text14}
              color={colors.lightgray[3]}
            >
              of {formatAmount(limit)}
            </Typography>
          </div>

          <div className={styles['budget-overview__buttons']}>
            <Button
              theme={buttonProps.themes.lightgray}
              size={buttonProps.sizes['32x32']}
            >
              <Icon
                icon={icons.pen24}
                width={sizes.sizes[12]}
                height={sizes.sizes[12]}
              />
            </Button>
            <Button
              theme={buttonProps.themes.red}
              size={buttonProps.sizes['32x32']}
            >
              <Icon
                icon={icons.trash24}
                width={sizes.sizes[12]}
                height={sizes.sizes[12]}
              />
            </Button>
          </div>
        </div>
      </div>

      <div
        className={classnames(
          styles['budget-overview__row'],
          styles['m-top-4'],
        )}
      >
        <Progress
          color={statusColors[status]}
          min={0}
          max={limit}
          percent={clampedProgressPercent}
        />
      </div>

      <div className={styles['budget-overview__row']}>
        <div className={styles['budget-overview__cell']}>
          <Typography
            type={typographyProps.types.text12}
            color={colors.lightgray[1]}
          >
            {formatAmount(spent)} spent
          </Typography>
        </div>

        <div className={styles['budget-overview__cell']}>
          {remaining > 0 ? (
            <Typography
              type={typographyProps.types.text12}
              color={colors.lightgray[1]}
            >
              {formatAmount(remaining)} left
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

export { BudgetItem };
export type { BudgetItemProps };
