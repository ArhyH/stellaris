const baseColors = {
  transparent: 'transparent',
  white: 'white',
  black: 'black',
};

const grayColors = {
  1: 'gray-1',
  2: 'gray-2',
  3: 'gray-3',
  4: 'gray-4',
  5: 'gray-5',
};

const lightgrayColors = {
  1: 'lightgray-1',
  2: 'lightgray-2',
  3: 'lightgray-3',
  4: 'lightgray-4',
  5: 'lightgray-5',
};

const greenColors = {
  1: 'green-1',
  2: 'green-2',
};

const redColors = {
  1: 'red-1',
  2: 'red-2',
};

const pinkColors = {
  1: 'pink-1',
};

const yellowColors = {
  1: 'yellow-1',
  2: 'yellow-2',
};

const lightblueColors = {
  1: 'lightblue-1',
  2: 'lightblue-2',
  3: 'lightblue-3',
};

const blueColos = {
  1: 'blue-1',
};

const violetColors = {
  1: 'violet-1',
  2: 'violet-2',
};

const labelColors = {
  green: 'green-1-op',
  red: 'red-1-op',
  yellow: 'yellow-2-op',
  lightblue: 'lightblue-1-op',
};

const categoryColors = {
  'category-lightblue-1': lightblueColors[1],
  'category-lightblue-2': lightblueColors[2],
  'category-lightblue-3': lightblueColors[3],
  'category-blue-1': blueColos[1],
  'category-yellow-1': yellowColors[2],
  'category-pink-1': pinkColors[1],
  'category-red-1': redColors[2],
  'category-lightgray-1': lightgrayColors[5],
  'category-violet-1': violetColors[1],
  'category-violet-2': violetColors[2],
};

const boxColors = {
  ...categoryColors,
  'green-1': greenColors[1],
  'gray-4': grayColors[4],
};

const colors = {
  base: baseColors,
  gray: grayColors,
  lightgray: lightblueColors,
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
};

export { colors };
