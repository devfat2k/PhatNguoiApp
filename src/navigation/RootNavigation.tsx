import { createRef } from 'react';
import { CommonActions, createNavigationContainerRef, StackActions, DrawerActions } from '@react-navigation/native';
import { mainStackParamList } from './type';

export const isMountedRef = createRef();
export const navigationRef = createNavigationContainerRef<mainStackParamList>();

export function navigate<RouteName extends keyof mainStackParamList>(
  ...args: RouteName extends unknown
    ? undefined extends mainStackParamList[RouteName]
      ? [screen: RouteName] | [screen: RouteName, params: mainStackParamList[RouteName]]
      : [screen: RouteName, params: mainStackParamList[RouteName]]
    : never
) {
  if (navigationRef.isReady()) {
    navigationRef.current?.navigate(...args);
  }
}

export function goBack(times = 1) {
  for (let i = 0; i < times; i++) {
    if (navigationRef.current?.canGoBack()) {
      setTimeout(() => navigationRef.current?.goBack(), i * 10);
    } else {
      navigateAndReset([{ name: 'AppDrawer' }], 0);
      break;
    }
  }
}

export function navigateAndReset(routes: { name: string; params?: any }[], index: number) {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index,
      routes,
    }),
  );
}

export function replace(name: string, params?: any) {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
}

export function openDrawer() {
  if (navigationRef.isReady()) {
    navigationRef.current?.dispatch(DrawerActions.openDrawer());
  }
}
