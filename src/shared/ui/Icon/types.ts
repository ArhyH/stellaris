import { ColorToken, sizes } from '@/shared/styles';
import { ValueOf } from 'type-fest';

type IconProps = {
  icon: UtilityTypes.SvgContent;
  size?: ValueOf<typeof sizes.sizes>;
  color?: ColorToken;
  onClick?: () => void;
};

export type { IconProps };
