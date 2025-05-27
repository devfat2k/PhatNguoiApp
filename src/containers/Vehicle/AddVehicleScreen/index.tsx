import React, { FC, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { mainStackParamList } from '../../../navigation/type';
import { MyHeader, MyTextInput, MyWrapper } from '@components';
import { styles } from './styles';
import { Colors } from '@src/utils';
import { CheckedIcon, PlaceholderImageIcon } from '@src/utils/icon';
import { OptionVehicle } from '@src/containers/Home/HomeScreen/constants';
import { scaleHeight, scaleWidth } from '@src/utils/styles/mixins';
import { Switch } from 'react-native-gesture-handler';
import { GlobalCenter } from '@src/utils/styles/typography';
import { Gap } from '@src/utils/styles/spacing';

interface AddVehicleScreenProps extends NativeStackScreenProps<mainStackParamList, 'AddVehicleScreen'> {}
const AddVehicleScreen: FC<AddVehicleScreenProps> = () => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const [vehicleSelected, setVehicleSelected] = useState<string>('1');
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <MyWrapper isSafe style={{ backgroundColor: Colors.Primary_500 }}>
      <MyHeader title="Thêm phương tiện" titleColor={Colors.Neutral_0} goBack />
      <View style={styles.container}>
        <View style={{ flex: 5 }}>
          <View style={{ marginBottom: scaleHeight(24) }}>
            <Text style={styles.textSelectVehicle}>Chọn loại phương tiện</Text>
            <View style={styles.containerOptionVehicle}>
              {OptionVehicle.map((itemVehicle, indexVehicle) => {
                const isVehicleSelected = vehicleSelected === itemVehicle.id;
                return (
                  <TouchableOpacity
                    key={indexVehicle}
                    style={isVehicleSelected ? styles.btnVehicleActive : styles.btnVehicle}
                    onPress={() => {
                      setVehicleSelected(itemVehicle.id);
                    }}
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
          <MyTextInput isRequired label="Biển số" placeholder="Nhập biển số xe" value="" onChangeText={value => {}} />
          <MyTextInput label="Tên gợi nhớ" placeholder="Nhập tên gợi nhớ" value="" onChangeText={value => {}} />
          <MyTextInput label="Ghi chú" placeholder="Nhập ghi chú của bạn" value="" onChangeText={value => {}} />
          <Text style={styles.textSelectVehicle}>Ảnh của phương tiện</Text>
          <TouchableOpacity>
            <PlaceholderImageIcon />
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <View style={{ ...GlobalCenter.centerLeft, gap: Gap._MEDIUM }}>
            <Switch
              trackColor={{ false: '#12B76A', true: '#D0D5DD' }}
              thumbColor={'#fff'}
              ios_backgroundColor="#9EA8B3"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            <Text style={styles.textSwitch}>Bật thông báo khi có vi phạm</Text>
          </View>
          <TouchableOpacity style={styles.btnAddVehicle}>
            <Text style={styles.textBtn}>Thêm phương tiện</Text>
          </TouchableOpacity>
        </View>
      </View>
    </MyWrapper>
  );
};

export default AddVehicleScreen;
