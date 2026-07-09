import styles from './style.module.scss';
import { colors, sizes } from '@/shared/styles';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { Box } from '@/shared/ui/Box';

const BudgetsPlaceholder = () => {
  return (
    <Box gap={sizes.sizes[20]} bgColor={colors.base.transparent}>
      <Typography
        type={typographyProps.types.text16}
        color={colors.lightgray[3]}
      >
        No budgets yet. Create budget to see an overview.
      </Typography>

      <div className={styles['budget-overview__placeholder']} />

      <div className={styles['budget-overview__placeholder']} />
    </Box>
  );
};

export { BudgetsPlaceholder };
