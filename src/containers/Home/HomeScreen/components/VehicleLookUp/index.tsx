import React, { FC, useContext, useState } from 'react';
import { View, TouchableOpacity, Text, Keyboard } from 'react-native';
import { CheckedIcon } from '@src/utils/icon';
import { scaleHeight, scaleWidth } from '@src/utils/styles/mixins';
import { MyTextInput } from '@src/components';
import { OptionVehicle } from '../../constants';
import { GlobalContext } from '@src/context';
import { useAppDispatch } from '@src/redux/store/customReduxHook';
import { statusCode } from '@src/types/api';
import { searchLicenses } from '@src/redux/actions/licenses';
import { navigate } from '@src/navigation/RootNavigation';
import { styles } from './styles';

interface VehicleLookUpProps {}

const VehicleLookUp: FC<VehicleLookUpProps> = () => {
  const { handleLoading, showMessage } = useContext(GlobalContext);
  const dispatch = useAppDispatch();
  const [valueLicensePlate, setLicensePlate] = useState<string>('');
  const [vehicleTypeSelected, setVehicleTypeSelected] = useState<string>('1');
  const [isErrPlate, setIsErrPlate] = useState<boolean>(false);

  // Regex patterns for validation
  const carPlatePattern = /^[0-9]{2}[A-Z]-[0-9]{3,4}(\.[0-9]{2})?$/;
  const motorbikePlatePattern = /^[0-9]{2}([A-Z][0-9]|[A-Z]{2})-[0-9]{3,4}(\.[0-9]{2})?$/;

  /**
   * Format license plate based on vehicle type
   * @param input - Raw input string
   * @param vehicleType - Type of vehicle ('1' for car, '2' for motorbike)
   * @returns Formatted license plate string
   */
  const formatLicensePlate = (input: string, vehicleType: string): string => {
    // Remove all non-alphanumeric characters and convert to uppercase
    const cleaned = input.replace(/[^A-Za-z0-9]/g, '').toUpperCase();

    if (vehicleType === '1') {
      // Car format: 50A-123.45 or 50A-1234
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
      // Motorbike format: 59S1-123.45 or 50AA-123.45 or 50S1-1234
      if (cleaned.length <= 4) {
        return cleaned;
      } else if (cleaned.length <= 7) {
        return `${cleaned.slice(0, 4)}-${cleaned.slice(4)}`;
      } else if (cleaned.length <= 9) {
        return `${cleaned.slice(0, 4)}-${cleaned.slice(4, 7)}.${cleaned.slice(7)}`;
      } else {
        return `${cleaned.slice(0, 4)}-${cleaned.slice(4, 7)}.${cleaned.slice(7, 9)}`;
      }
    }

    return cleaned;
  };

  /**
   * Handle license plate input change
   * @param text - Input text
   */
  const handleLicensePlateChange = (text: string) => {
    const formatted = formatLicensePlate(text, vehicleTypeSelected);
    setLicensePlate(formatted);

    // Clear error when user starts typing valid input
    if (isErrPlate && formatted.length > 0) {
      setIsErrPlate(false);
    }
  };

  /**
   * Handle vehicle type selection change
   * @param vehicleType - Selected vehicle type
   */
  const handleVehicleTypeChange = (vehicleType: string) => {
    setVehicleTypeSelected(vehicleType);

    // Reformat current license plate for new vehicle type
    if (valueLicensePlate) {
      const formatted = formatLicensePlate(valueLicensePlate, vehicleType);
      setLicensePlate(formatted);
      setLicensePlate('');
    }

    // Clear error when changing vehicle type
    if (isErrPlate) {
      setIsErrPlate(false);
    }
  };

  /**
   * Validate license plate format
   * @param plate - License plate string to validate
   * @param vehicleType - Type of vehicle
   * @returns Boolean indicating if plate is valid
   */
  const validateLicensePlate = (plate: string, vehicleType: string): boolean => {
    if (!plate || plate.trim() === '') {
      return false;
    }

    const trimmedPlate = plate.trim().toUpperCase();

    if (vehicleType === '1') {
      // Car validation: 50A-123.45 or 50A-1234
      return carPlatePattern.test(trimmedPlate);
    } else if (vehicleType === '2') {
      // Motorbike validation: 59S1-123.45 or 50AA-123.45 or 50S1-1234
      return motorbikePlatePattern.test(trimmedPlate);
    }

    return false;
  };

  /**
   * Get appropriate error message based on vehicle type
   * @param vehicleType - Type of vehicle
   * @returns Error message string
   */
  const getErrorMessage = (vehicleType: string): string => {
    if (vehicleType === '1') {
      return 'Vui lòng nhập đúng định dạng biển số ô tô (VD: 50A-123.45 hoặc 50A-1234)';
    } else {
      return 'Vui lòng nhập đúng định dạng biển số xe máy (VD: 59S1-123.45, 50AA-123.45 hoặc 50S1-1234)';
    }
  };

  /**
   * Handle license plate search
   */
  const handleSearchLicensePlate = async () => {
    Keyboard.dismiss();
    const formatPlate = valueLicensePlate.replace(/[.-]/g, '').toLowerCase();
    if (!validateLicensePlate(valueLicensePlate, vehicleTypeSelected)) {
      setIsErrPlate(true);
      return;
    }
    setIsErrPlate(false);
    handleLoading(true);
    try {
      const res = await dispatch(searchLicenses(formatPlate, vehicleTypeSelected));
      console.log('Search result:', JSON.stringify(res, null, 4));
      if (res?.statusCode === statusCode?.SUCCESS) {
        navigate('SearchResultsScreen', {
          data: res?.data || [],
        });
      }
    } catch (error: any) {
      console.error('Search error:', error);
      showMessage({
        type: 'error',
        text: error?.message || 'Có lỗi xảy ra khi tra cứu biển số',
      });
    } finally {
      handleLoading(false);
    }
  };

  return (
    <>
      {/* Vehicle Type Selection */}
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
                accessibilityLabel={`Chọn ${itemVehicle.label}`}
                accessibilityRole="button"
              >
                {itemVehicle.icon}
                <Text style={isVehicleSelected ? styles.textVehicleActive : styles.textVehicle}>
                  {itemVehicle.label}
                </Text>
                {isVehicleSelected && (
                  <CheckedIcon
                    style={{
                      position: 'absolute',
                      right: scaleWidth(-4),
                      top: scaleHeight(-4),
                    }}
                  />
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* License Plate Input */}
      <View style={{ paddingTop: scaleHeight(8) }}>
        <MyTextInput
          label=""
          error={isErrPlate}
          placeholder={
            vehicleTypeSelected === '1'
              ? 'Nhập biển số xe ô tô (VD: 50A-123.45)'
              : 'Nhập biển số xe máy (VD: 59S1-123.45)'
          }
          errorText={getErrorMessage(vehicleTypeSelected)}
          value={valueLicensePlate}
          onChangeText={handleLicensePlateChange}
          maxLength={vehicleTypeSelected === '1' ? 10 : 11}
          autoCapitalize="characters"
          keyboardType="default"
          returnKeyType="search"
          onSubmitEditing={handleSearchLicensePlate}
        />

        {/* Search Button */}
        <TouchableOpacity
          style={[styles.btnSearch, { opacity: valueLicensePlate.length > 0 ? 1 : 0.6 }]}
          onPress={handleSearchLicensePlate}
          disabled={valueLicensePlate.length === 0}
          accessibilityLabel="Tra cứu biển số xe"
          accessibilityRole="button"
        >
          <Text style={styles.textSearch}>Tra cứu</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default VehicleLookUp;
