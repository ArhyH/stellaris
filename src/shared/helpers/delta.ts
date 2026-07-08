const deltaFormatTypes = {
  sign: 'sign',
  icon: 'icon',
} as const;

type DeltaFormatType = keyof typeof deltaFormatTypes;

const getDelta = (
  current: number | null,
  prev: number | null,
): number | null => {
  if (current == null || prev === null || prev === 0) {
    return null;
  }

  return ((current - prev) / prev) * 100;
};

const formatDelta = (
  delta: number | null,
  format?: DeltaFormatType,
): string => {
  if (delta === null) {
    return '';
  }

  const sign =
    format === deltaFormatTypes.icon
      ? delta > 0
        ? '▲ '
        : '▼ '
      : delta > 0
        ? '+'
        : '';

  return `${sign}${format === deltaFormatTypes.icon ? Math.abs(delta).toFixed(1) : delta.toFixed(1)}%`;
};

export { getDelta, formatDelta, deltaFormatTypes };
