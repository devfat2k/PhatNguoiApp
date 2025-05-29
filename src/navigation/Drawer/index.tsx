import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './CustomDrawerContent';
import { mainRoute } from '@src/constants/route_key';
import screenList from '@src/containers';

const Drawer = createDrawerNavigator();
export default function AppDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        drawerStyle: {
          width: '80%',
        },
        overlayColor: 'rgba(0, 0, 0, 0.5)',
        drawerPosition: 'right',
      }}
    >
      {Object.values(mainRoute).map(item => (
        <Drawer.Screen key={item} name={item} component={screenList[item as keyof typeof screenList]} />
      ))}
    </Drawer.Navigator>
  );
}
