import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { mainStackParamList } from '../../../navigation/type';
import { MyWrapper } from '@components';
import { styles } from './styles';
import { BackGrayIcon, LoginIcon } from '@src/utils/icon';
import { goBack } from '@src/navigation/RootNavigation';
import { scaleHeight } from '@src/utils/styles/mixins';
import { GlobalCenter } from '@src/utils/styles/typography';
import { Gap } from '@src/utils/styles/spacing';
import { AppleButton, FacebookButton, GoogleButton } from './components';

interface AuthScreenProps extends NativeStackScreenProps<mainStackParamList, 'AuthScreen'> {}
const AuthScreen: FC<AuthScreenProps> = () => {
  return (
    <MyWrapper isSafe>
      <View style={styles.header}>
        <TouchableOpacity style={styles.btnBack} onPress={() => goBack()}>
          <BackGrayIcon />
          <Text style={styles.textBack}>Quay lại</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <LoginIcon />
        <View style={{ marginVertical: scaleHeight(32) }}>
          <Text style={styles.text1}>{`Đăng nhập để trải \n nghiệm đầy đủ tiện ích`}</Text>
          <Text style={styles.text2}>
            Chỉ với vài thao tác, bạn đã có thể truy cập vào tài khoản và nâng cấp lên gói Premium để tra cứu phương
            tiện vi phạm và quản lý phương tiện một cách dễ dàng.
          </Text>
        </View>
        <View style={{ ...GlobalCenter.centerLeft, gap: Gap._MEDIUM }}>
          <View style={styles.line} />
          <Text style={styles.text3}>Chọn phương thức đăng nhập</Text>
          <View style={styles.line} />
        </View>
        <View style={{ ...GlobalCenter.centerLeft, marginTop: scaleHeight(32), gap: Gap._XLARGE }}>
          <FacebookButton />
          <GoogleButton />
          <AppleButton />
        </View>
      </View>
    </MyWrapper>
  );
};

export default AuthScreen;
