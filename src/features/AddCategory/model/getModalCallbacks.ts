import { Dispatch, SetStateAction } from 'react';
import { Category } from '@/entity/category';
import { IconName } from '@/shared/assets';
import { CategoryColor } from '@/shared/styles';
import { FinanceTransferType } from '@/shared/types';
import { createInitialCategory } from './heplers';

const getModalCallbacks = (setCategory: Dispatch<SetStateAction<Category>>) => {
  const onClose = () => {
    setCategory(createInitialCategory());
  };

  const onNameChange = (name: string) => {
    setCategory((prevCategory) => ({
      ...prevCategory,
      name,
    }));
  };

  const onTypeChange = (type: FinanceTransferType) => {
    setCategory((prevCategory) => ({
      ...prevCategory,
      type,
    }));
  };

  const onIconChange = (icon: IconName) => {
    setCategory((prevCategory) => ({
      ...prevCategory,
      icon,
    }));
  };

  const onCategoryColorChange = (color: CategoryColor) => {
    setCategory((prevCategory) => ({
      ...prevCategory,
      color,
    }));
  };

  const onIconColorChange = (iconColor: CategoryColor) => {
    setCategory((prevCategory) => ({
      ...prevCategory,
      iconColor,
    }));
  };

  return {
    onClose,
    onNameChange,
    onTypeChange,
    onIconChange,
    onCategoryColorChange,
    onIconColorChange,
  };
};

export { getModalCallbacks };
