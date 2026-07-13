import { Saving } from '@/entity/saving';

const createInitialSaving = (): Saving => ({
  name: '',
  currency: '',
  icon: 'house24',
  iconColor: 'category-green-1',
  id: Date.now().toString(),
  goal: 0,
});

export { createInitialSaving };
