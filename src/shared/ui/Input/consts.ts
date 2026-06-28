const inputThemes = {
  lightgray: 'lightgray',
  inherit: 'inherit',
} as const;

const inputTypes = {
  regular: 'regular',
  transaction: 'transaction',
} as const;

const inputProps = {
  themes: inputThemes,
  types: inputTypes,
} as const;

export { inputProps };
