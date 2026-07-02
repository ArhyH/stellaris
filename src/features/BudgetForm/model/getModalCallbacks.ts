import { Dispatch, SetStateAction } from 'react';
import { FormBudget } from './types';
import { isPositiveAmount, isValidInputAmount } from '@/shared/helpers';
import { Budget } from '@/entity/budget';

const getModalCallbacks = (
  budget: FormBudget,
  setBudget: Dispatch<SetStateAction<FormBudget>>,
  onSubmit: (budget: Budget) => void,
  onClose: () => void,
  currentBudget: FormBudget,
) => {
  const onLimitChange = (limit: string) => {
    if (isValidInputAmount(limit)) {
      setBudget((prev) => ({
        ...prev,
        limit,
      }));
    }
  };

  const onCategoryChange = (categoryId: string) => {
    setBudget((prev) => ({
      ...prev,
      categoryId,
    }));
  };

  const handleSubmit = (): Budget | undefined => {
    const limit = budget.limit;

    if (!isPositiveAmount(limit)) {
      return;
    }

    const result = {
      ...budget,
      limit: Number(limit),
    };

    onSubmit(result);
  };

  const handleCancel = () => {
    onClose();
    setBudget(currentBudget);
  };

  return {
    onLimitChange,
    onCategoryChange,
    handleCancel,
    handleSubmit,
  };
};

export { getModalCallbacks };
