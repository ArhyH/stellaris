import { Category } from '@/entity/category';
import { CategoryForm } from '../../category-form';

type EditCategoryProps = {
  category: Category | null;
  onSubmit: (category: Category) => void;
  open: boolean;
  onOpen: (value: boolean) => void;
};

const EditCategory = (props: EditCategoryProps) => {
  const { onSubmit, category, open, onOpen } = props;

  if (!category) {
    return;
  }

  return (
    <CategoryForm
      title="Edit Category"
      currentCategory={category}
      onSubmit={onSubmit}
      open={open}
      onOpen={onOpen}
    />
  );
};

export { EditCategory };
export type { EditCategoryProps };
