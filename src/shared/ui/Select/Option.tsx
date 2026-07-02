import classnames from 'classnames';
import { sizes } from '@/shared/styles';
import { Icon } from '../Icon';
import { Typography, typographyProps } from '../Typography';
import styles from './style.module.scss';
import { OptionProps } from './types';
import { icons } from '@/shared/assets';
import { getCssVarOrNothing } from '@/shared/helpers';

const Option = (props: OptionProps) => {
  const { icon, color, description, isSelected, onClick } = props;

  const componentClassNames = classnames(styles.select__option, {
    [styles['is-selected']]: isSelected,
  });

  return (
    <button
      className={componentClassNames}
      role="option"
      onClick={onClick}
      disabled={isSelected}
      style={color && { ...getCssVarOrNothing('--option-active-bg', color) }}
    >
      <span className={styles['select__content']}>
        {icon && <Icon icon={icon} size={sizes.sizes[16]} color={color} />}
        <Typography type={typographyProps.types.text14}>
          {description}
        </Typography>
      </span>
      {isSelected && (
        <Icon icon={icons.check12} size={sizes.sizes[16]} color={color} />
      )}
    </button>
  );
};

export { Option };
