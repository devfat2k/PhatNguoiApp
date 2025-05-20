import React, { useEffect, useState } from 'react';
import { Keyboard, View } from 'react-native';
import CustomTabBar from './CustomTabBar/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screenList from '../../containers/index';
import { homeTabRoute, settingsTabRoute, vehicleTabRoute, notificationTabRoute } from '../../constants/route_key';

const Tab = createBottomTabNavigator();
const StackHome = createNativeStackNavigator();
const StackVehicle = createNativeStackNavigator();
const StackNotification = createNativeStackNavigator();
const StackSettings = createNativeStackNavigator();

function HomeStack() {
  return (
    <StackHome.Navigator initialRouteName={homeTabRoute.homeScreen}>
      {Object.values(homeTabRoute).map(item => {
        return (
          <StackHome.Screen
            key={item}
            name={item}
            component={screenList[item as keyof typeof screenList]}
            options={{
              headerShown: false,
            }}
          />
        );
      })}
    </StackHome.Navigator>
  );
}

function VehicleStack() {
  return (
    <StackVehicle.Navigator initialRouteName={vehicleTabRoute.myVehicleScreen}>
      {Object.values(vehicleTabRoute).map(item => {
        return (
          <StackVehicle.Screen
            key={item}
            name={item}
            component={screenList[item as keyof typeof screenList]}
            options={{
              headerShown: false,
            }}
          />
        );
      })}
    </StackVehicle.Navigator>
  );
}

function NotificationStack() {
  return (
    <StackNotification.Navigator initialRouteName={notificationTabRoute.notificationScreen}>
      {Object.values(notificationTabRoute).map(item => {
        return (
          <StackNotification.Screen
            key={item}
            name={item}
            component={screenList[item as keyof typeof screenList]}
            options={{
              headerShown: false,
            }}
          />
        );
      })}
    </StackNotification.Navigator>
  );
}

function SettingStack() {
  return (
    <StackSettings.Navigator initialRouteName={settingsTabRoute.settingScreen}>
      {Object.values(settingsTabRoute).map(item => {
        return (
          <StackSettings.Screen
            key={item}
            name={item}
            component={screenList[item as keyof typeof screenList]}
            options={{
              headerShown: false,
            }}
          />
        );
      })}
    </StackSettings.Navigator>
  );
}

export function AppTab() {
  const [isKeyboardVisible, setKeyboardVisible] = useState<boolean>(false);

  useEffect(() => {
    const showSubScription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });

    const hideSubScription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      showSubScription.remove();
      hideSubScription.remove();
    };
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <Tab.Navigator
        screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true }}
        tabBar={props => (isKeyboardVisible ? <View /> : <CustomTabBar {...props} />)}
      >
        <Tab.Screen name={'HomeTab'} component={HomeStack} />
        <Tab.Screen name={'VehicleTab'} component={VehicleStack} />
        <Tab.Screen name={'NotificationTab'} component={NotificationStack} />
        <Tab.Screen name={'SettingsTab'} component={SettingStack} />
      </Tab.Navigator>
    </View>
  );
}
