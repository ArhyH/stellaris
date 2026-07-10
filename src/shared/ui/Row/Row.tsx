import classnames from 'classnames';
import { getStyles } from './helpers';
import styles from './style.module.scss';
import { RowProps } from './types';
import { rowProps } from '.';

const Row = (props: RowProps) => {
  const {
    children,
    justify,
    gap,
    paddingVertical,
    width,
    color,
    wrap,
    align = rowProps.aligns.center,
  } = props;

  const componentClassNames = classnames(styles.row, {
    [styles[`row--justify--${justify}`]]: justify,
    [styles[`row--align--${align}`]]: align,
    [styles[`flex-wrap`]]: wrap,
  });

  return (
    <div
      className={componentClassNames}
      style={{ ...getStyles({ gap, paddingVertical, width, color }) }}
    >
      {children}
    </div>
  );
};

export { Row };
