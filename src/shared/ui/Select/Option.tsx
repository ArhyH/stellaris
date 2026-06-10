import styles from './style.module.scss';

type OptionProps = {
  value: string;
  description: string;
};

const Option = (props: OptionProps) => {
  const { value, description } = props;

  return (
    <option className={styles.select__item} value={value}>
      {description}
    </option>
  );
};

export { Option };
export type { OptionProps };
