const buttonThemes = {
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
} as const;

const buttonProps = {
  themes: buttonThemes,
  justifies: buttonJustifies,
} as const;

export { buttonProps };
