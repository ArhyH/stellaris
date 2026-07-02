import { Dispatch, SetStateAction } from 'react';

import { FinanceTransferType, ID } from '@/shared/types';
import { Transaction } from '@/entity/transaction';
import { formatDate } from '@/shared/helpers/formatDate';
import { FormTransaction } from './types';
import { isPositiveAmount, isValidInputAmount } from '@/shared/helpers';

const getModalCallbacks = (
  transaction: FormTransaction,
  setTransaction: Dispatch<SetStateAction<FormTransaction>>,
  onSubmit: (transaction: Transaction) => void,
) => {
  const onTypeChange = (type: FinanceTransferType) => {
    setTransaction((prevTransaction) => ({
      ...prevTransaction,
      type,
      categoryId: '',
    }));
  };

  const onValueChange = (amount: string) => {
    if (isValidInputAmount(amount)) {
      setTransaction((prevTransaction) => ({
        ...prevTransaction,
        amount,
      }));
    }
  };

  const onValueButtonClick = (value: string) => {
    setTransaction((prevTransaction) => {
      const amount =
        value === 'delete'
          ? prevTransaction.amount.slice(0, -1)
          : prevTransaction.amount + value;

      if (!isValidInputAmount(amount)) {
        return prevTransaction;
      }

      return {
        ...prevTransaction,
        amount,
      };
    });
  };

  const onCategoryButtonClick = (categoryId: ID) => {
    setTransaction((prevTransaction) => ({
      ...prevTransaction,
      categoryId,
    }));
  };

  const onDateChange = (date: string) => {
    setTransaction((prevTransaction) => ({
      ...prevTransaction,
      date,
    }));
  };

  const onNoteChange = (note: string) => {
    setTransaction((prevTransaction) => ({
      ...prevTransaction,
      note,
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
