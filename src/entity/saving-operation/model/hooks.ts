import { useMemo } from 'react';
import { useSavingStore } from './store';
import { groupBy } from '@/shared/helpers';

const useSavingOperations = () => {
  const savingOperations = useSavingStore((state) => state.savingOperations);

  const savingOperationsList = useMemo(
    () => Object.values(savingOperations),
    [savingOperations],
  );

  const operationsBySaving = useMemo(
    () => groupBy(savingOperationsList, (o) => o.savingId),
    [savingOperationsList],
  );

  const addSavingOperation = useSavingStore(
    (state) => state.addSavingOperation,
  );

  const deleteSavingOperation = useSavingStore(
    (state) => state.deleteSavingOperation,
  );

  const initSavingOperations = useSavingStore(
    (state) => state.initSavingOperations,
  );

  return {
    savingOperations,
    savingOperationsList,
    operationsBySaving,

    addSavingOperation,
    deleteSavingOperation,
    initSavingOperations,
  };
};

export { useSavingOperations };
