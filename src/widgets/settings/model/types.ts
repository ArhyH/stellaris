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

type SettingsCallbacks = {
  [K in keyof Settings]: (value: string) => void;
};

type SettingConfig = {
  key: keyof Settings;
  name: string;
  icon: UtilityTypes.SvgContent;
  description: string;
  settingVariants: Setting[];
};

type ConfigItem = (typeof SETTINGS_CONFIG)[number];

export type {
  User,
  Setting,
  Settings,
  SettingsCallbacks,
  ConfigItem,
  SettingConfig,
};
