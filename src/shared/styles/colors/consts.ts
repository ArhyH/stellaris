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
} as const;

const lightgrayColors = {
  1: 'lightgray-1',
  2: 'lightgray-2',
  3: 'lightgray-3',
  4: 'lightgray-4',
  5: 'lightgray-5',
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
  green: 'green-1-op',
  red: 'red-1-op',
  yellow: 'yellow-2-op',
  lightblue: 'lightblue-1-op',
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
  'category-green-3': 'category-green-3',
} as const;

const boxColors = {
  ...categoryColors,
  'green-1': greenColors[1],
  'gray-4': grayColors[4],
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
  box: boxColors,
} as const;

type CategoryColor = keyof typeof categoryColors;

export { colors };
export type { CategoryColor };
