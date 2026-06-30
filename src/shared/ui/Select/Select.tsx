import classnames from 'classnames';
import styles from './style.module.scss';
import { Option } from './Option';
import { SelectProps } from './types';

const Select = (props: SelectProps) => {
  const { options, onChange, value, theme, hasAllOption, name, isDisabled } =
    props;

  const componentClassNames = classnames(styles.select, {
    [styles[`select--theme--${theme}`]]: theme,
  });

  return (
    <select
      className={componentClassNames}
      onChange={(evt) => onChange(evt.target.value)}
      value={value}
      name={name}
      disabled={isDisabled}
    >
      {hasAllOption && <Option value="all" description="All Categories" />}

      {options.map((option) => {
        return (
          <Option
            value={option.value}
            key={option.value}
            description={option.description}
          />
        );
      })}
    </select>
  );
};

export { Select };
