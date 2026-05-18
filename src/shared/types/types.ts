import { ValueOf } from 'type-fest';
import { FinanceTransferTypes } from '../consts';

type FinanceTransferType = ValueOf<typeof FinanceTransferTypes>;
type ID = string;
type DATE = string;
type AMOUNT = number;
type LABEL = string;
type ICON = string;
type COLOR = string;

export type { FinanceTransferType, ID, DATE, AMOUNT, LABEL, ICON, COLOR };
