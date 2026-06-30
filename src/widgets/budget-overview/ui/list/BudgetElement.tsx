import classnames from 'classnames';
import { BudgetOverviewItem } from '@/entity/budget';
import { Progress } from '@/shared/ui/Progress';
import { statusColors } from '../../model/consts';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { formatAmount } from '@/shared/helpers/formatAmount';
import { colors, sizes } from '@/shared/styles';
import { Icon } from '@/shared/ui/Icon';
import { icons } from '@/shared/assets';
import { Box, BoxWrapper } from '@/shared/ui/Box';
import { Button, buttonProps } from '@/shared/ui/Button';
import styles from './style.module.scss';
import { ID } from '@/shared/types';

type BudgetElementProps = {
  budget: BudgetOverviewItem;
  onEdit: (id: ID) => void;
  onDelete: (id: ID) => void;
};

const BudgetElement = (props: BudgetElementProps) => {
  const { budget, onEdit, onDelete } = props;

  const {
    categoryName,
    categoryColor,
    categoryIconColor,
    categoryIcon,
    spent,
    limit,
    status,
    clampedProgressPercent,
    remaining,
    overflowAmount,
    id,
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
            size={sizes.sizes[40]}
            radius={sizes.radiuses[12]}
          >
            <BoxWrapper hasAlign>
              <Icon
                icon={categoryIcon ? icons[categoryIcon] : icons.wallet18}
                color={categoryIconColor}
                size={sizes.sizes[24]}
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
              {clampedProgressPercent.toFixed(1)}% used
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
              size={sizes.sizes['32']}
              onClick={() => onEdit(id)}
            >
              <Icon icon={icons.pen24} size={sizes.sizes[12]} />
            </Button>
            <Button
              theme={buttonProps.themes.red}
              size={sizes.sizes['32']}
              onClick={() => onDelete(id)}
            >
              <Icon icon={icons.trash24} size={sizes.sizes[12]} />
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

export { BudgetElement };
