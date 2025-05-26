import React, { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { mainStackParamList } from '../../../navigation/type';
import { MyHeader, MyWrapper } from '@components';
import { styles } from './styles';
import { AddVehicleIcon, PremiumIcon } from '@src/utils/icon';
import { scaleHeight, scaleWidth } from '@src/utils/styles/mixins';
interface MyVehicleScreenProps extends NativeStackScreenProps<mainStackParamList, 'MyVehicleScreen'> {}
const MyVehicleScreen: FC<MyVehicleScreenProps> = () => {
  return (
    <MyWrapper isSafe>
      <MyHeader
        title="Phương tiện của tôi"
        rightComponent={
          <TouchableOpacity onPress={() => {}}>
            <PremiumIcon />
          </TouchableOpacity>
        }
      />
      <View style={styles.container}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: scaleHeight(16),
            right: scaleWidth(16),
          }}
        >
          <AddVehicleIcon />
        </TouchableOpacity>
      </View>
    </MyWrapper>
  );
};

export default MyVehicleScreen;
