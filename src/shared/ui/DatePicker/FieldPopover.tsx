import { Popover, PopoverContent } from '@/shared/ui/Popover';
import { DatePicker } from './DatePicker';
import { Input, inputProps } from '@/shared/ui/Input';
import { Button, buttonProps } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { icons } from '@/shared/assets';
import { colors, sizes } from '@/shared/styles';
import { useState } from 'react';
import { Row } from '../Row';
import { Typography, typographyProps } from '../Typography';
import { isSameDay } from '@/shared/helpers/date';

type FieldPopoverProps = {
  onChange: (value: string) => void;
  name: string;
  label?: string;
  todayPlaceholder?: boolean;
};

const FieldPopover = (props: FieldPopoverProps) => {
  const { onChange, label, name, todayPlaceholder } = props;

  const [value, setValue] = useState<Date>();
  const today = new Date();

  const handleDateChange = (date?: Date) => {
    setValue(date);
    onChange(date ? date.toISOString() : '');
  };

  const handleDeleteCkick = () => {
    setValue(undefined);
    onChange('');
  };

  const handleTodayClick = () => {
    setValue(today);
    onChange(today.toISOString());
  };

  const formatted = value ? value.toLocaleDateString('ru-RU') : '';

  return (
    <Popover>
      <Input
        {...(label && { label })}
        theme={inputProps.themes.lightgray}
        type={inputProps.types.regular}
        readOnly
        placeholder={
          todayPlaceholder ? today.toLocaleDateString('ru-RU') : 'дд.мм.гггг'
        }
        name={name}
        value={formatted}
        rightElement={
          <Button
            size={sizes.sizes['18']}
            theme={buttonProps.themes.transparent}
          >
            <Icon
              icon={icons.calendar24}
              size={sizes.sizes[18]}
              color={colors.base.white}
            />
          </Button>
        }
      />

      <PopoverContent>
        {({ onClose }) => (
          <>
            <DatePicker
              value={value}
              onSelect={(date) => {
                handleDateChange(date);
                onClose?.();
              }}
            />

            <Row gap={sizes.sizes[12]}>
              <Button
                height={sizes.sizes[40]}
                width={sizes.sizes.parent}
                theme={buttonProps.themes.gray5green}
                isActive={isSameDay(value, today)}
                onClick={() => {
                  handleTodayClick();
                  onClose?.();
                }}
              >
                <Typography type={typographyProps.types.text14}>
                  Today
                </Typography>
              </Button>

              <Button
                height={sizes.sizes[40]}
                width={sizes.sizes.parent}
                theme={buttonProps.themes.gray5green}
                onClick={() => {
                  handleDeleteCkick();
                  onClose?.();
                }}
              >
                <Typography type={typographyProps.types.text14}>
                  Delete
                </Typography>
              </Button>
            </Row>
          </>
        )}
      </PopoverContent>
    </Popover>
  );
};

export { FieldPopover };
export type { FieldPopoverProps };
