import { ReactNode, useState } from 'react';
import styles from './style.module.scss';
import { SegmentedButton } from './SegmentedButton';

type Option = {
  value: string;
  label: ReactNode;
  disabled?: boolean;
};

type SegmentedControlProps = {
  options: Option[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
};

const SegmentedControl = (props: SegmentedControlProps) => {
  const { value, defaultValue, options, onChange } = props;

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

  return (
    <div
      className={styles['segmented-control']}
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
