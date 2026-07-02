import { Link } from 'react-router-dom';
import classnames from 'classnames';
import styles from './style.module.scss';
import { RouterLinkProps } from './types';

const RouterLink = (props: RouterLinkProps) => {
  const { children, theme, ...restProps } = props;

  const componentClassNames = classnames(styles['router-link'], {
    [styles[`router-link--theme--${theme}`]]: theme,
  });

  return (
    <Link className={componentClassNames} {...restProps}>
      {children}
    </Link>
  );
};

export { RouterLink };
