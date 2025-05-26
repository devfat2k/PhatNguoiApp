import React, { FC } from 'react';
import { View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { mainStackParamList } from '../../../navigation/type';
import { MyHeader, MyWrapper } from '@components';
import { styles } from './styles';
import { Colors } from '@src/utils';

interface EditVehicleScreenProps extends NativeStackScreenProps<mainStackParamList, 'EditVehicleScreen'> {}
const EditVehicleScreen: FC<EditVehicleScreenProps> = () => {
  return (
    <MyWrapper isSafe style={{ backgroundColor: Colors.Primary_500 }}>
      <MyHeader title="Chỉnh sửa thông tin phương tiện" />
      <View style={styles.container}></View>
    </MyWrapper>
  );
};

export default EditVehicleScreen;
