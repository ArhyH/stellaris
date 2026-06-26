import { ValueOf } from 'type-fest';

const baseColors = {
  transparent: 'transparent',
  white: 'white',
  black: 'black',
} as const;

const grayColors = {
  1: 'gray-1',
  2: 'gray-2',
  3: 'gray-3',
  4: 'gray-4',
  5: 'gray-5',
  6: 'gray-6',
} as const;

const lightgrayColors = {
  1: 'lightgray-1',
  2: 'lightgray-2',
  3: 'lightgray-3',
  4: 'lightgray-4',
  5: 'lightgray-5',
  6: 'lightgray-6',
} as const;

const greenColors = {
  1: 'green-1',
  2: 'green-2',
} as const;

const redColors = {
  1: 'red-1',
  2: 'red-2',
} as const;

const pinkColors = {
  1: 'pink-1',
} as const;

const yellowColors = {
  1: 'yellow-1',
  2: 'yellow-2',
} as const;

const lightblueColors = {
  1: 'lightblue-1',
  2: 'lightblue-2',
  3: 'lightblue-3',
} as const;

const blueColos = {
  1: 'blue-1',
} as const;

const violetColors = {
  1: 'violet-1',
  2: 'violet-2',
} as const;

const labelColors = {
  green: 'green-1-label',
  red: 'red-1-label',
  yellow: 'yellow-2-label',
  lightblue: 'lightblue-1-label',
} as const;

const categoryColors = {
  'category-lightblue-1': 'category-lightblue-1',
  'category-lightblue-2': 'category-lightblue-2',
  'category-lightblue-3': 'category-lightblue-3',
  'category-blue-1': 'category-blue-1',
  'category-blue-2': 'category-blue-2',
  'category-blue-3': 'category-blue-3',
  'category-blue-4': 'category-blue-4',
  'category-yellow-1': 'category-yellow-1',
  'category-yellow-2': 'category-yellow-2',
  'category-yellow-3': 'category-yellow-3',
  'category-yellow-4': 'category-yellow-4',
  'category-pink-1': 'category-pink-1',
  'category-pink-2': 'category-pink-2',
  'category-pink-3': 'category-pink-3',
  'category-red-1': 'category-red-1',
  'category-red-2': 'category-red-2',
  'category-red-3': 'category-red-3',
  'category-red-4': 'category-red-4',
  'category-violet-1': 'category-violet-1',
  'category-violet-2': 'category-violet-2',
  'category-violet-3': 'category-violet-3',
  'category-green-1': 'category-green-1',
  'category-green-2': 'category-green-2',
  'category-green-3': 'category-green-3',
  'category-gray-1': 'category-gray-1',
  'category-black-1': 'category-black-1',
  'category-white-1': 'category-white-1',
} as const;

const categoryOpColors = {
  'category-lightblue-1': 'category-op-lightblue-1',
  'category-lightblue-2': 'category-op-lightblue-2',
  'category-lightblue-3': 'category-op-lightblue-3',
  'category-blue-1': 'category-op-blue-1',
  'category-blue-2': 'category-op-blue-2',
  'category-blue-3': 'category-op-blue-3',
  'category-blue-4': 'category-op-blue-4',
  'category-yellow-1': 'category-op-yellow-1',
  'category-yellow-2': 'category-op-yellow-2',
  'category-yellow-3': 'category-op-yellow-3',
  'category-yellow-4': 'category-op-yellow-4',
  'category-pink-1': 'category-op-pink-1',
  'category-pink-2': 'category-op-pink-2',
  'category-pink-3': 'category-op-pink-3',
  'category-red-1': 'category-op-red-1',
  'category-red-2': 'category-op-red-2',
  'category-red-3': 'category-op-red-3',
  'category-red-4': 'category-op-red-4',
  'category-violet-1': 'category-op-violet-1',
  'category-violet-2': 'category-op-violet-2',
  'category-violet-3': 'category-op-violet-3',
  'category-green-1': 'category-op-green-1',
  'category-green-2': 'category-op-green-2',
  'category-green-3': 'category-op-green-3',
  'category-gray-1': 'category-op-gray-1',
  'category-black-1': 'category-op-black-1',
  'category-white-1': 'category-op-white-1',
} as const;

const boxColors = {
  ...categoryOpColors,
  'green-1': greenColors[1],
  'green-1-op': 'green-1-op',
  'red-1-op': 'red-1-op',
  'gray-4': grayColors[4],
  'button-1': 'button-bg-1',
  transparent: 'transparent',
} as const;

const colors = {
  base: baseColors,
  gray: grayColors,
  lightgray: lightgrayColors,
  green: greenColors,
  red: redColors,
  pink: pinkColors,
  yellow: yellowColors,
  lightblue: lightblueColors,
  blue: blueColos,
  violet: violetColors,
  label: labelColors,
  category: categoryColors,
  categoryOp: categoryOpColors,
  box: boxColors,
} as const;

type CategoryColor =
  | keyof typeof categoryColors
  | keyof typeof categoryOpColors;

type ColorToken =
  | ValueOf<typeof baseColors>
  | ValueOf<typeof grayColors>
  | ValueOf<typeof lightgrayColors>
  | ValueOf<typeof greenColors>
  | ValueOf<typeof redColors>
  | ValueOf<typeof pinkColors>
  | ValueOf<typeof yellowColors>
  | ValueOf<typeof lightblueColors>
  | ValueOf<typeof blueColos>
  | ValueOf<typeof violetColors>
  | ValueOf<typeof labelColors>
  | ValueOf<typeof categoryColors>
  | ValueOf<typeof categoryOpColors>
  | ValueOf<typeof boxColors>;

export { colors };
export type { CategoryColor, ColorToken };
