import { SummaryCard } from '@/shared/ui/SummaryCard';
import { SummaryKey } from '../model/types';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { colors } from '@/shared/styles';

type CategoryCardProps = {
  title: string;
  summary: number;
  budgetKey: SummaryKey;
};

const getTextColor = (key: SummaryKey) => {
  const color =
    key === 'total'
      ? colors.violet[1]
      : key === 'income'
        ? colors.green[1]
        : colors.red[1];

  return color;
};

const CategoryCard = (props: CategoryCardProps) => {
  const { title, summary, budgetKey } = props;

  return (
    <SummaryCard>
      <Typography
        type={typographyProps.types.text12}
        color={colors.lightgray[3]}
        tag={typographyProps.tags.h3}
      >
        {title}
      </Typography>

      <Typography
        type={typographyProps.types.title28}
        color={getTextColor(budgetKey)}
      >
        {summary}
      </Typography>
    </SummaryCard>
  );
};

export { CategoryCard };
export type { CategoryCardProps };
