import React, { FC } from 'react';
import { View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { mainStackParamList } from '../../../navigation/type';
import { MyHeader, MyWrapper } from '@components';
import { Colors } from '@src/utils';
import { styles } from './styles';

interface ConfigNotificationScreenProps
  extends NativeStackScreenProps<mainStackParamList, 'ConfigNotificationScreen'> {}
const ConfigNotificationScreen: FC<ConfigNotificationScreenProps> = () => {
  return (
    <MyWrapper isSafe style={{ backgroundColor: Colors.Primary_500 }}>
      <MyHeader title="Nâng cấp Premium" />
      <View style={styles.container}></View>
    </MyWrapper>
  );
};

export default ConfigNotificationScreen;
