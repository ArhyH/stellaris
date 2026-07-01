const buttonThemes = {
  gray1: 'gray-1',
  gray5green: 'gray-5-green',
  green: 'green',
  lightgray: 'lightgray',
  red: 'red',
  transparent: 'transparent',
  transparentCategory: 'transparent-category',
  transparentGray: 'transparent-gray',
} as const;

const buttonJustifies = {
  left: 'left',
  right: 'right',
  spaceBetween: 'space-between',
} as const;

const buttonProps = {
  themes: buttonThemes,
  justifies: buttonJustifies,
} as const;

export { buttonProps };
