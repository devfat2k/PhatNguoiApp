import React, { createContext, FC, useCallback, useContext, useEffect, useState } from 'react';
import { StorageService } from '@src/common';
import { StorageKey } from '@src/constants';
import { GlobalContext } from '@src/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { NavigationProp } from '@react-navigation/native';
import { logout } from '@src/redux/slice/profileSlice/index';
import { navigate } from '@src/navigation/RootNavigation';
import { getUserInfo } from '@src/redux/actions/profiles';
import { AuthEvents } from '@src/api/apiBase';
import { loginWithFbIos, loginWithSocial } from '@src/redux/actions/authen';
import { LoginRequest } from '@src/types/authen';
export type AuthType = 'google' | 'facebook' | 'apple';
interface AuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  login: (type: AuthType, idToken: string) => Promise<void>;
  cleanStorageAndlogout: () => void;
  checkAuth: (navigation: NavigationProp<any>) => Promise<void>;
  logoutApp: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
const AuthProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const dispatch = useDispatch();
  const { handleLoading, showMessage, setModalProps, handleModal } = useContext(GlobalContext);

  const checkToken = useCallback(async () => {
    try {
      const storedToken: any = await StorageService.getItem(StorageKey.TOKEN);
      if (storedToken) {
        setToken(storedToken);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error checking token:', error);
      setToken(null);
      return false;
    }
  }, []);

  const login = useCallback(
    async (type: AuthType, data: string | LoginRequest) => {
      try {
        handleLoading(true);
        if (type === 'facebook') {
          await loginWithFbIos(data as LoginRequest);
        } else {
          await loginWithSocial(
            {
              token: data,
            },
            type,
          );
        }
        dispatch(getUserInfo() as any);
      } catch (error: any) {
        showMessage({
          type: 'error',
          text: 'There was a problem, please try again',
        });
      } finally {
        handleLoading(false);
        checkToken();
      }
    },
    [checkToken],
  );

  const cleanStorageAndlogout = useCallback(async () => {
    await AsyncStorage.removeItem(StorageKey.TOKEN);
    await AsyncStorage.removeItem(StorageKey.REFRESH_TOKEN);
    logoutApp();
    setToken(null);
  }, []);
  const logoutApp = () => {
    dispatch(logout());
  };

  const checkAuth = useCallback(async (navigation: NavigationProp<any>) => {
    try {
      const tokenStorage: any = await StorageService.getItem(StorageKey.TOKEN);
      if (!tokenStorage) {
        return navigate('AuthScreen');
      }
      handleLoading(true);
      dispatch(getUserInfo() as any);
    } catch (error: any) {
      console.log('Error during checking auth:', error);
      setModalProps({
        closeOnBackdropPress: true,
        title: 'Something went wrong',
        iconUri: 'ic_warning',
        iconStyle: {
          width: 32,
          height: 32,
        },
        description: 'Account authentication failed, please try or log in again',
        onConfirm: () => {
          handleModal(false);
          checkAuth(navigation);
        },
        onCancel: () => {
          handleModal(false);
          navigate('AuthScreen');
          cleanStorageAndlogout();
        },
        confirmText: 'Try again',
        cancelText: 'Login',
      });
      cleanStorageAndlogout();
      handleModal(true);
    } finally {
      handleLoading(false);
    }
  }, []);

  useEffect(() => {
    checkToken();
  }, []);

  useEffect(() => {
    const removeListener = AuthEvents.addTokenExpiredListener(() => {
      cleanStorageAndlogout();
      showMessage({
        type: 'error',
        text: 'Your session has expired. Please log in again.',
      });
    });
    return () => removeListener();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!token,
        token,
        login,
        cleanStorageAndlogout,
        checkAuth,
        logoutApp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthProvider;
