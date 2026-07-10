const gridColumns = {
  'repeat-2': 'repeat(2, 1fr)',
  'repeat-3': 'repeat(3, 1fr)',
  '2-1': '2fr 1fr',
  '1-1': '1fr 1fr',
  '5-7': '5fr 7fr',
} as const;

const gridProps = {
  columns: gridColumns,
} as const;

export { gridProps };
