import classnames from 'classnames';
import { getStyles } from './helpers';
import styles from './style.module.scss';
import { RowProps } from './types';

const Row = (props: RowProps) => {
  const { children, justify, gap, paddingVertical, width, color, wrap } = props;

  const componentClassNames = classnames(styles.row, {
    [styles[`row--justify--${justify}`]]: justify,
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
