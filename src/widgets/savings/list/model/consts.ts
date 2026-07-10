import { colors } from '@/shared/styles';

const statusColors = {
  normal: colors.yellow[1],
  over: colors.green[1],
} as const;

const savingsListKeys = {
  withGoal: 'withGoal',
  withoutGoal: 'withoutGoal',
} as const;

export { statusColors, savingsListKeys };
