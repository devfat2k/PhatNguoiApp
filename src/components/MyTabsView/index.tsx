import React, { FC, useCallback, useState, ReactNode } from 'react';
import { Animated, View, Text, TouchableWithoutFeedback, useWindowDimensions, ViewStyle } from 'react-native';
import { TabView, NavigationState, SceneRendererProps } from 'react-native-tab-view';
import EmptyData from '../EmptyData';
import { styles } from './styles';
import { CheckedIcon } from '@src/utils/icon';
import { scaleHeight, scaleWidth } from '@src/utils/styles/mixins';

type Route = {
  key: string;
  title: string;
  icon: any;
};

interface MyTabViewProps {
  indexTab?: number;
  routes: Route[];
  scenes: { [key: string]: ReactNode };
  tabBarStyle?: ViewStyle;
  onChangeTab?: (index: number) => void;
  callBackKeyTab?: (key: string) => void;
  oChangeKeyTab?: (key: string) => void;
  containerStyle?: ViewStyle;
}
type State = NavigationState<Route>;
const MyTabView: FC<MyTabViewProps> = ({ routes, scenes, onChangeTab, callBackKeyTab, containerStyle }) => {
  const layout = useWindowDimensions();
  const [index, onIndexChange] = useState<number>(0);
  const onChangeIndex = (indexTab: number) => {
    onChangeTab?.(indexTab);
    onIndexChange(indexTab);
  };
  const renderItem = useCallback(
    ({ navigationState, position }: { navigationState: State; position: Animated.AnimatedInterpolation<number> }) =>
      ({ route, index }: { route: Route; index: number }) => {
        const inputRange = navigationState.routes.map((_, i) => i);
        const activeOpacity = position.interpolate({
          inputRange,
          outputRange: inputRange.map((i: number) => (i === index ? 1 : 0)),
        });
        const inactiveOpacity = position.interpolate({
          inputRange,
          outputRange: inputRange.map((i: number) => (i === index ? 0 : 1)),
        });
        return (
          <View style={styles.tabView}>
            <Animated.View style={[styles.item, { opacity: inactiveOpacity }]}>
              {route?.icon && route?.icon}
              <Text style={styles.textLabel}>{route?.title ?? ''}</Text>
            </Animated.View>
            <Animated.View style={[styles.activeItem, { opacity: activeOpacity }]}>
              <CheckedIcon style={{ position: 'absolute', zIndex: 999, top: scaleHeight(-5), right: scaleWidth(-5) }} />
              {route?.icon && route?.icon}
              <Text style={styles.textLabelActive}>{route?.title ?? ''}</Text>
            </Animated.View>
          </View>
        );
      },
    [],
  );
  const renderTabBar = (props: SceneRendererProps & { navigationState: State }) => (
    <View style={styles.tabbar}>
      {props.navigationState.routes.map((route: Route, index: number) => {
        return (
          <TouchableWithoutFeedback
            key={route?.key}
            onPress={() => {
              props.jumpTo(route?.key);
              callBackKeyTab?.(route?.key);
            }}
          >
            {renderItem(props)({ route, index })}
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
  const renderScene = ({ route }: { route: Route }) => {
    if (!scenes[route?.key]) {
      console.log(`Không tìm thấy scene cho key: ${route.key}`);
      return (
        <View style={styles.sceneFallback}>
          <EmptyData text="Hiện tại chưa có xe nào!" />
        </View>
      );
    }
    return scenes[route?.key];
  };
  return (
    <TabView
      navigationState={{
        index,
        routes,
      }}
      initialLayout={{ width: layout.width }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={i => onChangeIndex(i)}
      style={containerStyle}
    />
  );
};

export default MyTabView;
