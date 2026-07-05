import { useState } from 'react';
import { Category, useCategories } from '@/entity/category';
import { ID } from '@/shared/types';

const useEditCategory = () => {
  const { categories } = useCategories();
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleEditCategory = (id: ID) => {
    setEditingCategory(categories[id]);
    setIsEditOpen(true);
  };

  return { editingCategory, isEditOpen, setIsEditOpen, handleEditCategory };
};

export { useEditCategory };
