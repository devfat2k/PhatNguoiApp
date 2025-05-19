import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import AuthStack from './AuthStack/index';
import MainNavigator from './MainNavigator';
import { navigationRef } from './RootNavigation';

function RootNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      {/* {isAuthenticated ? <MainNavigator /> : <AuthStack />} */}
      <MainNavigator />
    </NavigationContainer>
  );
}

export default RootNavigator;
