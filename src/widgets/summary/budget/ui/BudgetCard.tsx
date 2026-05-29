import { ColorToken, colors } from '@/shared/styles';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { formatAmount } from '@/shared/helpers/formatAmount';
import { BudgetsSummary, SummaryKey } from '../model/types';
import { SummaryCard } from '@/shared/ui/SummaryCard';

type BudgetCardProps = {
  title: string;
  summary: number;
  budgetKey: SummaryKey;
};

const getTextColor = (key: keyof BudgetsSummary): ColorToken => {
  const color =
    key === 'total'
      ? colors.violet[1]
      : key === 'remaining'
        ? colors.green[1]
        : colors.red[1];

  return color;
};

const BudgetCard = (props: BudgetCardProps) => {
  const { title, summary, budgetKey } = props;
  return (
    <SummaryCard>
      <Typography
        type={typographyProps.types.text14}
        color={colors.lightgray[3]}
        tag={typographyProps.tags.h3}
      >
        {title}
      </Typography>

      <Typography
        type={typographyProps.types.title20}
        color={getTextColor(budgetKey)}
      >
        {budgetKey !== 'over'
          ? formatAmount(summary)
          : summary > 1
            ? `${summary} categories`
            : `${summary} category`}
      </Typography>
    </SummaryCard>
  );
};

export { BudgetCard };
export type { BudgetCardProps };
