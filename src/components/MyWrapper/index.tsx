import { scaleSize } from '@src/utils/styles/mixins';
import React, { FC, PropsWithChildren } from 'react';
import { SafeAreaView, StatusBar, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './styles';
type MyWrapperProps = PropsWithChildren<{
  isSafe?: boolean;
  isModal?: boolean;
  style?: ViewStyle;
}>;

const MyWrapper: FC<MyWrapperProps> = ({ isSafe, isModal, children, style }) => {
  const insets = useSafeAreaInsets();
  const content = () => {
    return (
      <>
        <StatusBar barStyle={'dark-content'} backgroundColor="transparent" translucent />
        {children}
      </>
    );
  };
  if (isSafe) {
    return (
      <SafeAreaView
        style={[
          styles.container,
          {
            paddingTop: isModal ? 0 : insets.top,
            borderTopLeftRadius: isModal ? scaleSize(24) : 0,
            borderTopRightRadius: isModal ? scaleSize(24) : 0,
          },
          style,
        ]}
      >
        {content()}
      </SafeAreaView>
    );
  }
  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: scaleSize(0),
        },
        style,
      ]}
    >
      {content()}
    </View>
  );
};

export default MyWrapper;
