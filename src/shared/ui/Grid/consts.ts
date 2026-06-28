const gridColumns = {
  '2-1': '2fr 1fr',
  'repeat-3': 'repeat(3, 1fr)',
  '1-1': '1fr 1fr',
} as const;

const gridProps = {
  columns: gridColumns,
} as const;

export { gridProps };
