const getPrevMonth = (date: Date): Date => {
  return new Date(date.getFullYear(), date.getMonth() - 1, 1);
};

const getLastNMonth = (date: Date, n: number): Date[] => {
  return Array.from({ length: n }, (_, i) => {
    return new Date(date.getFullYear(), date.getMonth() - i, 1);
  });
};

const getMonthFromDate = (date: string | Date): string => {
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

const getMonthYearFromDate = (date: string): string => {
  const d = new Date(date);
  const formatted = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
  }).format(d);

  return formatted;
};

const isSameDay = (a?: Date, b?: Date) => {
  if (!a || !b) return false;

  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
};

export {
  isSameDay,
  getPrevMonth,
  getLastNMonth,
  getMonthFromDate,
  getMonthDayFromDate,
  getMonthYearFromDate,
};
