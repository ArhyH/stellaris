import { colors, sizes } from '@/shared/styles';
import { Page, PageCell } from './ui';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { Preferences, Profile } from '@/widgets/settings';

const user = {
  name: 'John Doe',
  email: 'example.mail@.com',
  initials: 'JD',
};

const SettingsPage = () => {
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

      <Profile user={user} />
      <Preferences />
    </Page>
  );
};

export { SettingsPage };
