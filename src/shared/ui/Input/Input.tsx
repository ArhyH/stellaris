import classnames from 'classnames';
import styles from './style.module.scss';
import { Icon } from '../Icon';
import { colors, sizes } from '@/shared/styles';
import { Typography, typographyProps } from '../Typography';
import { InputProps } from './types';

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

        {leftIcon && <Icon icon={leftIcon} size={sizes.sizes[16]} />}

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
