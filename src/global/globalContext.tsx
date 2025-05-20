import { useMemo } from 'react';
import { useGlobal, UseGlobalStateType } from './useGlobal';
import { GlobalContext } from './context';

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
