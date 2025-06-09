import React, { useEffect, useState } from 'react';
import RootNavigator from './src/navigation';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Animated, Dimensions, StyleSheet } from 'react-native';
import BootSplash from 'react-native-bootsplash';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnboardingScreen from './src/containers/Onboarding/OnboardingScreen';
import { GlobalContextProvider } from './src/context/index';
import ToastProvider from './src/global/provider';
import { ToastMessage, Loading } from './src/global/index';
const { width } = Dimensions.get('window');
type Props = {
  onAnimationEnd: () => void;
};
const AnimatedBootSplash = ({ onAnimationEnd }: Props) => {
  const [scale] = useState(() => new Animated.Value(1));
  const { container, logo } = BootSplash.useHideAnimation({
    manifest: require('./src/assets/bootsplash/manifest.json'),
    logo: require('./src/assets/bootsplash/logo.png'),
    statusBarTranslucent: true,
    navigationBarTranslucent: false,

    animate: () => {
      Animated.sequence([
        Animated.timing(scale, {
          useNativeDriver: true,
          toValue: 1.2,
          duration: 300,
        }),
        Animated.timing(scale, {
          useNativeDriver: true,
          toValue: 0,
          duration: 500,
        }),
      ]).start(() => {
        onAnimationEnd();
      });
    },
  });

  return (
    <Animated.View {...container} style={[container.style, styles.splashContainer]}>
      <Animated.Image {...logo} style={[logo.style, { transform: [{ scale }] }]} />
    </Animated.View>
  );
};

const App = () => {
  const [visibleBootSplash, setVisibleBootSplash] = useState<boolean>(true);
  const [isOnboardingVisible, setOnboardingVisible] = useState<boolean>(false);
  const [isAppReady, setAppReady] = useState<boolean>(false);
  const [slidePosition] = useState(new Animated.Value(width));

  useEffect(() => {
    const prepareApp = async () => {
      try {
        const hasSeenOnboarding = await AsyncStorage.getItem('hasSeenOnboarding');
        setOnboardingVisible(!hasSeenOnboarding);
        setAppReady(true);
      } catch (error) {
        console.log('Error preparing app:', error);
        setOnboardingVisible(true);
        setAppReady(true);
      }
    };
    prepareApp();
  }, []);

  const handleBootSplashEnd = () => {
    setVisibleBootSplash(false);
    Animated.timing(slidePosition, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  const handleOnboardingDone = async () => {
    Animated.timing(slidePosition, {
      toValue: -width,
      duration: 300,
      useNativeDriver: true,
    }).start(async () => {
      await AsyncStorage.setItem('hasSeenOnboarding', 'true');
      setOnboardingVisible(false);
      Animated.timing(slidePosition, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  };

  const renderContent = () => {
    if (isOnboardingVisible) {
      return <OnboardingScreen onDone={handleOnboardingDone} />;
    } else if (isAppReady) {
      return <RootNavigator />;
    }
    return null;
  };
  return (
    <Provider store={store}>
      <GestureHandlerRootView>
        <SafeAreaProvider>
          <PaperProvider>
            <GlobalContextProvider>
              <ToastProvider>
                {visibleBootSplash ? <AnimatedBootSplash onAnimationEnd={handleBootSplashEnd} /> : null}
                <Animated.View style={[styles.content, { transform: [{ translateX: slidePosition }] }]}>
                  {renderContent()}
                </Animated.View>
                <Loading />
                <ToastMessage />
              </ToastProvider>
            </GlobalContextProvider>
          </PaperProvider>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </Provider>
  );
};
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  logo: {
    resizeMode: 'contain',
  },
  splashContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    zIndex: 10,
  },
});
export default App;
