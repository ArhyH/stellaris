import { icons } from '@/shared/assets';

const SETTINGS_CONFIG = [
  {
    key: 'currency',
    name: 'Currency',
    icon: icons.arrowDown14,
    description: 'Your primary currency',
    settingVariants: [
      {
        id: '1',
        value: '$ USD — US Dollar',
      },
      {
        id: '2',
        value: '€ EUR — Euro',
      },
      {
        id: '3',
        value: '£ GBP — British Pound',
      },
      {
        id: '4',
        value: '¥ JPY — Japanese Yen',
      },
      {
        id: '5',
        value: 'C$ CAD — Canadian Dollar',
      },
      {
        id: '6',
        value: 'A$ AUD — Australian Dollar',
      },
    ],
  },
  {
    key: 'language',
    name: 'Language',
    icon: icons.arrowDown14,
    description: 'Display language',
    settingVariants: [
      {
        id: '1',
        value: 'English',
      },
      {
        id: '2',
        value: 'Russian',
      },
    ],
  },
  {
    key: 'dateFormat',
    name: 'Date Format',
    icon: icons.arrowDown14,
    description: 'How dates are displayed',
    settingVariants: [
      {
        id: '1',
        value: 'Apr 09, 2026',
      },
      {
        id: '2',
        value: '09/04/2026',
      },
      {
        id: '3',
        value: '04/09/2026',
      },
      {
        id: '4',
        value: '2026-04-09',
      },
    ],
  },
  {
    key: 'weekStart',
    name: 'Start of Week',
    icon: icons.arrowDown14,
    description: 'First day of the week',
    settingVariants: [
      {
        id: '1',
        value: 'Monday',
      },
      {
        id: '2',
        value: 'Sunday',
      },
      {
        id: '3',
        value: 'Saturday',
      },
    ],
  },
];

export { SETTINGS_CONFIG };
