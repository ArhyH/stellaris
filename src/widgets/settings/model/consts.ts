import { icons } from '@/shared/assets';
import { SettingConfig } from './types';

const SETTINGS_CONFIG: SettingConfig[] = [
  {
    key: 'currency',
    name: 'Currency',
    icon: icons.currency24,
    description: 'Your primary currency',
    settingVariants: [
      '$ USD — US Dollar',
      '€ EUR — Euro',
      '£ GBP — British Pound',
      '¥ JPY — Japanese Yen',
      'C$ CAD — Canadian Dollar',
      'A$ AUD — Australian Dollar',
    ],
  },
  {
    key: 'language',
    name: 'Language',
    icon: icons.planet24,
    description: 'Display language',
    settingVariants: ['English', 'Russian'],
  },
  {
    key: 'dateFormat',
    name: 'Date Format',
    icon: icons.calendar24,
    description: 'How dates are displayed',
    settingVariants: ['Apr 09, 2026', '09/04/2026', '04/09/2026', '2026-04-09'],
  },
  {
    key: 'weekStart',
    name: 'Start of Week',
    icon: icons.clock24,
    description: 'First day of the week',
    settingVariants: ['Monday', 'Sunday', 'Saturday'],
  },
];

export { SETTINGS_CONFIG };
