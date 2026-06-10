import styles from './style.module.scss';
import { Icon } from '../Icon';
import { sizes } from '@/shared/styles';

type InputProps = {
  placeholder: string;
  icon?: UtilityTypes.SvgContent;
  onChange: (value: string) => void;
};

const Input = (props: InputProps) => {
  const { icon, placeholder, onChange } = props;

  return (
    <label className={styles.input__wrapper}>
      {icon && (
        <Icon icon={icon} width={sizes.sizes[16]} height={sizes.sizes[16]} />
      )}
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
};

export { Input };
export type { InputProps };
