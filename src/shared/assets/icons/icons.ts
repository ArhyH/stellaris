import wallet18 from './wallet-18.svg';
import arrowUp18 from './arrow-up-18.svg';
import arrowDown18 from './arrow-down-18.svg';
import arrowRight12 from './arrow-right-12.svg';

const icons = {
  wallet18: wallet18,
  arrowUp18: arrowUp18,
  arrowDown18: arrowDown18,
  arrowRight12: arrowRight12,
} as const satisfies Record<string, UtilityTypes.SvgContent>;

type IconName = keyof typeof icons;

export { icons };
export type { IconName };
