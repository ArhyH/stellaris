import { useMemo } from 'react';
import { SavingOperation } from '@/entity/saving-operation';
import { useSavings } from '@/entity/saving/model/hooks';
import { mapSavingsToSavingItems } from './mappers';
import { Saving } from '@/entity/saving';
import { SavingsListKey } from './types';

const useSavingsList = (savingOperations: SavingOperation[]) => {
  const { savingsList } = useSavings();

  return useMemo(() => {
    const grouped = savingsList.reduce<Record<SavingsListKey, Saving[]>>(
      (acc, saving) => {
        const hasGoal = saving.goal > 0;

        if (hasGoal) {
          acc.withGoal.push(saving);
        }

        if (!hasGoal) {
          acc.withoutGoal.push(saving);
        }

        return acc;
      },
      {
        withGoal: [],
        withoutGoal: [],
      },
    );

    return {
      withGoal: mapSavingsToSavingItems(grouped.withGoal, savingOperations),
      withoutGoal: mapSavingsToSavingItems(
        grouped.withoutGoal,
        savingOperations,
      ),
    };
  }, [savingsList, savingOperations]);
};

export { useSavingsList };
