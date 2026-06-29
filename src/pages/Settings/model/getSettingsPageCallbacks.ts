import { Dispatch, SetStateAction } from 'react';
import { Settings } from '@/widgets/settings/model/types';

const getSettingsPageCallbacks = (
  setSettings: Dispatch<SetStateAction<Settings>>,
) => {
  const onCurrencyChange = (currency: string) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      currency,
    }));
  };

  const onLanguageChange = (language: string) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      language,
    }));
  };

  const onDateFormatChange = (dateFormat: string) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      dateFormat,
    }));
  };

  const onWeekStartChange = (weekStart: string) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      weekStart,
    }));
  };

  return {
    currency: onCurrencyChange,
    language: onLanguageChange,
    dateFormat: onDateFormatChange,
    weekStart: onWeekStartChange,
  };
};

export { getSettingsPageCallbacks };
