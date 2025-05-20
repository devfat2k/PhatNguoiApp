import React, { FC, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { mainStackParamList } from '../../../navigation/type';
import { MyHeader, MyTextInput, MyWrapper } from '@components';
import { styles } from './styles';
import { CheckedIcon, PremiumIcon } from '@src/utils/icon';
import { OptionVehicle, TopTabOptions } from './contants';
import { scaleHeight, scaleWidth } from '@src/utils/styles/mixins';

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
        <View style={{ paddingTop: scaleHeight(24) }}>
          <Text style={styles.textSelectVehicle}>Chọn loại phương tiện</Text>
          <View style={styles.containerOptionVehicle}>
            {OptionVehicle.map((itemVehicle, indexVehicle) => {
              const isVehicleSelected = itemVehicle.id === vehicleSelected;
              return (
                <TouchableOpacity
                  key={indexVehicle}
                  style={isVehicleSelected ? styles.btnVehicleActive : styles.btnVehicle}
                  onPress={() => setVehicleSelected(itemVehicle.id)}
                >
                  {itemVehicle.icon}
                  <Text style={isVehicleSelected ? styles.textVehicleActive : styles.textVehicle}>
                    {itemVehicle.label}
                  </Text>
                  {isVehicleSelected && (
                    <CheckedIcon style={{ position: 'absolute', right: scaleWidth(-4), top: scaleHeight(-4) }} />
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View style={{ paddingTop: scaleHeight(24) }}>
          <MyTextInput label="" placeholder="Nhập biển số xe của bạn" />
          <TouchableOpacity style={styles.btnSearch} onPress={() => {}}>
            <Text style={styles.textSearch}>Tra cứu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </MyWrapper>
  );
};

export default HomeScreen;
