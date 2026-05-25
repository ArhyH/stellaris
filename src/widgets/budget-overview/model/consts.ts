import { colors } from '@/shared/styles';

const statusColors = {
  normal: colors.green[1],
  warning: colors.yellow[1],
  over: colors.red[1],
} as const;

export { statusColors };
