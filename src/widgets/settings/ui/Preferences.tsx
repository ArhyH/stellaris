import { Fragment } from 'react';
import { colors, sizes } from '@/shared/styles';
import { Separator, separatorProps } from '@/shared/ui/Separator';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { PreferenceItem } from './PreferenceItem';
import { SETTINGS_CONFIG } from '../model/consts';
import { ConfigItem, Settings, SettingsCallbacks } from '../model/types';
import { Box, BoxHeader } from '@/shared/ui/Box';

type PreferencesProps = {
  callbacks: SettingsCallbacks;
  settings: Settings;
};

const mapDataToPreferenceItem = (
  callbacks: SettingsCallbacks,
  currentSettings: Settings,
  config: ConfigItem[],
) => {
  return config.map((item) => ({
    ...item,
    selectedSetting: currentSettings[item.key],
    onChange: callbacks[item.key],
  }));
};

const Preferences = (props: PreferencesProps) => {
  const { callbacks, settings } = props;

  const items = mapDataToPreferenceItem(callbacks, settings, SETTINGS_CONFIG);

  return (
    <Box padding={sizes.sizes[24]}>
      <BoxHeader paddingBottom={sizes.sizes[16]}>
        <Typography
          type={typographyProps.types.subtitle16}
          color={colors.lightgray[2]}
        >
          Preferences
        </Typography>
      </BoxHeader>
      <Separator type={separatorProps.types.horizontal} />

      <>
        {items.map((item, index) => (
          <Fragment key={item.name}>
            <PreferenceItem
              icon={item.icon}
              name={item.name}
              description={item.description}
              options={item.options}
              selectedSetting={item.selectedSetting}
              onChange={item.onChange}
            />

            {index < SETTINGS_CONFIG.length - 1 && (
              <Separator type={separatorProps.types.horizontal} />
            )}
          </Fragment>
        ))}
      </>
    </Box>
  );
};

export { Preferences };
export type { PreferencesProps };
