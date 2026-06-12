import { Popover, PopoverContent } from '@/shared/ui/Popover';
import { DatePicker } from './DatePicker';
import { Input } from '@/shared/ui/Input';
import { Button, buttonProps } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { icons } from '@/shared/assets';
import { colors, sizes } from '@/shared/styles';
import { useState } from 'react';

type FieldPopoverProps = {
  onChange: (value: string) => void;
};

const FieldPopover = (props: FieldPopoverProps) => {
  const { onChange } = props;

  const [value, setValue] = useState<Date>();

  const handleDateChange = (date?: Date) => {
    setValue(date);
    onChange(date ? date.toISOString() : '');
  };

  const formatted = value ? value.toLocaleDateString('ru-RU') : '';

  return (
    <Popover>
      <Input
        readOnly
        placeholder="дд.мм.гггг"
        name="end-date"
        value={formatted}
        rightElement={
          <Button
            size={buttonProps.sizes['18x18']}
            theme={buttonProps.themes.transparent}
          >
            <Icon
              icon={icons.calendar24}
              width={sizes.sizes[18]}
              height={sizes.sizes[18]}
              color={colors.base.white}
            />
          </Button>
        }
      />

      <PopoverContent>
        <DatePicker value={value} onSelect={handleDateChange} />
      </PopoverContent>
    </Popover>
  );
};

export { FieldPopover };
export type { FieldPopoverProps };
