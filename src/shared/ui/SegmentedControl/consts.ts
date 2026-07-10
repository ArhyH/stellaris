const segmentedControlThemes = {
  gray1: 'gray-1',
  gray4: 'gray-4',
  yellow: 'yellow',
  switch: 'switch',
} as const;

const segmentedControlSizes = {
  36: 36,
  44: 44,
} as const;

const segmentedControlTypes = {
  stretched: 'stretched',
} as const;

const segmentedControlProps = {
  sizes: segmentedControlSizes,
  themes: segmentedControlThemes,
  types: segmentedControlTypes,
} as const;

export { segmentedControlProps };
