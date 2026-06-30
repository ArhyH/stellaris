import { icons } from '@/shared/assets';
import { FinanceTransferTypes } from '@/shared/consts';
import { colors } from '@/shared/styles';
import { FinanceTransferType } from '@/shared/types';
import { FormTransaction } from './types';

const getSign = (type: FinanceTransferType) =>
  type === FinanceTransferTypes.income ? icons.plus24 : icons.minus24;

const getColor = (type: FinanceTransferType) =>
  type === FinanceTransferTypes.income ? colors.green[1] : colors.red[1];

const createTransaction = (): FormTransaction => ({
  id: new Date().toString(),
  type: FinanceTransferTypes.expense,
  date: new Date().toISOString(),
  amount: '',
  categoryId: '',
  note: '',
});

export { getSign, getColor, createTransaction };
