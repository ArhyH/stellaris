import { Box } from '@/shared/ui/Box';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { savingStatus } from '@/entity/saving';
import { colors } from '@/shared/styles';
import { formatAmount } from '@/shared/helpers';
import { formatTypes } from '@/shared/helpers/formatAmount';

type GoalProps = {
  amount: number;
  goal?: number;
};

const Goal = (props: GoalProps) => {
  const { amount, goal } = props;

  return (
    <Box>
      <Typography
        type={typographyProps.types.title18}
        color={
          status === savingStatus.normal ? colors.yellow[1] : colors.green[1]
        }
        textAlign={typographyProps.aligns.end}
      >
        {formatAmount({
          amount: amount,
          format: formatTypes.full,
        })}
      </Typography>
      {goal && (
        <Typography
          type={typographyProps.types.text14}
          color={colors.lightgray[3]}
        >
          from{' '}
          <Typography type={typographyProps.types.subtitle16}>
            {formatAmount({
              amount: goal,
              format: formatTypes.full,
            })}
          </Typography>
        </Typography>
      )}
    </Box>
  );
};

export { Goal };
