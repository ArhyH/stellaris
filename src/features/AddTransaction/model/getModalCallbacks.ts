import { Dispatch, SetStateAction } from 'react';

import { FinanceTransferType, ID } from '@/shared/types';
import { Transaction } from '@/entity/transaction';
import { formatDate } from '@/shared/helpers/formatDate';
import { FormTransaction } from './types';
import {
  capitalizeFirstLetter,
  isPositiveAmount,
  isValidInputAmount,
} from '@/shared/helpers';

const getModalCallbacks = (
  transaction: FormTransaction,
  setTransaction: Dispatch<SetStateAction<FormTransaction>>,
  onSubmit: (transaction: Transaction) => void,
) => {
  const onTypeChange = (type: FinanceTransferType) => {
    setTransaction((prev) => ({
      ...prev,
      type,
      categoryId: '',
    }));
  };

  const onValueChange = (amount: string) => {
    if (isValidInputAmount(amount)) {
      setTransaction((prev) => ({
        ...prev,
        amount,
      }));
    }
  };

  const onValueButtonClick = (value: string) => {
    setTransaction((prev) => {
      const amount =
        value === 'delete' ? prev.amount.slice(0, -1) : prev.amount + value;

      if (!isValidInputAmount(amount)) {
        return prev;
      }

      return {
        ...prev,
        amount,
      };
    });
  };

  const onCategoryButtonClick = (categoryId: ID) => {
    setTransaction((prev) => ({
      ...prev,
      categoryId,
    }));
  };

  const onDateChange = (date: string) => {
    setTransaction((prev) => ({
      ...prev,
      date,
    }));
  };

  const onNoteChange = (note: string) => {
    setTransaction((prev) => ({
      ...prev,
      note: capitalizeFirstLetter(note),
    }));
  };

  const handleSubmit = (): Transaction | undefined => {
    const amount = transaction.amount;
    const date = transaction.date;

    if (!isPositiveAmount(amount)) {
      return;
    }

    const result = {
      ...transaction,
      amount: Number(amount),
      date: formatDate(new Date(date)),
    };

    onSubmit(result);
  };

  return {
    onTypeChange,
    onValueChange,
    onValueButtonClick,
    onCategoryButtonClick,
    onDateChange,
    onNoteChange,
    handleSubmit,
  };
};

export { getModalCallbacks };
