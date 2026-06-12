import styles from './style.module.scss';
import { getCssVarOrNothing } from '@/shared/helpers/styles';
import { ColorToken, sizes } from '@/shared/styles';
import { ValueOf } from 'type-fest';

type IconProps = {
  icon: UtilityTypes.SvgContent;
  width?: ValueOf<typeof sizes.sizes>;
  height?: ValueOf<typeof sizes.sizes>;
  color?: ColorToken;
  onClick?: () => void;
};

const Icon = (props: IconProps) => {
  const { icon, color, width, height, onClick } = props;

  let defaultWidth;
  let defaultHeight;

  if (icon.viewBox) {
    const viewBoxValues = icon.viewBox.split(' ');
    defaultWidth = `${viewBoxValues[2]}px`;
    defaultHeight = `${viewBoxValues[3]}px`;
  }

  const defalutSizes = {
    '--default-width': defaultWidth,
    '--default-height': defaultHeight,
  };

  return (
    <svg
      className={styles.icon}
      style={{
        ...defalutSizes,
        ...(width && { ...getCssVarOrNothing('--default-width', width) }),
        ...(height && { ...getCssVarOrNothing('--default-height', height) }),
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
