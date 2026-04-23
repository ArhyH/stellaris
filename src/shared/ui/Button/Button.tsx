import classnames from 'classnames';
import styles from './style.module.scss';
import { ButtonProps } from './types';

const Button = (props: ButtonProps) => {
  const { children, theme, size, isActive, ...rest } = props;

  const componentClassNames = classnames(styles.button, {
    [styles[`button--theme--${theme}`]]: theme,
    [styles[`button--size--${size}`]]: size,
    [styles['is-active']]: isActive,
  });

  return (
    <button {...rest} type="button" className={componentClassNames}>
      {children}
    </button>
  );
};

export { Button };
