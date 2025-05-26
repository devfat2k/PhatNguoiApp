import React, { FC } from 'react';
import { View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { mainStackParamList } from '../../../navigation/type';
import { MyHeader, MyWrapper } from '@components';
import { styles } from './styles';
import { Colors } from '@src/utils';

interface AddVehicleScreenProps extends NativeStackScreenProps<mainStackParamList, 'AddVehicleScreen'> {}
const AddVehicleScreen: FC<AddVehicleScreenProps> = () => {
  return (
    <MyWrapper isSafe style={{ backgroundColor: Colors.Primary_500 }}>
      <MyHeader title="Thêm phương tiện" />
      <View style={styles.container}></View>
    </MyWrapper>
  );
};

export default AddVehicleScreen;
