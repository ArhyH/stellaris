import { colors } from '@/shared/styles';

const lineColors = {
  red: colors.red[1],
  green: colors.green[1],
} as const;

const lineProps = {
  colors: lineColors,
} as const;

export { lineProps };
