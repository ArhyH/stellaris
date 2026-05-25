const boxSizes = {
  30: '30',
  40: '40',
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
