import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { mainStackParamList } from '../../../navigation/type';
import { MyDivider, MyHeader, MyWrapper } from '@components';
import { styles } from './styles';
import { PremiumPackage, UserInfo } from './components';
import { scaleHeight } from '@src/utils/styles/mixins';
import { OptionsSetting } from './constants';
import { ArrowRightIcon } from '@src/utils/icon';
interface SettingScreenProps extends NativeStackScreenProps<mainStackParamList, 'NotificationScreen'> {}
const SettingScreen: FC<SettingScreenProps> = () => {
  return (
    <MyWrapper isSafe>
      <MyHeader containerHeaderStyle={{ height: scaleHeight(24) }} />
      <View style={styles.container}>
        <UserInfo />
        <PremiumPackage />
        <View style={{ flex: 15 }}>
          {OptionsSetting.map((item, index) => {
            return (
              <View key={index}>
                <TouchableOpacity style={styles.containerOptions} onPress={() => {}}>
                  <View style={styles.center}>
                    {item.icon}
                    <Text style={styles.textLabel}>{item.label}</Text>
                  </View>
                  <ArrowRightIcon />
                </TouchableOpacity>
                {OptionsSetting.length - 1 === index ? <></> : <MyDivider height={1} />}
              </View>
            );
          })}
          <TouchableOpacity style={styles.btnLogout}>
            <Text style={styles.textBtn}>Đăng xuất</Text>
          </TouchableOpacity>
        </View>
      </View>
    </MyWrapper>
  );
};

export default SettingScreen;
