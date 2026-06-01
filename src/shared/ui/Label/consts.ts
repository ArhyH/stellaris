import { colors } from '@/shared/styles';

const labelBgColors = {
  red: colors.label.red,
  green: colors.label.green,
} as const;

const labelColorByBgColor = {
  [labelBgColors.green]: colors.green[1],
  [labelBgColors.red]: colors.red[1],
} as const;

const labelProps = {
  bgColors: labelBgColors,
} as const;

export { labelProps, labelColorByBgColor };
