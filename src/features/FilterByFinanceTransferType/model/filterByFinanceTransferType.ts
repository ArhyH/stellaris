import { FinanceTransferTypes } from '@/shared/consts';
import { FinanceTransferType } from '@/shared/types';

const filterDataByFinanceTransferType = <
  T extends { type: FinanceTransferType | undefined },
>(
  data: T[],
  type: FinanceTransferType,
) => {
  if (!type) {
    return data;
  }

  if (type === FinanceTransferTypes.all) {
    return data;
  }

  return [...data].filter((item) => item.type === type);
};

export { filterDataByFinanceTransferType };
