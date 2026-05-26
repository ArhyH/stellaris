import { Box, BoxWrapper } from '@/shared/ui/Box';
import { colors, sizes } from '@/shared/styles';
import { DashboardSummary } from '../model/types';
import { formatAmount } from '@/shared/helpers/formatAmount';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { Icon } from '@/shared/ui/Icon';
import { formatDelta } from '@/shared/helpers';
import {
  SummaryCard,
  SummaryCardContent,
  SummaryCardHeader,
} from '@/shared/ui/SummaryCard';

type DashboardCardProps = {
  title: string;
  icon: UtilityTypes.SvgContent;
  summary: number;
  delta?: number | null;
  categoryKey: keyof DashboardSummary;
};

const DashboardCard = (props: DashboardCardProps) => {
  const { title, icon, summary, delta, categoryKey } = props;

  return (
    <SummaryCard gap={sizes.sizes[20]} padding={sizes.sizes[24]}>
      <SummaryCardHeader>
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
      </SummaryCardHeader>
      <SummaryCardContent>
        <Typography
          type={typographyProps.types.title30}
          color={colors.base.white}
        >
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
      </SummaryCardContent>
    </SummaryCard>
  );
};

export { DashboardCard };
export type { DashboardCardProps };
