import { ButtonMode } from './types';
import { buttonModes } from './consts';

const getCallbacks = (
  onChange: (value: string) => void,
  transactionsDateKeys: string[],
  index: number,
) => {
  const onDateButtonClick = (mode: ButtonMode) => {
    const offset = mode === buttonModes.prev ? -1 : 1;

    const nextIndex = index + offset;

    if (nextIndex < 0 || nextIndex >= transactionsDateKeys.length) {
      return;
    }

    onChange(transactionsDateKeys[nextIndex]);
  };

  const onDateChange = (value: string) => {
    onChange(value);
  };

  return { onDateButtonClick, onDateChange };
};

export { getCallbacks };
