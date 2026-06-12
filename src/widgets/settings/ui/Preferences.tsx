import { ContentCard } from '@/features/ContentCard';
import { colors } from '@/shared/styles';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { ReactNode } from 'react';

type PreferencesProps = {
  children?: ReactNode;
};

const Preferences = (props: PreferencesProps) => {
  const {} = props;

  return (
    <ContentCard>
      <Typography
        type={typographyProps.types.subtitle16}
        color={colors.lightgray[2]}
      >
        Preferences
      </Typography>
    </ContentCard>
  );
};

export { Preferences };
export type { PreferencesProps };
