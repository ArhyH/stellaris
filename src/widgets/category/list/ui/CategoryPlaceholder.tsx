import styles from './style.module.scss';
import { Box } from '@/shared/ui/Box';
import { colors, sizes } from '@/shared/styles';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { Row } from '@/shared/ui/Row';

const CategoryPlaceholder = () => {
  return (
    <Box gap={sizes.sizes[20]} bgColor={colors.base.transparent}>
      <Typography
        type={typographyProps.types.text16}
        color={colors.lightgray[3]}
      >
        No categories yet. Create category to organize your transactions.
      </Typography>

      <Row gap={sizes.sizes[16]}>
        <div className={styles.categories__placeholder} />
        <div className={styles.categories__placeholder} />
      </Row>
    </Box>
  );
};

export { CategoryPlaceholder };
