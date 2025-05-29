import React, { createContext, useContext, useState, useEffect, FC } from 'react';
import {
  getMessaging,
  requestPermission,
  getToken,
  onMessage,
  onNotificationOpenedApp,
  getInitialNotification,
} from '@react-native-firebase/messaging';
import { getApp } from '@react-native-firebase/app';
import { apiBase } from '@src/api';
import { useAuth } from '../useAuth';
import { Api } from '@src/constants';
import { GlobalContext } from '@src/context';
import { statusCode } from '@src/types/api';
import { PermissionsAndroid, Platform } from 'react-native';
const firebaseApp = getApp();
const messaging = getMessaging(firebaseApp);
interface FCMContextType {
  fcmToken: string | null;
  isFCMInitialized: boolean;
}
const FCMContext = createContext<FCMContextType | undefined>(undefined);
const FCMProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [fcmToken, setFcmToken] = useState<string | null>(null);
  const [isFCMInitialized, setIsFCMInitialized] = useState(false);
  const { token: authToken } = useAuth();
  const { showMessage } = useContext(GlobalContext);
  const requestNotificationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS, {
          title: 'Notification Permission',
          message: 'This app needs permission to send you notifications.',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        });
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (error) {
        console.log('Error requesting notification permission:', error);
        return false;
      }
    }
    return true;
  };

  const setupFCM = async () => {
    try {
      const hasPermission = await requestNotificationPermission();
      if (!hasPermission) {
        showMessage({
          type: 'error',
          text: 'Notification permission denied',
        });
        return null;
      }

      const authStatus = await requestPermission(messaging);
      console.log('authStatus', authStatus);

      if (authStatus === 1) {
        const fcmToken = await getToken(messaging);
        if (fcmToken) {
          console.log('FCM Token: =>>>>>', fcmToken);
          setFcmToken(fcmToken); // Cập nhật token vào state
          return fcmToken;
        } else {
          console.log('Failed to get FCM token');
          return null;
        }
      } else {
        showMessage({
          type: 'error',
          text: `Notification permission denied or provisional: ${authStatus}`,
        });
        return null;
      }
    } catch (error) {
      console.log('Error during FCM setup:', error);
      return null;
    }
  };
  // const sendFCMTokenToServer = async (fcmToken: string, authToken: string | null) => {
  //   try {
  //     if (!authToken) {
  //       return;
  //     } else {
  //       const response: any = await apiBase('POST', Api.PUSH_NOTIFICATIONS, {
  //         token: fcmToken,
  //       });
  //       if (response.statusCode === statusCode.SUCCESS_201) {
  //         return response?.data;
  //       }
  //     }
  //   } catch (error) {
  //     console.log('Error sending FCM token to server:', error);
  //   }
  // };

  useEffect(() => {
    const initializeFCM = async () => {
      const token = await setupFCM();
      console.log('token', token);
      // if (token) {
      //   setFcmToken(token);
      //   if (authToken) {
      //     await sendFCMTokenToServer(token, authToken);
      //   }
      // }
      setIsFCMInitialized(true);
    };
    initializeFCM();
  }, [authToken]);

  useEffect(() => {
    const unsubscribeForeground = onMessage(messaging, async remoteMessage => {
      console.log('Foreground notification:', remoteMessage);
    });

    const unsubscribeBackground = onNotificationOpenedApp(messaging, remoteMessage => {
      console.log('Notification opened from background:', remoteMessage);
    });
    return () => {
      unsubscribeForeground();
      unsubscribeBackground();
    };
  }, []);

  useEffect(() => {
    const checkInitialNotification = async () => {
      const initialNotification = await getInitialNotification(messaging);
      if (initialNotification) {
        console.log('App opened from notification:', initialNotification);
      }
    };
    checkInitialNotification();
  }, []);

  return <FCMContext.Provider value={{ fcmToken, isFCMInitialized }}>{children}</FCMContext.Provider>;
};
export const useFCM = (): FCMContextType => {
  const context = useContext(FCMContext);
  if (!context) {
    throw new Error('useFCM must be used within an FCMProvider');
  }
  return context;
};

export default FCMProvider;
