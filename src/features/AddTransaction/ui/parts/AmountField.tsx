import { Box, boxProps } from '@/shared/ui/Box';
import { colors, sizes } from '@/shared/styles';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { Row } from '@/shared/ui/Row';
import { getColor, getSign } from '../../model/helpers';
import { FinanceTransferType } from '@/shared/types';
import { Input, inputProps } from '@/shared/ui/Input';
import { Icon } from '@/shared/ui/Icon';

type AmountFieldProps = {
  type: FinanceTransferType;
  amount: string;
  onValueChange: (value: string) => void;
};

const AmountField = (props: AmountFieldProps) => {
  const { type, amount, onValueChange } = props;

  return (
    <Box
      bgColor={colors.gray[1]}
      padding={sizes.sizes[16]}
      radius={sizes.radiuses[16]}
      gap={sizes.sizes[4]}
      size={boxProps.sizes.parent}
    >
      <Typography
        type={typographyProps.types.text12}
        textTransform={typographyProps.transforms.uppercase}
        color={colors.lightgray[2]}
        textAlign={typographyProps.aligns.center}
      >
        Amount
      </Typography>

      <Row color={getColor(type)}>
        <Input
          placeholder="0"
          name="transaction-amount"
          value={amount}
          theme={inputProps.themes.inherit}
          type={inputProps.types.transaction}
          onChange={onValueChange}
          sign={
            <>
              <Icon icon={getSign(type)} size={sizes.sizes[40]} />

              <Typography type={typographyProps.types.title40}>$</Typography>
            </>
          }
        />
      </Row>
    </Box>
  );
};

export { AmountField };
