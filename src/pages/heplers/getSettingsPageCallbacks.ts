import { Dispatch, SetStateAction } from 'react';
import { Settings } from '../types';

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

  return [
    { key: 'currency', cb: onCurrencyChange },
    { key: 'language', cb: onLanguageChange },
    { key: 'dateFormat', cb: onDateFormatChange },
    { key: 'weekStart', cb: onWeekStartChange },
  ];
};

export { getSettingsPageCallbacks };
