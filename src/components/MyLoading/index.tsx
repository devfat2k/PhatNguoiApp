import React from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { scaleHeight, scaleWidth } from '@src/utils/styles/mixins';

const MyLoading = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../utils/lotties/loading.json')}
        style={{ height: scaleHeight(150), width: scaleWidth(150) }}
        autoPlay
        loop
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 9999,
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
});

export default MyLoading;
