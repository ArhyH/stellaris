import { ID } from '@/shared/types';

interface User {
  name: string;
  email: string;
  initials: string;
}

interface Setting {
  id: ID;
  value: string;
}

export type { User, Setting };
