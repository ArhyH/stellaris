import { Row } from '@/shared/ui/Row';
import { colors, sizes } from '@/shared/styles';
import { Icon } from '@/shared/ui/Icon';
import { icons } from '@/shared/assets';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { formatAmount } from '@/shared/helpers';
import { formatTypes } from '@/shared/helpers/formatAmount';

type InfoProps = {
  amount: number;
  remaining?: number;
  overflow?: number;
};

const Info = (props: InfoProps) => {
  const { amount, remaining, overflow } = props;

  return (
    <Row gap={sizes.sizes[8]}>
      <Icon
        icon={icons.piggyBank24}
        size={sizes.sizes[24]}
        color={colors.blue[1]}
      />

      <Typography
        type={typographyProps.types.text12}
        color={colors.lightgray[3]}
      >
        {formatAmount({
          amount: amount,
          format: formatTypes.full,
        })}{' '}
        saved
      </Typography>

      <Typography
        type={typographyProps.types.text12}
        color={colors.lightgray[3]}
      >
        /
      </Typography>

      {!remaining && !overflow && (
        <Typography
          type={typographyProps.types.text14}
          color={colors.lightgray[3]}
        >
          No target set
        </Typography>
      )}

      {remaining && remaining >= 0 ? (
        <Typography
          type={typographyProps.types.text12}
          color={colors.lightgray[3]}
        >
          {formatAmount({
            amount: remaining,
            format: formatTypes.full,
          })}{' '}
          left
        </Typography>
      ) : null}

      {overflow && overflow > 0 ? (
        <Typography type={typographyProps.types.text12} color={colors.green[1]}>
          {formatAmount({
            amount: overflow,
            format: formatTypes.full,
          })}{' '}
          over
        </Typography>
      ) : null}
    </Row>
  );
};

export { Info };
