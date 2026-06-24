import styles from './style.module.scss';
import { Icon } from '../Icon';
import { colors, sizes } from '@/shared/styles';
import { ReactNode, Ref } from 'react';
import { Typography, typographyProps } from '../Typography';

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
  label?: string;
};

const Input = (props: InputProps) => {
  const {
    leftIcon,
    rightElement,
    name,
    placeholder,
    label,
    onChange,
    onClick,
    value,
    readOnly,
    ref,
  } = props;

  return (
    <label className={styles.input__wrapper} ref={ref} onClick={onClick}>
      {label && (
        <Typography
          type={typographyProps.types.text12}
          color={colors.lightgray[2]}
          textTransform={typographyProps.transforms.uppercase}
        >
          {label}
        </Typography>
      )}

      <span className={styles.input__body}>
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
      </span>
    </label>
  );
};

export { Input };
export type { InputProps };
