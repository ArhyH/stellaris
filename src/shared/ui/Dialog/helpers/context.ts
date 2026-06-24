import { createContext, useContext } from 'react';

type DialogContextValue = {
  close: () => void;
};

const DialogContext = createContext<DialogContextValue | null>(null);

const useDialogContext = () => {
  const context = useContext(DialogContext);

  if (!context) {
    throw new Error('useDialogContext must be used within Dialog');
  }

  return context;
};

export { DialogContext, useDialogContext };
