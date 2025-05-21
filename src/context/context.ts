import { UseGlobalStateType } from '@src/hooks';
import { createContext } from 'react';

export const GlobalContext = createContext<UseGlobalStateType>({} as any);
