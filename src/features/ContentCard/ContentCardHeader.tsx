import { ReactNode } from 'react';
import { BoxHeader } from '@/shared/ui/Box';
import { ValueOf } from 'type-fest';
import { sizes } from '@/shared/styles';

type ContentCardHeaderProps = {
  children: ReactNode;
  paddingBottom?: ValueOf<typeof sizes.sizes>;
};

const ContentCardHeader = (props: ContentCardHeaderProps) => {
  const { children, paddingBottom } = props;

  return <BoxHeader paddingBottom={paddingBottom}>{children}</BoxHeader>;
};

export { ContentCardHeader };
export type { ContentCardHeaderProps };
