import { ReactNode } from 'react';
import classnames from 'classnames';
import styles from './style.module.scss';
import { Typography, typographyProps } from '../Typography';

type SegmentedButtonProps = {
  isSelected?: boolean;
  isDisabled?: boolean;
  children: ReactNode;
  onChange: () => void;
};

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
      <Typography type={typographyProps.types.text14}>{children}</Typography>
    </button>
  );
};

export { SegmentedButton };
export type { SegmentedButtonProps };
