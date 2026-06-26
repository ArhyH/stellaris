const boxSizes = {
  24: '24',
  30: '30',
  32: '32',
  36: '36',
  40: '40',
  48: '48',
  56: '56',
  64: '64',
  fitContent: 'fit-content',
  parent: 'parent',
} as const;

const boxGrows = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
} as const;

const boxTags = {
  div: 'div',
  li: 'li',
} as const;

const boxProps = {
  sizes: boxSizes,
  grow: boxGrows,
  tags: boxTags,
};

export { boxProps };
