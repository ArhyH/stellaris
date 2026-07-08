import styles from './style.module.scss';
import { Box } from '@/shared/ui/Box';
import { colors, sizes } from '@/shared/styles';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { FinanceTransferType } from '@/shared/types';
import { Row, rowProps } from '@/shared/ui/Row';

type PieChartPlaceholderProps = {
  date: string;
  type: FinanceTransferType;
};

const PieChartPlaceholder = (props: PieChartPlaceholderProps) => {
  const { date, type } = props;

  return (
    <Row gap={sizes.sizes[8]} align={rowProps.aligns.start}>
      <div className={styles['pie-chart__placeholder']} />

      <Box gap={sizes.sizes[8]}>
        <Typography
          type={typographyProps.types.text14}
          color={colors.lightgray[3]}
        >
          No {type} transactions for {date} yet.
        </Typography>
        <Typography
          type={typographyProps.types.text14}
          color={colors.lightgray[3]}
        >
          Add an {type} to see the category breakdown.
        </Typography>
      </Box>
    </Row>
  );
};

export { PieChartPlaceholder };
