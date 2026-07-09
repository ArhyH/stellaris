import { DatePicker as DatePickerUI } from '@/shared/ui/DatePicker';

type DatePickerProps = {
  onDateChange: (value: string) => void;
};

const DatePicker = (props: DatePickerProps) => {
  const { onDateChange } = props;

  return (
    <DatePickerUI
      onChange={onDateChange}
      label="Date"
      name="transaction-date"
      todayPlaceholder
    />
  );
};

export { DatePicker };
