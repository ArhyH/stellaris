import { colors } from '@/shared/styles';

const dotColors = {
  red: colors.red[1],
  green: colors.green[1],
} as const;

const dotProps = {
  colors: dotColors,
} as const;

export { dotProps };
