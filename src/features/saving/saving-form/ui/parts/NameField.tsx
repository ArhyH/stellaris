import { Input, inputProps } from '@/shared/ui/Input';

type NameFieldProps = {
  value: string;
  onNameChange: (value: string) => void;
};

const NameField = (props: NameFieldProps) => {
  const { value, onNameChange } = props;

  return (
    <Input
      theme={inputProps.themes.lightgray}
      type={inputProps.types.regular}
      value={value}
      placeholder="Deposit"
      onChange={onNameChange}
      name="saving-name"
      label="Saving Name"
    />
  );
};

export { NameField };
