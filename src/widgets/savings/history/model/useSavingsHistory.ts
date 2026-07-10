import { SavingOperation } from '@/entity/saving-operation';
import { useSavings } from '@/entity/saving/model/hooks';
import { useMemo } from 'react';
import { mapSavingOperationsToHistoryItems } from './mappers';

const useSavingsHistory = (savingOperations: SavingOperation[]) => {
  const { savingsById } = useSavings();

  return useMemo(
    () => mapSavingOperationsToHistoryItems(savingsById, savingOperations),
    [savingsById, savingOperations],
  );
};

export { useSavingsHistory };
