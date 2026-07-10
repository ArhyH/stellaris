import { useTransactions } from '@/entity/transaction';
import { getPlaceholderOption, getSelectOptions } from './helpers';
import { useMemo } from 'react';

const useDateSelect = (transactionsKey: string | undefined) => {
  const { transactionsDateKeys } = useTransactions();

  const currentDate = new Date().toISOString().slice(0, 7);

  const hasTransactions = transactionsDateKeys.includes(currentDate);

  const index = transactionsKey
    ? transactionsDateKeys.indexOf(transactionsKey)
    : -1;

  const isPrevDisabled = index <= 0;
  const isNextDisabled =
    index === -1 || index === transactionsDateKeys.length - 1;

  const setectOptions = useMemo(
    () => getSelectOptions(transactionsDateKeys),
    [transactionsDateKeys],
  );

  const placeholder = useMemo(
    () =>
      getPlaceholderOption(hasTransactions, transactionsDateKeys, currentDate),
    [hasTransactions, transactionsDateKeys, currentDate],
  );

  return {
    index,
    isPrevDisabled,
    isNextDisabled,
    setectOptions,
    placeholder,
    transactionsDateKeys,
  };
};

export { useDateSelect };
