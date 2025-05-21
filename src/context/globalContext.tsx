import { useMemo } from 'react';
import { GlobalContext } from './context';
import { useGlobal, UseGlobalStateType } from '@src/hooks';

// In case use outside component
let GlobalContextProviderValue: UseGlobalStateType;

const GlobalContextProvider = ({ children }: IMenuContextProviderProps) => {
  const { ...args } = useGlobal();

  const value = useMemo(
    () => ({
      ...args,
    }),
    [args],
  );

  GlobalContextProviderValue = value;

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

interface IMenuContextProviderProps {
  children?: React.ReactNode;
}

export { GlobalContext, GlobalContextProvider, GlobalContextProviderValue };
