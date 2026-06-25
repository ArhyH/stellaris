import classnames from 'classnames';
import styles from './style.module.scss';
import { ButtonProps } from './types';
import { getStyles } from './helpers';

const Button = (props: ButtonProps) => {
  const {
    children,
    theme,
    size,
    justify,
    radius,
    isActive,
    isRotated,
    isDisabled,
    onClick,
    bgColor,
    ref,
    ...rest
  } = props;

  const componentClassNames = classnames(styles.button, {
    [styles[`button--theme--${theme}`]]: theme,
    [styles[`button--size--${size}`]]: size,
    [styles[`button--radius--${radius}`]]: radius,
    [styles[`button--justify--${justify}`]]: justify,
    [styles['is-active']]: isActive,
    [styles['is-disabled']]: isDisabled,
    [styles['is-rotated']]: isRotated,
  });

  return (
    <button
      {...rest}
      type="button"
      className={componentClassNames}
      onClick={onClick}
      ref={ref}
      disabled={isDisabled}
      style={{ ...getStyles({ bgColor }) }}
    >
      {children}
    </button>
  );
};

export { Button };
