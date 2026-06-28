import { icons } from '@/shared/assets';
import { FinanceTransferTypes } from '@/shared/consts';
import { colors } from '@/shared/styles';
import { FinanceTransferType } from '@/shared/types';

const isPositiveAmount = (amount: string) =>
  !Number(amount) || Number(amount) <= 0 ? false : true;

const getSign = (type: FinanceTransferType) =>
  type === FinanceTransferTypes.income ? icons.plus24 : icons.minus24;

const getColor = (type: FinanceTransferType) =>
  type === FinanceTransferTypes.income ? colors.green[1] : colors.red[1];

const isValidInputAmount = (amount: string) => {
  return (
    amount === '' || amount === '0' || /^(0|[1-9]\d*)(\.\d{0,2})?$/.test(amount)
  );
};

export { isPositiveAmount, getSign, getColor, isValidInputAmount };
