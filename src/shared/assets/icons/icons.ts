import wallet18 from './wallet-18.svg';
import arrowUp18 from './arrow-up-18.svg';
import arrowDown14 from './arrow-down-14.svg';
import arrowDown18 from './arrow-down-18.svg';
import arrowRight12 from './arrow-right-12.svg';
import arrowRight24 from './arrow-right-24.svg';
import arrowLeft24 from './arrow-left-24.svg';
import pen24 from './pen-24.svg';
import trash24 from './trash-24.svg';
import plus24 from './plus-24.svg';
import minus24 from './minus-24.svg';
import search24 from './search-24.svg';
import dateTrigger14 from './date-trigger-14.svg';
import calendar24 from './calendar-24.svg';
import currency24 from './currency-24.svg';
import planet24 from './planet-24.svg';
import clock24 from './clock-24.svg';
import cross14 from './cross-14.svg';
import check12 from './check-12.svg';
import delete24 from './delete-24.svg';
import coins24 from './coins-24.svg';
import shield24 from './shield-24.svg';
import piggyBank24 from './piggy-bank-24.svg';

import house24 from './house-24.svg';
import car24 from './car-24.svg';
import burger24 from './burger-24.svg';
import shoppingBag24 from './shopping-bag-24.svg';
import clapperboard24 from './clapperboard-24.svg';
import heart24 from './heart-24.svg';
import books24 from './books-24.svg';
import note24 from './note-24.svg';
import lightbulb24 from './lightbulb-24.svg';
import plane24 from './plane-24.svg';
import gamepad24 from './gamepad-24.svg';
import pizza24 from './pizza-24.svg';
import cofee24 from './cofee-24.svg';
import music24 from './music-24.svg';
import pill24 from './pill-24.svg';
import pawPrint24 from './paw-print-24.svg';
import leaf24 from './leaf-24.svg';
import dumbbell24 from './dumbbell-24.svg';
import scissors24 from './scissors-24.svg';
import wrench24 from './wrench-24.svg';
import gift24 from './gift-24.svg';
import phone24 from './phone-24.svg';
import graduationCap24 from './graduation-cap-24.svg';
import landmark24 from './landmark-24.svg';
import briefcase24 from './briefcase-24.svg';
import laptop24 from './laptop-24.svg';
import charts24 from './charts-24.svg';
import palette24 from './palette-24.svg';
import wine24 from './wine-24.svg';
import parasol24 from './parasol-24.svg';

const categoriesIcons = {
  house24,
  car24,
  burger24,
  shoppingBag24,
  clapperboard24,
  heart24,
  books24,
  note24,
  lightbulb24,
  plane24,
  gamepad24,
  pizza24,
  cofee24,
  music24,
  pill24,
  pawPrint24,
  leaf24,
  dumbbell24,
  scissors24,
  wrench24,
  gift24,
  phone24,
  graduationCap24,
  landmark24,
  briefcase24,
  laptop24,
  charts24,
  palette24,
  wine24,
  parasol24,
} as const satisfies Record<string, UtilityTypes.SvgContent>;

const icons = {
  wallet18,
  arrowUp18,
  arrowDown14,
  arrowDown18,
  arrowRight12,
  arrowRight24,
  arrowLeft24,
  pen24,
  trash24,
  plus24,
  minus24,
  search24,
  dateTrigger14,
  calendar24,
  currency24,
  planet24,
  clock24,
  cross14,
  check12,
  delete24,
  coins24,
  shield24,
  piggyBank24,
  ...categoriesIcons,
} as const satisfies Record<string, UtilityTypes.SvgContent>;

type IconName = keyof typeof icons;

export { icons, categoriesIcons };
export type { IconName };
