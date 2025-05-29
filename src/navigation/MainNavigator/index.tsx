import React from 'react';
import { CardStyleInterpolators, StackNavigationOptions, createStackNavigator } from '@react-navigation/stack';
import AppDrawer from '../Drawer';

const Stack = createStackNavigator();
const screenOptions: StackNavigationOptions = {
  headerShown: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'AppDrawer'} screenOptions={screenOptions}>
      <Stack.Screen
        name="AppDrawer"
        component={AppDrawer}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
