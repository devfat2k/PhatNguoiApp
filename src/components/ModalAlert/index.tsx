import React, { FC } from 'react';
import { View } from 'react-native';
import RNModal, { ModalProps as RNModalProps } from 'react-native-modal';
import { Colors } from '@src/utils';
import useBackHandler from '@src/hooks/useBackHandler';
import { styles } from './styles';

interface MyModalAlertProps extends Partial<RNModalProps> {
  isVisible: boolean;
  onRequestClose?: () => void;
  bg_color?: string;
}
const MyModalAlert: FC<MyModalAlertProps> = props => {
  const { isVisible, onRequestClose = () => {}, bg_color, children, ...rest } = props;
  useBackHandler({
    enabled: isVisible,
    callback: onRequestClose,
  });

  return (
    <RNModal
      isVisible={isVisible}
      animationIn={'fadeInUp'}
      animationOut={'fadeOut'}
      presentationStyle={'overFullScreen'}
      animationInTiming={500}
      hideModalContentWhileAnimating={true}
      onBackdropPress={onRequestClose}
      useNativeDriver
      {...rest}
    >
      <View
        style={[
          styles.container,
          {
            backgroundColor: bg_color ? bg_color : Colors.WHITE,
          },
        ]}
      >
        {children}
      </View>
    </RNModal>
  );
};

export default MyModalAlert;
