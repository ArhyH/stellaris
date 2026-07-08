import { ValueOf } from 'type-fest';
import { FinanceTransferTypes, ViewModes } from '../consts';
import { IconName } from '../assets';

type FinanceTransferType = ValueOf<typeof FinanceTransferTypes>;
type ViewMode = ValueOf<typeof ViewModes>;

type ID = string;
type DATE = string;
type AMOUNT = number;
type LABEL = string;
type ICON = IconName;
type COLOR = string;

interface Summary {
  income: number;
  expense: number;
}

export type {
  FinanceTransferType,
  ViewMode,
  ID,
  DATE,
  AMOUNT,
  LABEL,
  ICON,
  COLOR,
  Summary,
};
