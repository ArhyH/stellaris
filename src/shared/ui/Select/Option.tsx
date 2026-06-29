import styles from './style.module.scss';
import { OptionProps } from './types';

const Option = (props: OptionProps) => {
  const { value, description } = props;

  return (
    <option className={styles.select__item} value={value}>
      {description}
    </option>
  );
};

export { Option };
