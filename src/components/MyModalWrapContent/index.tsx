import useBackHandler from '@src/hooks/useBackHandler';
import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import RNModal, { ModalProps as RNModalProps } from 'react-native-modal';

interface ModalProps extends Partial<RNModalProps> {
  isVisible: boolean;
  onRequestClose?: () => void;
}

const MyModalWrapContent: FC<ModalProps> = props => {
  const { isVisible, onRequestClose = () => {}, children, style, ...rest } = props;
  useBackHandler({
    enabled: isVisible,
    callback: onRequestClose,
  });

  return (
    <RNModal
      isVisible={isVisible}
      presentationStyle="overFullScreen"
      style={[{ margin: 0 }, style]}
      useNativeDriver
      animationInTiming={500}
      animationIn={'slideInUp'}
      animationOut={'fadeOutDownBig'}
      hideModalContentWhileAnimating={true}
      {...rest}
    >
      <View style={styles.container}>{children}</View>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default MyModalWrapContent;
