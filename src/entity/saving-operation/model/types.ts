import { AMOUNT, DATE, ID } from '@/shared/types';
import { savingOperationSources, savingOperationTypes } from './consts';
import { ValueOf } from 'type-fest';

type SavingOperationType = keyof typeof savingOperationTypes;
type SavingOperationSource = ValueOf<typeof savingOperationSources>;

interface SavingOperation {
  id: ID;
  type: SavingOperationType;
  savingId: ID;
  source: SavingOperationSource;
  amount: AMOUNT;
  date: DATE;
  sourceId?: ID;
}

type SavingOperationItem = Record<string, SavingOperation>;

export type {
  SavingOperation,
  SavingOperationType,
  SavingOperationSource,
  SavingOperationItem,
};
