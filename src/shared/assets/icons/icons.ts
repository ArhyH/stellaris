import wallet18 from './wallet-18.svg';
import arrowUp18 from './arrow-up-18.svg';
import arrowDown14 from './arrow-down-14.svg';
import arrowDown18 from './arrow-down-18.svg';
import arrowRight12 from './arrow-right-12.svg';
import pen24 from './pen-24.svg';
import trash24 from './trash-24.svg';
import plus24 from './plus-24.svg';

const icons = {
  wallet18: wallet18,
  arrowUp18: arrowUp18,
  arrowDown14: arrowDown14,
  arrowDown18: arrowDown18,
  arrowRight12: arrowRight12,
  pen24: pen24,
  trash24: trash24,
  plus24: plus24,
} as const satisfies Record<string, UtilityTypes.SvgContent>;

type IconName = keyof typeof icons;

export { icons };
export type { IconName };
