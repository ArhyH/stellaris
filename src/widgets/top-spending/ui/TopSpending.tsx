import { ContentCard, ContentCardHeader } from '@/features/ContentCard';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { colors, sizes } from '@/shared/styles';
import { Box } from '@/shared/ui/Box';
import { TopSpendingCategory } from '../model/types';
import { Icon } from '@/shared/ui/Icon';
import { icons } from '@/shared/assets';

type TopSpendingProps = {
  data: TopSpendingCategory | undefined;
};

const TopSpending = (props: TopSpendingProps) => {
  const { data } = props;

  if (!data) {
    return (
      <ContentCard>
        <Typography
          type={typographyProps.types.title16}
          color={colors.base.white}
          tag={typographyProps.tags.h3}
        >
          Top Spending Category undefined
        </Typography>
      </ContentCard>
    );
  }

  const { categoryName, categoryColor, amount, percent } = data;

  return (
    <ContentCard>
      <ContentCardHeader paddingBottom={sizes.sizes[16]}>
        <Typography
          type={typographyProps.types.title14}
          color={colors.base.white}
          tag={typographyProps.tags.h3}
        >
          Top Spending
        </Typography>
      </ContentCardHeader>
      <Box
        bgColor={colors.categoryOp[categoryColor]}
        gap={sizes.sizes[4]}
        padding={sizes.sizes[16]}
        hasAlign
      >
        <Icon
          icon={icons.wallet18}
          width={sizes.sizes[36]}
          height={sizes.sizes[36]}
        />

        <Typography
          type={typographyProps.types.title16}
          color={colors.base.white}
          tag={typographyProps.tags.h3}
        >
          {categoryName}
        </Typography>

        <Typography
          type={typographyProps.types.title24}
          color={colors.category[categoryColor]}
          tag={typographyProps.tags.h3}
        >
          ${amount}
        </Typography>

        <Typography
          type={typographyProps.types.text12}
          color={colors.lightgray[3]}
        >
          {percent}% of total expenses
        </Typography>
      </Box>
    </ContentCard>
  );
};

export { TopSpending };
export type { TopSpendingProps };
