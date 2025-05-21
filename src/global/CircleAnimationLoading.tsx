import { MyLoading } from '@src/components';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
// import Animated, { useAnimatedProps, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import { useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

// const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const LoadingAnimation = () => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(withTiming(1, { duration: 1500 }), -1, false);
  }, []);

  return (
    <View style={styles.container}>
      <MyLoading />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    opacity: 0.6,
  },
});

export default LoadingAnimation;
