import { useMemo } from 'react';
import { useSavingStore } from './store';
import { indexBy } from '@/shared/helpers';

const useSavings = () => {
  const savings = useSavingStore((state) => state.savings);

  const savingsList = useMemo(() => Object.values(savings), [savings]);

  const savingsById = useMemo(
    () => indexBy(savingsList, (s) => s.id),
    [savingsList],
  );

  const addSaving = useSavingStore((state) => state.addSaving);

  const deleteSaving = useSavingStore((state) => state.deleteSaving);

  const initSavings = useSavingStore((state) => state.initSavings);

  return {
    savings,
    savingsList,
    savingsById,

    addSaving,
    deleteSaving,
    initSavings,
  };
};

export { useSavings };
