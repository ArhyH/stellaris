import { ReactElement, ReactNode } from 'react';

type DialogProps = {
  children: ReactNode;
  onClose?: () => void;
  open?: boolean;
  onOpen?: (open: boolean) => void;
};

type DialogBodyProps = {
  children: ReactNode;
};

type DialogCloseProps = {
  children: ReactElement<{ onClick: () => void }>;
};

type DialogContentProps = {
  children: ReactNode;
};

type DialogHeaderProps = {
  children: ReactNode;
};

export type {
  DialogProps,
  DialogBodyProps,
  DialogCloseProps,
  DialogContentProps,
  DialogHeaderProps,
};
