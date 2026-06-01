import { SummaryKey } from '../model/types';
import { AMOUNT } from '@/shared/types';
import { ColorToken, colors, sizes } from '@/shared/styles';
import { SummaryCard, SummaryCardContent } from '@/shared/ui/SummaryCard';
import { Box, BoxWrapper, boxProps } from '@/shared/ui/Box';
import { Icon } from '@/shared/ui/Icon';
import { icons } from '@/shared/assets';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { formatAmount } from '@/shared/helpers';
import { Row } from '@/shared/ui/Row/Row';

type TransactionCardProps = {
  title: string;
  summary: number;
  budgetKey: SummaryKey;
};

const getTextColor = (key: SummaryKey, summary: AMOUNT): ColorToken => {
  const color =
    key !== 'expense' && summary > 0 ? colors.green[1] : colors.red[1];

  return color;
};

const TransactionCard = (props: TransactionCardProps) => {
  const { title, summary, budgetKey } = props;

  return (
    <SummaryCard>
      <Row gap={sizes.sizes[16]}>
        <Box
          bgColor={
            budgetKey === 'expense' ? colors.label.red : colors.label.green
          }
          size={boxProps.sizes[40]}
        >
          <BoxWrapper hasAlign>
            <Icon
              icon={
                budgetKey === 'expense' ? icons.arrowDown18 : icons.arrowUp18
              }
              color={budgetKey === 'expense' ? colors.red[1] : colors.green[1]}
            />
          </BoxWrapper>
        </Box>
        <SummaryCardContent>
          <Typography
            type={typographyProps.types.text12}
            color={colors.lightgray[3]}
            tag={typographyProps.tags.h3}
          >
            {title}
          </Typography>

          <Typography
            type={typographyProps.types.title18}
            color={getTextColor(budgetKey, summary)}
          >
            {formatAmount(summary)}
          </Typography>
        </SummaryCardContent>
      </Row>
    </SummaryCard>
  );
};

export { TransactionCard };
export type { TransactionCardProps };
