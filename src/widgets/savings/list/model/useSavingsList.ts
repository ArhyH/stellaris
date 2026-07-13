import { useMemo } from 'react';
import { useSavings } from '@/entity/saving/model/hooks';
import { mapSavingsToSavingItems } from './mappers';
import { Saving } from '@/entity/saving';
import { SavingsListKey } from './types';
import { useSavingOperations } from '@/entity/saving-operation/model/hooks';

const useSavingsList = () => {
  const { savingsList } = useSavings();
  const { operationsBySaving } = useSavingOperations();

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
      withGoal: mapSavingsToSavingItems(grouped.withGoal, operationsBySaving),
      withoutGoal: mapSavingsToSavingItems(
        grouped.withoutGoal,
        operationsBySaving,
      ),
    };
  }, [savingsList, operationsBySaving]);
};

export { useSavingsList };
