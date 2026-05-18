const getMouthFromDate = (date: string): string => {
  const d = new Date(date);
  const formatted = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
  }).format(d);

  return formatted;
};

export { getMouthFromDate };
