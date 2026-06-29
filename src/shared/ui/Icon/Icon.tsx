import styles from './style.module.scss';
import { getCssVarOrNothing } from '@/shared/helpers/styles';
import { IconProps } from './types';

const Icon = (props: IconProps) => {
  const { icon, color, size, onClick } = props;

  let defaultSize;

  if (icon.viewBox) {
    const viewBoxValues = icon.viewBox.split(' ');
    defaultSize = `${viewBoxValues[2]}px`;
  }

  const defalutSizes = {
    '--default-size': defaultSize,
  };

  return (
    <svg
      className={styles.icon}
      style={{
        ...defalutSizes,
        ...(size && { ...getCssVarOrNothing('--default-size', size) }),
        ...(color && { ...getCssVarOrNothing('color', color) }),
      }}
      onClick={onClick}
    >
      <use href={`#${icon.id}`} />
    </svg>
  );
};

export { Icon };
export type { IconProps };
