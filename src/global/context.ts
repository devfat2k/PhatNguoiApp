import { createContext } from 'react';
import { UseGlobalStateType } from './useGlobal';

export const GlobalContext = createContext<UseGlobalStateType>({} as any);
