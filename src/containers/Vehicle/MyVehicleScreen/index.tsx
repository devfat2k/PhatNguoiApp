import React, { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { mainStackParamList } from '../../../navigation/type';
import { MyHeader, MyTabView, MyWrapper } from '@components';
import { styles } from './styles';
import { AddVehicleIcon, HondaIcon, PremiumIcon } from '@src/utils/icon';
import { FourDotIcon, HondaEVIcon, OtoIcon } from '@src/utils/icon';
import { VehicleList } from './components';
import { DataMockHistory } from './constants';
import { navigate } from '@src/navigation/RootNavigation';
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
        <MyTabView
          routes={[
            { key: 'all', title: 'Tất cả', icon: <FourDotIcon /> },
            { key: 'oto', title: 'Xe ô tô', icon: <OtoIcon /> },
            { key: 'moto', title: 'Xe máy', icon: <HondaIcon /> },
            { key: 'ev', title: 'Xe điện', icon: <HondaEVIcon /> },
          ]}
          scenes={{
            all: <VehicleList data={DataMockHistory} />,
            oto: <VehicleList data={DataMockHistory} />,
            moto: <VehicleList data={DataMockHistory} />,
            ev: <VehicleList data={DataMockHistory} />,
          }}
        />
        <TouchableOpacity style={styles.btnAdd} onPress={() => navigate('AddVehicleScreen')}>
          <AddVehicleIcon />
        </TouchableOpacity>
      </View>
    </MyWrapper>
  );
};

export default MyVehicleScreen;
