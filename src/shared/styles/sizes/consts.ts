const sizeValues = {
  'size-0': 'size-0',
  'size-2': 'size-2',
  'size-4': 'size-4',
  'size-8': 'size-8',
  'size-10': 'size-10',
  'size-12': 'size-12',
  'size-14': 'size-14',
  'size-16': 'size-16',
  'size-24': 'size-24',
  'size-30': 'size-30',
  'size-44': 'size-44',
  'size-216': 'size-216',
  half: 'half',
  parent: 'parent',
};

const sizeList = {
  0: sizeValues['size-0'],
  2: sizeValues['size-2'],
  4: sizeValues['size-4'],
  8: sizeValues['size-8'],
  12: sizeValues['size-12'],
  14: sizeValues['size-14'],
  16: sizeValues['size-16'],
  24: sizeValues['size-24'],
  30: sizeValues['size-30'],
  44: sizeValues['size-44'],
  216: sizeValues['size-216'],
  parent: sizeValues.parent,
  half: sizeValues.half,
};

const radiusList = {
  12: sizeValues['size-12'],
  16: sizeValues['size-16'],
  half: sizeValues.half,
};

const sizes = {
  sizes: sizeList,
  radiuses: radiusList,
};

export { sizes };
