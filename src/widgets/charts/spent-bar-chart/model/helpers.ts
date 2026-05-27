const getMonthFromDate = (date: string): string => {
  const d = new Date(date);
  const formatted = new Intl.DateTimeFormat('en-US', {
    month: 'long',
  }).format(d);

  return formatted;
};

const getMonthDayFromDate = (date: string): string => {
  const d = new Date(date);
  const formatted = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
  }).format(d);

  return formatted;
};

export { getMonthFromDate, getMonthDayFromDate };
