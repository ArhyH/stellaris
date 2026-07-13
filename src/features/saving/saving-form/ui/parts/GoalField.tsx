import { Input, inputProps } from '@/shared/ui/Input';

type GoalFieldProps = {
  onGoalChange: (value: string) => void;
  value?: string;
};

const GoalField = (props: GoalFieldProps) => {
  const { onGoalChange, value } = props;

  return (
    <Input
      label="Goal"
      theme={inputProps.themes.lightgray}
      type={inputProps.types.regular}
      placeholder="200 (optional)"
      name="saving-goal"
      value={value || ''}
      onChange={onGoalChange}
    />
  );
};

export { GoalField };
