import { ReactNode, Ref } from 'react';
import classnames from 'classnames';
import styles from './style.module.scss';
import { Icon } from '../Icon';
import { colors, sizes } from '@/shared/styles';
import { Typography, typographyProps } from '../Typography';
import { ValueOf } from 'type-fest';
import { inputProps } from '.';

type InputProps = {
  placeholder: string;
  name: string;
  theme: ValueOf<typeof inputProps.themes>;
  type: ValueOf<typeof inputProps.types>;
  value?: string | number;
  leftIcon?: UtilityTypes.SvgContent;
  rightElement?: ReactNode;
  readOnly?: boolean;
  ref?: Ref<HTMLLabelElement>;
  label?: string;
  sign?: ReactNode;
  onChange?: (value: string) => void;
  onClick?: () => void;
};

const Input = (props: InputProps) => {
  const {
    name,
    placeholder,
    theme,
    type,
    leftIcon,
    rightElement,
    label,
    onChange,
    onClick,
    value,
    readOnly,
    ref,
    sign,
  } = props;

  const componentClassNames = classnames(styles.input, {
    [styles[`input--theme--${theme}`]]: theme,
    [styles[`input--type--${type}`]]: type,
  });

  return (
    <label className={componentClassNames} ref={ref} onClick={onClick}>
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
        {sign && sign}

        {leftIcon && (
          <Icon
            icon={leftIcon}
            width={sizes.sizes[16]}
            height={sizes.sizes[16]}
          />
        )}

        <input
          className={styles.input__field}
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
