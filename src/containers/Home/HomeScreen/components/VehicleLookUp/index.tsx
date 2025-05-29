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
  const formatLicensePlate = (input: string, vehicleType: string): string => {
    const cleaned = input.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
    if (vehicleType === '1') {
      if (cleaned.length <= 3) {
        return cleaned;
      } else if (cleaned.length <= 6) {
        return `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
      } else if (cleaned.length <= 8) {
        return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}.${cleaned.slice(6)}`;
      } else {
        return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}.${cleaned.slice(6, 8)}`;
      }
    } else if (vehicleType === '2') {
      if (cleaned.length <= 4) {
        return cleaned;
      } else if (cleaned.length <= 8) {
        return `${cleaned.slice(0, 4)}-${cleaned.slice(4)}`;
      } else if (cleaned.length === 9) {
        return `${cleaned.slice(0, 4)}-${cleaned.slice(4, 7)}.${cleaned.slice(7)}`;
      } else {
        return `${cleaned.slice(0, 4)}-${cleaned.slice(4, 7)}.${cleaned.slice(7, 9)}`;
      }
    }
    return cleaned;
  };

  const handleLicensePlateChange = (text: string) => {
    const formatted = formatLicensePlate(text, vehicleTypeSelected);
    setLicensePlate(formatted);
    if (isErrPlate && formatted.length > 0) {
      setIsErrPlate(false);
    }
  };
  const handleVehicleTypeChange = (vehicleType: string) => {
    setVehicleTypeSelected(vehicleType);
    if (valueLicensePlate) {
      const formatted = formatLicensePlate(valueLicensePlate, vehicleType);
      setLicensePlate(formatted);
    }
  };
  const validateLicensePlate = (plate: string, vehicleType: string): boolean => {
    const cleaned = plate.replace(/[^A-Za-z0-9]/g, '');
    if (vehicleType === '1') {
      return cleaned.length >= 8;
    } else if (vehicleType === '2') {
      return cleaned.length >= 8;
    }
    return false;
  };

  const handleSearchLicensePlate = async () => {
    if (valueLicensePlate === '' || !validateLicensePlate(valueLicensePlate, vehicleTypeSelected)) {
      setIsErrPlate(true);
    } else {
      setIsErrPlate(false);
      Keyboard.dismiss();
      handleLoading(true);
      const formatPlate = valueLicensePlate.replace(/[.-]/g, '').toLowerCase();
      await dispatch(searchLicenses(formatPlate, vehicleTypeSelected))
        .then(res => {
          if (res?.statusCode === statusCode.SUCCESS) {
            navigate('SearchResultsScreen', {
              data: res?.data || [],
            });
          } else {
            dispatch(
              setDataLicenses({
                licensePlate: '',
                violations: [],
              }),
            );
          }
        })
        .catch((error: any) => {
          showMessage({
            type: 'error',
            text: error?.message,
          });
        })
        .finally(() => {
          handleLoading(false);
        });
    }
  };

  return (
    <>
      <View style={{ paddingTop: scaleHeight(0) }}>
        <Text style={styles.textSelectVehicle}>Chọn loại phương tiện:</Text>
        <View style={styles.containerOptionVehicle}>
          {OptionVehicle.map((itemVehicle, indexVehicle) => {
            const isVehicleSelected = vehicleTypeSelected === itemVehicle.id;
            return (
              <TouchableOpacity
                key={indexVehicle}
                style={isVehicleSelected ? styles.btnVehicleActive : styles.btnVehicle}
                onPress={() => handleVehicleTypeChange(itemVehicle?.id)}
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
      <View style={{ paddingTop: scaleHeight(8) }}>
        <MyTextInput
          label=""
          error={isErrPlate}
          placeholder={
            vehicleTypeSelected === '1'
              ? 'Nhập biển số xe ô tô(VD: 50A-123.45)'
              : 'Nhập biển số xe máy(VD: 50AA-123.45)'
          }
          errorText={
            vehicleTypeSelected === '1'
              ? 'Vui lòng nhập đầy đủ biển số xe ô tô(8 ký tự)'
              : 'Vui lòng nhập đầy đủ biển số xe máy(8-9 ký tự)'
          }
          value={valueLicensePlate}
          onChangeText={handleLicensePlateChange}
          maxLength={vehicleTypeSelected === '1' ? 10 : 11}
          autoCapitalize="characters"
          keyboardType="default"
        />
        <TouchableOpacity style={styles.btnSearch} onPress={() => handleSearchLicensePlate()}>
          <Text style={styles.textSearch}>Tra cứu</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default VehicleLookUp;
