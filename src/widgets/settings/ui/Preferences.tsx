import { Fragment } from 'react';
import { ContentCard, ContentCardHeader } from '@/features/ContentCard';
import { colors, sizes } from '@/shared/styles';
import { Separator, separatorProps } from '@/shared/ui/Separator';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { PreferenceItem } from './PreferenceItem';
import { SETTINGS_CONFIG } from '../model/consts';

type PreferencesProps = {
  preferencesCallbacks: Map<string, (value: string) => void>;
  selectedPreferences: Map<string, string>;
};

const Preferences = (props: PreferencesProps) => {
  const { preferencesCallbacks, selectedPreferences } = props;

  return (
    <ContentCard>
      <ContentCardHeader paddingBottom={sizes.sizes[16]}>
        <Typography
          type={typographyProps.types.subtitle16}
          color={colors.lightgray[2]}
        >
          Preferences
        </Typography>
      </ContentCardHeader>
      <Separator type={separatorProps.types.horizontal} />

      <>
        {SETTINGS_CONFIG.map((item, index) => (
          <Fragment key={item.name}>
            <PreferenceItem
              icon={item.icon}
              name={item.name}
              description={item.description}
              settings={item.settingVariants}
              selectedSetting={selectedPreferences.get(item.key)!}
              onChange={preferencesCallbacks.get(item.key)!}
            />

            {index < SETTINGS_CONFIG.length - 1 && (
              <Separator type={separatorProps.types.horizontal} />
            )}
          </Fragment>
        ))}
      </>
    </ContentCard>
  );
};

export { Preferences };
export type { PreferencesProps };
