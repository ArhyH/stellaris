type DayPickerProps = {
  value: Date | undefined;
  onSelect: (date?: Date) => void;
};

type DatePickerProps = {
  onChange: (value: string) => void;
  name: string;
  label?: string;
  todayPlaceholder?: boolean;
};

export type { DayPickerProps, DatePickerProps };
