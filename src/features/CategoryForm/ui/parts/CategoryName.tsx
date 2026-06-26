import { Input } from '@/shared/ui/Input';

type CategoryNameProps = {
  name: string;
  onNameChange: (value: string) => void;
};

const CategoryName = (props: CategoryNameProps) => {
  const { name, onNameChange } = props;

  return (
    <Input
      value={name}
      placeholder="e.g. Groceries"
      onChange={onNameChange}
      name="category-name"
      label="Category Name"
    />
  );
};

export { CategoryName };
export type { CategoryNameProps };
