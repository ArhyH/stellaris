import { icons } from '@/shared/assets';
import { SettingConfig, SettinsOptions } from './types';

const SETTING_OPTIONS_CONFIG: SettinsOptions = {
  currency: [
    { value: 'usd', description: '$ USD — US Dollar' },
    { value: 'eur', description: '€ EUR — Euro' },
    { value: 'gbp', description: '£ GBP — British Pound' },
    { value: 'jpy', description: '¥ JPY — Japanese Yen' },
    { value: 'cad', description: 'C$ CAD — Canadian Dollar' },
    { value: 'aud', description: 'A$ AUD — Australian Dollar' },
  ],
  language: [
    { value: 'eng', description: 'English' },
    { value: 'ru', description: 'Russian' },
  ],

  dateFormat: [
    { value: 'mdy', description: 'Apr 09, 2026' },
    { value: 'd/m/y', description: '09/04/2026' },
    { value: 'm/d/y', description: '04/09/2026' },
    { value: 'y-m-d', description: '2026-04-09' },
  ],
  weekStart: [
    { value: 'mon', description: 'Monday' },
    { value: 'sun', description: 'Sunday' },
    { value: 'sat', description: 'Saturday' },
  ],
};

const SETTINGS_CONFIG: SettingConfig[] = [
  {
    key: 'currency',
    name: 'Currency',
    icon: icons.currency24,
    description: 'Your primary currency',
    options: SETTING_OPTIONS_CONFIG.currency,
  },
  {
    key: 'language',
    name: 'Language',
    icon: icons.planet24,
    description: 'Display language',
    options: SETTING_OPTIONS_CONFIG.language,
  },
  {
    key: 'dateFormat',
    name: 'Date Format',
    icon: icons.calendar24,
    description: 'How dates are displayed',
    options: SETTING_OPTIONS_CONFIG.dateFormat,
  },
  {
    key: 'weekStart',
    name: 'Start of Week',
    icon: icons.clock24,
    description: 'First day of the week',
    options: SETTING_OPTIONS_CONFIG.weekStart,
  },
];

export { SETTINGS_CONFIG };
