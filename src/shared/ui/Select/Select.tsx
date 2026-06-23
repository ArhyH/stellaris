import classnames from 'classnames';
import styles from './style.module.scss';
import { Option } from './Option';
import { ID } from '@/shared/types';
import { ValueOf } from 'type-fest';

const selectThemes = {
  gray6: 'gray-6',
} as const;

const selectProps = {
  themes: selectThemes,
} as const;

type SelectProps = {
  options: { value: string; description: string }[];
  onChange: (value: string) => void;
  theme?: ValueOf<typeof selectProps.themes>;
  value: ID;
  hasAllOption?: boolean;
  name: string;
};

const Select = (props: SelectProps) => {
  const { options, onChange, value, theme, hasAllOption, name } = props;

  const componentClassNames = classnames(styles.select, {
    [styles[`select--theme--${theme}`]]: theme,
  });

  return (
    <select
      className={componentClassNames}
      onChange={(evt) => onChange(evt.target.value)}
      value={value}
      name={name}
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

export { Select, selectProps };
export type { SelectProps };
