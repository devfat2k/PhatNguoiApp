import React, { FC, useContext, useState } from 'react';
import { View, TouchableOpacity, Text, Keyboard } from 'react-native';
import { CheckedIcon } from '@src/utils/icon';
import { scaleHeight, scaleWidth } from '@src/utils/styles/mixins';
import { MyTextInput } from '@src/components';
import { OptionVehicle } from '../../constants';
import { styles } from './styles';
import { GlobalContext } from '@src/context';
import { useAppDispatch } from '@src/redux/store/customReduxHook';
import { statusCode } from '@src/types/api';
import { searchLicenses } from '@src/redux/actions/licenses';
import { setDataLicenses } from '@src/redux/slice/licenses';
import { navigate } from '@src/navigation/RootNavigation';

interface VehicleLookUpProps {}
const VehicleLookUp: FC<VehicleLookUpProps> = () => {
  const { handleLoading, showMessage } = useContext(GlobalContext);
  const dispatch = useAppDispatch();
  const [valueLicensePlate, setLicensePlate] = useState<string>('');
  const [vehicleTypeSelected, setVehicleTypeSelected] = useState<string>('1');

  const [isErrPlate, setIsErrPlate] = useState<boolean>(false);
  const handleSearchLicensePlate = async () => {
    if (valueLicensePlate === '') {
      setIsErrPlate(true);
    } else {
      setIsErrPlate(false);
      Keyboard.dismiss();
      handleLoading(true);
      await dispatch(searchLicenses(valueLicensePlate, vehicleTypeSelected))
        .then(res => {
          if (res?.statusCode === statusCode.SUCCESS) {
            dispatch(setDataLicenses(res?.data));
          }
        })
        .catch((error: any) => {
          console.log('error =>>', error?.message);
          showMessage({
            type: 'error',
            text: error?.message,
          });
        })
        .finally(() => {
          handleLoading(false);
          navigate('SearchResultsScreen');
        });
    }
  };
  return (
    <>
      <View style={{ paddingTop: scaleHeight(24) }}>
        <Text style={styles.textSelectVehicle}>Chọn loại phương tiện</Text>
        <View style={styles.containerOptionVehicle}>
          {OptionVehicle.map((itemVehicle, indexVehicle) => {
            const isVehicleSelected = vehicleTypeSelected === itemVehicle.id;
            return (
              <TouchableOpacity
                key={indexVehicle}
                style={isVehicleSelected ? styles.btnVehicleActive : styles.btnVehicle}
                onPress={() => setVehicleTypeSelected(itemVehicle.id)}
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
        <MyTextInput
          label=""
          error={isErrPlate}
          placeholder="Nhập biển số xe của bạn"
          errorText={'Vui lòng nhập biển số của bạn'}
          value={valueLicensePlate}
          onChangeText={value => setLicensePlate(value)}
        />
        <TouchableOpacity style={styles.btnSearch} onPress={() => handleSearchLicensePlate()}>
          <Text style={styles.textSearch}>Tra cứu</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default VehicleLookUp;
