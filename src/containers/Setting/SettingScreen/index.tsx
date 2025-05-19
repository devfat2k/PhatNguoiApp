import React, { FC } from 'react';
import { View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { mainStackParamList } from '../../../navigation/type';
import { MyHeader, MyWrapper } from '@components';
import { styles } from './styles';
interface SettingScreenProps extends NativeStackScreenProps<mainStackParamList, 'NotificationScreen'> {}
const SettingScreen: FC<SettingScreenProps> = () => {
  return (
    <MyWrapper isSafe>
      <MyHeader title="Caidat" />
      <View style={styles.container}></View>
    </MyWrapper>
  );
};

export default SettingScreen;
