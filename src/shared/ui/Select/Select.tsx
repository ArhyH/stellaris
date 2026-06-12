import styles from './style.module.scss';
import { Option } from './Option';
import { ID } from '@/shared/types';

type SelectProps = {
  options: { value: string; description: string }[];
  onChange: (value: string) => void;
  value: ID;
};

const Select = (props: SelectProps) => {
  const { options, onChange, value } = props;

  return (
    <select
      className={styles.select}
      onChange={(evt) => onChange(evt.target.value)}
      value={value}
    >
      <Option value="all" description="All Categories" />

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
export type { SelectProps };
