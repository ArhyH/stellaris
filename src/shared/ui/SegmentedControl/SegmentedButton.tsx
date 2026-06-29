import classnames from 'classnames';
import styles from './style.module.scss';
import { SegmentedButtonProps } from './types';

const SegmentedButton = (props: SegmentedButtonProps) => {
  const { isSelected, isDisabled, onChange, children } = props;

  const componentClassNames = classnames(styles['segmented-control__button'], {
    [styles['is-selected']]: isSelected,
    [styles['is-disabled']]: isDisabled,
  });

  return (
    <button
      className={componentClassNames}
      type="button"
      role="radio"
      aria-checked={isSelected}
      disabled={isDisabled}
      onClick={onChange}
    >
      {children}
    </button>
  );
};

export { SegmentedButton };
