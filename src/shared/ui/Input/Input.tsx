import styles from './style.module.scss';
import { Icon } from '../Icon';
import { sizes } from '@/shared/styles';
import { ReactNode, Ref } from 'react';

type InputProps = {
  placeholder: string;
  name: string;
  value?: string;
  leftIcon?: UtilityTypes.SvgContent;
  rightElement?: ReactNode;
  onChange?: (value: string) => void;
  onClick?: () => void;
  readOnly?: boolean;
  ref?: Ref<HTMLLabelElement>;
};

const Input = (props: InputProps) => {
  const {
    leftIcon,
    rightElement,
    name,
    placeholder,
    onChange,
    onClick,
    value,
    readOnly,
    ref,
  } = props;

  return (
    <label className={styles.input__wrapper} ref={ref} onClick={onClick}>
      {leftIcon && (
        <Icon
          icon={leftIcon}
          width={sizes.sizes[16]}
          height={sizes.sizes[16]}
        />
      )}

      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        name={name}
        readOnly={readOnly}
        value={value ?? ''}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
      />

      {rightElement && rightElement}
    </label>
  );
};

export { Input };
export type { InputProps };
