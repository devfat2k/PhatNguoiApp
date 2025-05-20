import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { mainStackParamList } from '../../../navigation/type';
import { MyHeader, MyWrapper } from '@components';
import { styles } from './styles';
import { UserInfo } from './components';
import { scaleHeight } from '@src/utils/styles/mixins';
interface SettingScreenProps extends NativeStackScreenProps<mainStackParamList, 'NotificationScreen'> {}
const SettingScreen: FC<SettingScreenProps> = () => {
  return (
    <MyWrapper isSafe>
      <MyHeader containerHeaderStyle={{ height: scaleHeight(24) }} />
      <View style={styles.container}>
        <UserInfo />
        <View></View>
        {/* <TouchableOpacity style={styles.btnLogout}>
          <Text style={styles.textBtn}>Đăng xuất</Text>
        </TouchableOpacity> */}
      </View>
    </MyWrapper>
  );
};

export default SettingScreen;
