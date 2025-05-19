import React, { FC } from 'react';
import { View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { mainStackParamList } from '../../../navigation/type';
import { MyHeader, MyWrapper } from '@components';
import { styles } from './styles';
interface MyVehicleScreenProps extends NativeStackScreenProps<mainStackParamList, 'MyVehicleScreen'> {}
const MyVehicleScreen: FC<MyVehicleScreenProps> = () => {
  return (
    <MyWrapper isSafe>
      <MyHeader title="Phương tiện của tôi" />
      <View style={styles.container}></View>
    </MyWrapper>
  );
};

export default MyVehicleScreen;
