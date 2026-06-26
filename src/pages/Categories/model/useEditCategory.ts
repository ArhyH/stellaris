import { useState } from 'react';
import { Category } from '@/entity/category';
import { ID } from '@/shared/types';
import { CategoryItem } from '@/entity/category/model/types';

const useEditCategory = (categories: CategoryItem) => {
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleEditCategory = (id: ID) => {
    setEditingCategory(categories[id]);
    setIsEditOpen(true);
  };

  return { editingCategory, isEditOpen, setIsEditOpen, handleEditCategory };
};

export { useEditCategory };
