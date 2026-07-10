import { Saving, savingStatus } from '@/entity/saving';
import { SavingOperation } from '@/entity/saving-operation';
import { getGroupByKey, groupBy } from '@/shared/helpers';
import { SavingItem, SavingProgress } from './types';

const getGoalProgress = (amount: number, goal: number): SavingProgress => {
  if (goal === 0) {
    return {
      goalPercent: 0,
      clampedPercent: 0,
      overflow: 0,
      remaining: 0,
      status: savingStatus.normal,
    };
  }

  const goalPercent = (amount / goal) * 100;
  const clampedPercent = Math.min(goalPercent, 100);
  const overflow = Math.max(amount - goal, 0);
  const remaining = Math.max(goal - amount, 0);

  const status = goalPercent >= 100 ? savingStatus.over : savingStatus.normal;

  return {
    goalPercent,
    clampedPercent,
    overflow,
    remaining,
    status,
  };
};

const mapSavingsToSavingItems = (
  savings: Saving[],
  savingOperations: SavingOperation[],
): SavingItem[] => {
  const operationBySaving = groupBy(savingOperations, (o) => o.savingId);

  return savings.map((saving) => {
    const operationsCount = getGroupByKey(operationBySaving, saving.id).length;
    const goal = saving.goal
      ? getGoalProgress(saving.amount, saving.goal)
      : null;

    return {
      id: saving.id,
      name: saving.name,
      amount: saving.amount,
      currency: saving.currency,
      operationsCount: operationsCount,
      icon: saving.icon,
      iconColor: saving.iconColor,
      goal: saving.goal,
      goalPercent: goal?.goalPercent,
      clampedPercent: goal?.clampedPercent,
      overflow: goal?.overflow,
      remaining: goal?.remaining,
      status: goal?.status,
    };
  });
};

export { mapSavingsToSavingItems };
