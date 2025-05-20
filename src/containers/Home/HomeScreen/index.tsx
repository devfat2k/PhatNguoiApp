import React, { FC, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { mainStackParamList } from '../../../navigation/type';
import { MyHeader, MyWrapper } from '@components';
import { PremiumIcon } from '@src/utils/icon';
import { TopTabOptions } from './constants';
import { VehicleLookUp } from './components';
import { styles } from './styles';

interface HomeScreenProps extends NativeStackScreenProps<mainStackParamList, 'HomeScreen'> {}
const HomeScreen: FC<HomeScreenProps> = () => {
  const [tabSelected, setTabSelected] = useState<string>('1');
  const [vehicleSelected, setVehicleSelected] = useState<string>('1');
  return (
    <MyWrapper isSafe>
      <MyHeader
        title="Trang chủ"
        rightComponent={
          <TouchableOpacity onPress={() => {}}>
            <PremiumIcon />
          </TouchableOpacity>
        }
      />
      <View style={styles.container}>
        <View style={styles.containerTopTab}>
          {TopTabOptions.map((itemTab, indexTab) => {
            const isTabSelected = itemTab.id === tabSelected;
            return (
              <TouchableOpacity
                style={isTabSelected ? styles.btnTabActive : styles.btnTabInActive}
                key={indexTab}
                onPress={() => {
                  setTabSelected(itemTab.id);
                }}
              >
                <Text style={isTabSelected ? styles.textActive : styles.textInActive}>{itemTab.title}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <VehicleLookUp onPress={id => setVehicleSelected(id)} idVehicleSelected={vehicleSelected} />
      </View>
    </MyWrapper>
  );
};

export default HomeScreen;
