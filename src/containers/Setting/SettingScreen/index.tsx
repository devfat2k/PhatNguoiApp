import React, { FC, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { mainStackParamList } from '../../../navigation/type';
import { MyDivider, MyHeader, MyModalConfirm, MyWrapper } from '@components';
import { styles } from './styles';
import { PremiumPackage, UserInfo } from './components';
import { scaleHeight } from '@src/utils/styles/mixins';
import { OptionsSetting } from './constants';
import { ArrowRightIcon, PremiumIcon, TrashIcon } from '@src/utils/icon';
import { Colors } from '@src/utils';
interface SettingScreenProps extends NativeStackScreenProps<mainStackParamList, 'NotificationScreen'> {}
const SettingScreen: FC<SettingScreenProps> = () => {
  const [isShowModalLogOut, setIsShowModalLogOut] = useState<boolean>(false);
  const [isShowModalPremium, setIsShowModalPremium] = useState<boolean>(false);
  return (
    <MyWrapper isSafe>
      <MyHeader containerHeaderStyle={{ height: scaleHeight(24) }} />
      <View style={styles.container}>
        <UserInfo />
        <PremiumPackage onPress={() => setIsShowModalPremium(true)} />
        <View style={{ flex: 15 }}>
          {OptionsSetting.map((item, index) => {
            return (
              <View key={index}>
                <TouchableOpacity
                  style={styles.containerOptions}
                  onPress={() => {
                    item.onPress;
                  }}
                >
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
          <TouchableOpacity style={styles.btnLogout} onPress={() => setIsShowModalLogOut(true)}>
            <Text style={styles.textBtn}>Đăng xuất</Text>
          </TouchableOpacity>
        </View>
      </View>
      <MyModalConfirm
        title="Đăng xuất ngay bây giờ?"
        content="Bạn sắp đăng xuất khỏi tài khoản. Vui lòng xác nhận để tiếp tục."
        icon={<TrashIcon />}
        confirmText="Xác nhận"
        onPressConfirm={() => {}}
        isVisible={isShowModalLogOut}
        setIsVisible={setIsShowModalLogOut}
      />
      <MyModalConfirm
        title="Giới Hạn Phiên Bản Miễn Phí"
        content="Bạn đang sử dụng phiên bản miễn phí với một số tính năng bị giới hạn. Để đảm bảo trải nghiệm đầy đủ và tiện ích tối đa, hãy nâng cấp lên gói Premium."
        icon={<PremiumIcon />}
        confirmText="Nâng cấp"
        onPressConfirm={() => {}}
        isVisible={isShowModalPremium}
        setIsVisible={setIsShowModalPremium}
        confirmButtonColor={Colors.Primary_500}
      />
    </MyWrapper>
  );
};

export default SettingScreen;
