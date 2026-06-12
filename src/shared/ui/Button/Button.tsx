import classnames from 'classnames';
import styles from './style.module.scss';
import { ButtonProps } from './types';

const Button = (props: ButtonProps) => {
  const {
    children,
    theme,
    size,
    justify,
    isActive,
    isRotated,
    onClick,
    ref,
    ...rest
  } = props;

  const componentClassNames = classnames(styles.button, {
    [styles[`button--theme--${theme}`]]: theme,
    [styles[`button--size--${size}`]]: size,
    [styles[`button--justify--${justify}`]]: justify,
    [styles['is-active']]: isActive,
    [styles['is-rotated']]: isRotated,
  });

  return (
    <button
      {...rest}
      type="button"
      className={componentClassNames}
      onClick={onClick}
      ref={ref}
    >
      {children}
    </button>
  );
};

export { Button };
