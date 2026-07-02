import classnames from 'classnames';
import styles from './style.module.scss';
import { ButtonProps } from './types';
import { getStyles } from './helpers';

const Button = (props: ButtonProps) => {
  const {
    children,
    theme,
    size,
    width,
    height,
    justify,
    radius,
    padding,
    paddingHorizontal,
    paddingVertical,
    isActive,
    isRotated,
    isDisabled,
    onClick,
    bgColor,
    activeBgColor,
    ref,
    ...rest
  } = props;

  const componentClassNames = classnames(styles.button, {
    [styles[`button--theme--${theme}`]]: theme,
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
      style={{
        ...getStyles({
          size,
          height,
          width,
          radius,
          padding,
          paddingHorizontal,
          paddingVertical,
          bgColor,
          activeBgColor,
        }),
      }}
    >
      {children}
    </button>
  );
};

export { Button };
