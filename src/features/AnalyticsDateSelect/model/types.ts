import { ValueOf } from 'type-fest';
import { buttonModes } from './consts';

type ButtonMode = ValueOf<typeof buttonModes>;

export type { ButtonMode };
