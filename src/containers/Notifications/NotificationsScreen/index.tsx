import React, { FC } from 'react';
import { View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { mainStackParamList } from '../../../navigation/type';
import { MyHeader, MyWrapper } from '@components';
import { styles } from './styles';
interface NotificationScreenProps extends NativeStackScreenProps<mainStackParamList, 'NotificationScreen'> {}
const NotificationScreen: FC<NotificationScreenProps> = () => {
  return (
    <MyWrapper isSafe>
      <MyHeader title="Thông báo" />
      <View style={styles.container}></View>
    </MyWrapper>
  );
};

export default NotificationScreen;
