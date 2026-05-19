import styles from './style.module.scss';
import { getCssVarOrNothing } from '@/shared/helpers/styles';
import { ColorToken, sizes } from '@/shared/styles';
import { ValueOf } from 'type-fest';

type IconProps = {
  icon: UtilityTypes.SvgContent;
  width?: ValueOf<typeof sizes.sizes>;
  height?: ValueOf<typeof sizes.sizes>;
  color?: ColorToken;
};

const Icon = (props: IconProps) => {
  const { icon, color, width, height } = props;

  let defaultWidth;
  let defultHeight;

  if (icon.viewBox) {
    const viewBoxValues = icon.viewBox.split(' ');
    defaultWidth = `${viewBoxValues[2]}px`;
    defultHeight = `${viewBoxValues[3]}px`;
  }

  const defalutSizes = {
    '--default-width': defaultWidth,
    '--default-height': defultHeight,
  };

  return (
    <svg
      className={styles.icon}
      style={{
        ...defalutSizes,
        ...(width && { ...getCssVarOrNothing('--default-width', width) }),
        ...(height && { ...getCssVarOrNothing('--default-width', height) }),
        ...(color && { ...getCssVarOrNothing('color', color) }),
      }}
    >
      <use href={`#${icon.id}`} />
    </svg>
  );
};

export { Icon };
export type { IconProps };
