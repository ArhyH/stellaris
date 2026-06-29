import { DayPicker as DayPickerLib } from '@daypicker/react';
import styles from './style.module.scss';
import { DayPickerProps } from './types';

const DayPicker = (props: DayPickerProps) => {
  const { value, onSelect } = props;

  return (
    <DayPickerLib
      mode="single"
      selected={value}
      onSelect={onSelect}
      classNames={{
        button_previous: styles.button_prev,
        button_next: styles.button_next,

        caption_label: styles.caption_label,

        month_grid: styles.month_grid,
        nav: styles.nav,

        weeks: styles.weeks,
        week: styles.week,
        weekdays: styles.week_days,

        day: styles.day,
        today: styles.today,
        day_button: styles.day_button,
        selected: styles.selected,
      }}
    />
  );
};

export { DayPicker };
