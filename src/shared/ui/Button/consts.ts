const buttonThemes = {
  green: 'green',
  lightgray: 'lightgray',
  red: 'red',
  transparent: 'transparent',
  transparentGray: 'transparent-gray',
} as const;

const buttonRadiuses = {
  14: 14,
} as const;

const buttonSizes = {
  24: 24,
  36: 36,
  40: 40,
  '18x18': '18x18',
  '28x28': '28x28',
  '32x32': '32x32',
  '36x36': '36x36',
  '44-stretched': '44-stretched',
} as const;

const buttonJustifies = {
  left: 'left',
  right: 'right',
} as const;

const buttonProps = {
  sizes: buttonSizes,
  themes: buttonThemes,
  justifies: buttonJustifies,
  radiuses: buttonRadiuses,
} as const;

export { buttonProps };
