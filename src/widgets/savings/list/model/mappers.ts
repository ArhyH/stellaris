import { Saving, savingStatus } from '@/entity/saving';
import { SavingOperation } from '@/entity/saving-operation';
import { getGroupByKey } from '@/shared/helpers';
import { SavingItem, SavingProgress } from './types';
import { ID } from '@/shared/types';

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

const getSavingBalance = (operations: SavingOperation[]): number => {
  return operations.reduce((acc, operation) => (acc += operation.amount), 0);
};

const mapSavingsToSavingItems = (
  savings: Saving[],
  savingOperations: Record<ID, SavingOperation[]>,
): SavingItem[] =>
  savings.map((saving) => {
    const operations = getGroupByKey(savingOperations, saving.id);

    const operationsCount = operations.length;
    const amount = getSavingBalance(operations);

    const goal = saving.goal ? getGoalProgress(amount, saving.goal) : null;

    return {
      id: saving.id,
      name: saving.name,
      amount,
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

export { mapSavingsToSavingItems };
