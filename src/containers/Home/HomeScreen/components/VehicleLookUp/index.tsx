import React, { FC } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { CheckedIcon } from '@src/utils/icon';
import { scaleHeight, scaleWidth } from '@src/utils/styles/mixins';
import { MyTextInput } from '@src/components';
import { OptionVehicle } from '../../constants';
import { navigate } from '@src/navigation/RootNavigation';
import { styles } from './styles';
// import { GlobalContext } from '@src/context';

interface VehicleLookUpProps {
  onPress: (id: string) => void;
  idVehicleSelected: string;
}

const VehicleLookUp: FC<VehicleLookUpProps> = ({ onPress, idVehicleSelected }) => {
  // const { handleLoading } = useContext(GlobalContext);
  return (
    <>
      <View style={{ paddingTop: scaleHeight(24) }}>
        <Text style={styles.textSelectVehicle}>Chọn loại phương tiện</Text>
        <View style={styles.containerOptionVehicle}>
          {OptionVehicle.map((itemVehicle, indexVehicle) => {
            const isVehicleSelected = idVehicleSelected === itemVehicle.id;
            return (
              <TouchableOpacity
                key={indexVehicle}
                style={isVehicleSelected ? styles.btnVehicleActive : styles.btnVehicle}
                onPress={() => onPress(itemVehicle.id)}
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
        <TouchableOpacity
          style={styles.btnSearch}
          onPress={() => {
            navigate('SearchResultsScreen');
          }}
        >
          <Text style={styles.textSearch}>Tra cứu</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default VehicleLookUp;
