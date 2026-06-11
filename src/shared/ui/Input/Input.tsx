import styles from './style.module.scss';
import { Icon } from '../Icon';
import { sizes } from '@/shared/styles';
import { ValueOf } from 'type-fest';
import { inputProps } from './consts';
import { ReactNode, useRef } from 'react';

type InputProps = {
  placeholder: string;
  name: string;
  type: ValueOf<typeof inputProps.types>;
  leftIcon?: UtilityTypes.SvgContent;
  rightElement?: ReactNode;
  onChange: (value: string) => void;
};

const Input = (props: InputProps) => {
  const { leftIcon, rightElement, type, name, placeholder, onChange } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const onDateInputClick = () => {
    if (type === inputProps.types.date) {
      inputRef.current?.showPicker();
    }
  };

  return (
    <label
      className={styles.input__wrapper}
      onPointerDown={() => onDateInputClick()}
    >
      {leftIcon && (
        <Icon
          icon={leftIcon}
          width={sizes.sizes[16]}
          height={sizes.sizes[16]}
        />
      )}

      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        name={name}
        ref={inputRef}
        onChange={(e) => onChange(e.target.value)}
      />

      {rightElement && rightElement}
    </label>
  );
};

export { Input };
export type { InputProps };
