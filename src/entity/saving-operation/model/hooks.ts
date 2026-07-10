import { useMemo } from 'react';
import { useSavingStore } from './store';

const useSavingOperations = () => {
  const savingOperations = useSavingStore((state) => state.savingOperations);

  const savingOperationsList = useMemo(
    () => Object.values(savingOperations),
    [savingOperations],
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

    addSavingOperation,
    deleteSavingOperation,
    initSavingOperations,
  };
};

export { useSavingOperations };
