const rowJustifies = {
  spaceBetween: 'space-between',
} as const;

const rowAligns = {
  center: 'center',
  start: 'start',
} as const;

const rowProps = {
  justifies: rowJustifies,
  aligns: rowAligns,
} as const;

export { rowProps };
