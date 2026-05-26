const getDelta = (
  current: number | null,
  prev: number | null,
): number | null => {
  if (current == null || prev === null) {
    return null;
  }

  return ((current - prev) / prev) * 100;
};

const formatDelta = (delta: number | null): string => {
  if (delta === null) {
    return '';
  }

  const sign = delta > 0 ? '+' : '';
  return `${sign}${delta.toFixed(1)}%`;
};

export { getDelta, formatDelta };
