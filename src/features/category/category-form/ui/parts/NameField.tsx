import { Input, inputProps } from '@/shared/ui/Input';

type NameFieldProps = {
  name: string;
  onNameChange: (value: string) => void;
};

const NameField = (props: NameFieldProps) => {
  const { name, onNameChange } = props;

  return (
    <Input
      theme={inputProps.themes.lightgray}
      type={inputProps.types.regular}
      value={name}
      placeholder="e.g. Groceries"
      onChange={onNameChange}
      name="category-name"
      label="Category Name"
    />
  );
};

export { NameField };
