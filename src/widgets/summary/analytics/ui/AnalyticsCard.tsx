import { ColorToken, colors, sizes } from '@/shared/styles';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { formatAmount, formatDelta } from '@/shared/helpers';
import { AnalyticsSummary } from '../model/types';
import { Icon } from '@/shared/ui/Icon';
import {
  SummaryCard,
  SummaryCardContent,
  SummaryCardHeader,
} from '@/shared/ui/SummaryCard';
import { deltaFormatTypes } from '@/shared/helpers/delta';
import { formatTypes } from '@/shared/helpers/formatAmount';

type AnalyticsCardProps = {
  title: string;
  summary: number | null;
  icon: UtilityTypes.SvgContent;
  budgetKey: keyof AnalyticsSummary;
  delta?: number | null;
};

const getTextColor = (key: keyof AnalyticsSummary): ColorToken => {
  const color =
    key === 'income'
      ? colors.green[1]
      : key === 'expense'
        ? colors.red[1]
        : key === 'saving'
          ? colors.violet[1]
          : key === 'totalSavings'
            ? colors.blue[1]
            : colors.yellow[1];

  return color;
};

const AnalyticsCard = (props: AnalyticsCardProps) => {
  const { title, summary, budgetKey, delta, icon } = props;

  const hasDelta = delta !== null && delta !== undefined;

  return (
    <SummaryCard padding={sizes.sizes[20]} gap={sizes.sizes[12]}>
      <SummaryCardHeader>
        <Typography
          type={typographyProps.types.text14}
          color={colors.lightgray[3]}
          tag={typographyProps.tags.h3}
        >
          {title}
        </Typography>

        <Icon
          icon={icon}
          color={getTextColor(budgetKey)}
          size={sizes.sizes[20]}
        />
      </SummaryCardHeader>

      <SummaryCardContent>
        <Typography
          type={typographyProps.types.title24}
          color={getTextColor(budgetKey)}
        >
          {summary !== null && budgetKey !== 'saving'
            ? formatAmount({ amount: summary, format: formatTypes.full })
            : budgetKey === 'saving'
              ? summary !== null
                ? `${summary?.toFixed(1)}%`
                : 0
              : 0}
        </Typography>

        {hasDelta && (
          <Typography
            type={
              delta < 0 && budgetKey !== 'daily' && budgetKey !== 'expense'
                ? typographyProps.types.deltaNagative
                : typographyProps.types.deltaPositive
            }
          >
            {budgetKey === 'totalSavings'
              ? `${formatAmount({ amount: delta, format: formatTypes.full, showSign: true })} vs last month`
              : `${formatDelta(delta, deltaFormatTypes.icon)} vs last month`}
          </Typography>
        )}
      </SummaryCardContent>
    </SummaryCard>
  );
};

export { AnalyticsCard };
export type { AnalyticsCardProps };
