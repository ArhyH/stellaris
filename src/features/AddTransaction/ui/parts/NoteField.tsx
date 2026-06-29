import { Input, inputProps } from '@/shared/ui/Input';

type NoteFieldProps = {
  onNoteChange: (value: string) => void;
  value?: string;
};

const NoteField = (props: NoteFieldProps) => {
  const { onNoteChange, value } = props;

  return (
    <Input
      label="Note"
      theme={inputProps.themes.lightgray}
      type={inputProps.types.regular}
      placeholder="Optional note..."
      name="transaction-note"
      value={value || ''}
      onChange={onNoteChange}
    />
  );
};

export { NoteField };
