import { Box, BoxWrapper, boxProps } from '@/shared/ui/Box';
import { colors, sizes } from '@/shared/styles';
import styles from './style.module.scss';
import { formatDelta } from '../model/summary';
import { DashboardSummary } from '../model/types';
import { formatAmount } from '@/shared/helpers/formatAmount';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { Icon } from '@/shared/ui/Icon';

type BudgetCardProps = {
  title: string;
  icon: UtilityTypes.SvgContent;
  summary: number;
  delta?: number | null;
  categoryKey: keyof DashboardSummary;
};

const BudgetCard = (props: BudgetCardProps) => {
  const { title, icon, summary, delta, categoryKey } = props;

  return (
    <Box
      size={boxProps.sizes.parent}
      bgColor={colors.box['gray-4']}
      grow={boxProps.grow[1]}
    >
      <div className={styles['budget-card']}>
        <div className={styles['budget-card__header']}>
          <Typography
            type={typographyProps.types.text14}
            color={colors.lightgray[3]}
            tag={typographyProps.tags.h3}
          >
            {title}
          </Typography>
          <Box
            bgColor={
              categoryKey === 'expense'
                ? colors.box['red-1-op']
                : colors.box['green-1-op']
            }
            padding={sizes.sizes[6]}
            radius={sizes.radiuses[12]}
          >
            <BoxWrapper hasAlign>
              <Icon
                icon={icon}
                color={
                  categoryKey === 'expense' ? colors.red[1] : colors.green[1]
                }
              />
            </BoxWrapper>
          </Box>
        </div>
        <div className={styles['budget-card__content']}>
          <Typography type={typographyProps.types.title30}>
            {formatAmount(summary)}
          </Typography>
          {!!delta && (
            <Typography
              type={
                (categoryKey !== 'expense' && delta < 0) ||
                (categoryKey === 'expense' && delta > 0)
                  ? typographyProps.types.deltaNagative
                  : typographyProps.types.deltaPositive
              }
            >
              {`${formatDelta(delta)} vs last month`}
            </Typography>
          )}
        </div>
      </div>
    </Box>
  );
};

export { BudgetCard };
export type { BudgetCardProps };
