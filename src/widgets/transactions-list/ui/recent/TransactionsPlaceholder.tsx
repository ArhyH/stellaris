import styles from './style.module.scss';
import { colors, sizes } from '@/shared/styles';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { Box } from '@/shared/ui/Box';

const TransactionsPlaceholder = () => {
  return (
    <Box gap={sizes.sizes[20]} bgColor={colors.base.transparent}>
      <Typography
        type={typographyProps.types.text16}
        color={colors.lightgray[3]}
      >
        No transactions yet. Add your transaction to start tracking your
        finances.
      </Typography>

      <div className={styles['recent-transaction__placeholder']} />

      <div className={styles['recent-transaction__placeholder']} />
    </Box>
  );
};

export { TransactionsPlaceholder };
