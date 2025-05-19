import React, { useEffect, useState } from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity, Text } from 'react-native';
import { SvgProps } from 'react-native-svg';
import styles from './styles';
import { Colors } from '@src/utils/styles/color';
import { TypographyStyle } from '@src/utils/styles/typography';
import {
  HomeActiveIcon,
  HomeInActiveIcon,
  NotificationActiveIcon,
  NotificationInActiveIcon,
  SettingActiveIcon,
  SettingInActiveIcon,
  VehicleActiveIcon,
  VehicleInActiveIcon,
} from '@src/utils/icon';

const CustomTabBar = (props: BottomTabBarProps) => {
  const { state, descriptors, navigation } = props;
  const [prevIndex, setPrevIndex] = useState<number>(0);
  useEffect(() => {
    setPrevIndex(state.index);
  }, [state.index]);

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = prevIndex === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, { merge: true });
          }
        };

        if (typeof label === 'string') {
          const Icon = isFocused ? RouteData[label]?.iconActive : RouteData[label]?.icon;
          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={onPress}
              style={[
                styles.itemContainer,
                {
                  opacity: isFocused ? 1 : 0.8,
                },
              ]}
            >
              <Icon />
              <Text
                style={{
                  color: isFocused ? Colors.Primary_500 : Colors.Neutral_500,
                  ...TypographyStyle.BODY_SMALL_TIGHT_REGULAR,
                }}
              >
                {RouteData[label]?.title}
              </Text>
            </TouchableOpacity>
          );
        }
      })}
    </View>
  );
};

export default CustomTabBar;

const RouteData: {
  [name: string]: {
    title: string;
    icon: React.FC<SvgProps>;
    iconActive: React.FC<SvgProps>;
    testId?: string;
  };
} = {
  HomeTab: {
    title: 'Trang chủ',
    icon: HomeInActiveIcon,
    iconActive: HomeActiveIcon,
  },
  VehicleTab: {
    title: 'Phương tiện',
    icon: VehicleInActiveIcon,
    iconActive: VehicleActiveIcon,
  },
  NotificationTab: {
    title: 'Thông báo',
    icon: NotificationInActiveIcon,
    iconActive: NotificationActiveIcon,
  },
  SettingsTab: {
    title: 'Cài đặt',
    icon: SettingInActiveIcon,
    iconActive: SettingActiveIcon,
  },
};
