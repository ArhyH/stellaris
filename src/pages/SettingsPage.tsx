import { useState } from 'react';
import { colors, sizes } from '@/shared/styles';
import { Page, PageCell } from '@/shared/ui/Page';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { Preferences, Profile } from '@/widgets/settings';
import { getSettingsPageCallbacks } from './heplers/getSettingsPageCallbacks';

const user = {
  name: 'John Doe',
  email: 'example.mail@.com',
  initials: 'JD',
};

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    currency: '$ USD — US Dollar',
    language: 'English',
    dateFormat: 'Apr 09, 2026',
    weekStart: 'Monday',
  });

  // const [user, setUser] = useState({
  //   name: 'John Doe',
  //   email: 'example.mail@.com',
  //   initials: 'JD',
  // });

  return (
    <Page>
      <PageCell gap={sizes.sizes[4]}>
        <Typography
          type={typographyProps.types.title28}
          color={colors.base.white}
          tag={typographyProps.tags.h1}
        >
          Settings
        </Typography>

        <Typography
          type={typographyProps.types.text14}
          color={colors.lightgray[2]}
        >
          Customize your Fintrack experience
        </Typography>
      </PageCell>

      <Profile user={user} onClick={() => null} />

      <Preferences
        callbacks={getSettingsPageCallbacks(setSettings)}
        settings={settings}
      />
    </Page>
  );
};

export { SettingsPage };
