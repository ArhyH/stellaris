import { Typography, typographyProps } from '@/shared/ui/Typography';
import { colors, sizes } from '@/shared/styles';
import { Box, BoxHeader } from '@/shared/ui/Box';
import { TopSpendingCategory } from '../model/types';
import { Icon } from '@/shared/ui/Icon';
import { icons } from '@/shared/assets';

type TopSpendingProps = {
  data: TopSpendingCategory | undefined;
  date: string;
};

const TopSpending = (props: TopSpendingProps) => {
  const { data, date } = props;

  if (!data) {
    return;
  }

  const { categoryName, categoryColor, categoryIconColor, amount, percent } =
    data;

  return (
    <Box padding={sizes.sizes[24]}>
      <BoxHeader paddingBottom={sizes.sizes[16]}>
        <Typography
          type={typographyProps.types.title14}
          color={colors.base.white}
          tag={typographyProps.tags.h3}
        >
          Top Spending
        </Typography>
        <Typography
          type={typographyProps.types.text12}
          color={colors.lightgray[2]}
        >
          {date}
        </Typography>
      </BoxHeader>
      <Box
        bgColor={colors.categoryOp[categoryColor]}
        gap={sizes.sizes[4]}
        padding={sizes.sizes[16]}
        hasAlign
      >
        <Icon
          icon={icons.wallet18}
          size={sizes.sizes[36]}
          color={categoryIconColor}
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
    </Box>
  );
};

export { TopSpending };
export type { TopSpendingProps };
