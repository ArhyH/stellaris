import { Saving } from '@/entity/saving';
import { SavingOperation } from '@/entity/saving-operation';
import { HistoryItem } from './types';
import { ID } from '@/shared/types';

const mapSavingOperationsToHistoryItems = (
  savings: Record<ID, Saving>,
  operations: SavingOperation[],
): HistoryItem[] => {
  return operations.map((operation) => {
    const saving = savings[operation.savingId];

    return {
      id: operation.id,
      amount: operation.amount,
      date: operation.date,
      type: operation.type,
      source: operation.source,
      savingId: operation.savingId,
      sourceId: operation.sourceId,
      savingIcon: saving.icon,
      savingIconColor: saving.iconColor,
    };
  });
};

export { mapSavingOperationsToHistoryItems };
