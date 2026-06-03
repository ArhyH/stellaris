import { useState } from 'react';
import classnames from 'classnames';

import { SegmentedButton } from './SegmentedButton';
import { SegmentedControlProps } from './types';
import styles from './style.module.scss';

const SegmentedControl = (props: SegmentedControlProps) => {
  const { theme, size, value, defaultValue, options, onChange } = props;

  const [internalValue, setInternalValue] = useState(
    defaultValue ?? options[0]?.value,
  );

  const selectedValue = value ?? internalValue;

  const handleChange = (newValue: string) => {
    if (value === undefined) {
      setInternalValue(newValue);
    }

    onChange?.(newValue);
  };

  const componentClassNames = classnames(styles['segmented-control'], {
    [styles[`segmented-control--theme--${theme}`]]: theme,
    [styles[`segmented-control--size--${size}`]]: size,
  });

  return (
    <div
      className={componentClassNames}
      role="radiogroup"
      aria-orientation="horizontal"
    >
      {options.map((option) => {
        const isSelected = selectedValue === option.value;

        return (
          <SegmentedButton
            isSelected={isSelected}
            isDisabled={option.disabled}
            key={option.value}
            onChange={() => handleChange(option.value)}
          >
            {option.label}
          </SegmentedButton>
        );
      })}
    </div>
  );
};

export { SegmentedControl };
export type { SegmentedControlProps };
