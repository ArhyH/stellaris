const sortFields = {
  date: 'date',
  category: 'category',
  amount: 'amount',
} as const;

const sortDirections = {
  asc: 'asc',
  desc: 'desc',
} as const;

export { sortFields, sortDirections };
