import { SelectOption } from '@/shared/ui/Select';
import { SETTINGS_CONFIG } from './consts';

interface User {
  name: string;
  email: string;
  initials: string;
}

type Setting = string;

type Settings = {
  currency: string;
  language: string;
  dateFormat: string;
  weekStart: string;
};

type SettingKey = keyof Settings;

type SettingsCallbacks = {
  [K in SettingKey]: (value: string) => void;
};

type SettingConfig = {
  key: SettingKey;
  name: string;
  icon: UtilityTypes.SvgContent;
  description: string;
  options: SelectOption[];
};

type SettinsOptions = Record<SettingKey, SelectOption[]>;

type ConfigItem = (typeof SETTINGS_CONFIG)[number];

export type {
  User,
  Setting,
  Settings,
  SettingsCallbacks,
  ConfigItem,
  SettingConfig,
  SettinsOptions,
};
