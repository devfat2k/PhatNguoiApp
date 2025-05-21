import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { mainStackParamList } from '../../../navigation/type';
import { MyHeader, MyWrapper } from '@components';
import { styles } from './styles';
import { Colors } from '@src/utils';
import { scaleFont } from '@src/utils/styles/mixins';
import { Gap } from '@src/utils/styles/spacing';
interface PrivacyScreenProps extends NativeStackScreenProps<mainStackParamList, 'PrivacyScreen'> {}
const PrivacyScreen: FC<PrivacyScreenProps> = () => {
  return (
    <MyWrapper isSafe style={{ backgroundColor: Colors.Primary_500 }}>
      <MyHeader goBack title="Chính sách bảo mật" titleColor={Colors.Neutral_0} />
      <View style={styles.container}>
        <Text style={styles.text}>📜 Chính sách Bảo mật & Điều khoản Sử dụng</Text>
        <Text style={styles.text}>1. 🔐 Bảo mật thông tin</Text>
        <View style={{ flexDirection: 'row', gap: Gap._MEDIUM }}>
          <Text
            style={{
              fontSize: scaleFont(30),
              marginRight: 10,
              color: Colors.Neutral_900,
            }}
          >
            •
          </Text>
          <Text style={styles.text}>Ứng dụng chỉ thu thập biển số xe do người dùng nhập để tra cứu vi phạm.</Text>
        </View>
        <View style={{ flexDirection: 'row', gap: Gap._MEDIUM }}>
          <Text
            style={{
              fontSize: scaleFont(30),
              marginRight: 10,
              color: Colors.Neutral_900,
            }}
          >
            •
          </Text>
          <Text style={styles.text}>Không yêu cầu đăng ký tài khoản hay thu thập thông tin cá nhân.</Text>
        </View>
        <View style={{ flexDirection: 'row', gap: Gap._MEDIUM }}>
          <Text
            style={{
              fontSize: scaleFont(30),
              marginRight: 10,
              color: Colors.Neutral_900,
            }}
          >
            •
          </Text>
          <Text style={styles.text}>Dữ liệu tra cứu không được chia sẻ với bên thứ ba.</Text>
        </View>
        <Text style={styles.text}>2. 🧾 Nguồn dữ liệu</Text>
        <View style={{ flexDirection: 'row', gap: Gap._MEDIUM }}>
          <Text
            style={{
              fontSize: scaleFont(30),
              marginRight: 10,
              color: Colors.Neutral_900,
            }}
          >
            •
          </Text>
          <Text style={styles.text}>Tất cả thông tin được đồng bộ từ Cục Cảnh sát Giao thông – Bộ Công an.</Text>
        </View>
        <View style={{ flexDirection: 'row', gap: Gap._MEDIUM }}>
          <Text
            style={{
              fontSize: scaleFont(30),
              marginRight: 10,
              color: Colors.Neutral_900,
            }}
          >
            •
          </Text>
          <Text style={styles.text}>Đảm bảo tính chính xác, minh bạch và cập nhật theo thời gian thực.</Text>
        </View>
        <View style={{ flexDirection: 'row', gap: Gap._MEDIUM }}>
          <Text
            style={{
              fontSize: scaleFont(30),
              marginRight: 10,
              color: Colors.Neutral_900,
            }}
          >
            •
          </Text>
          <Text style={styles.text}>Dữ liệu tra cứu không được chia sẻ với bên thứ ba.</Text>
        </View>
        <Text style={styles.text}>3. 📥 Lưu trữ & tiện ích</Text>
        <View style={{ flexDirection: 'row', gap: Gap._MEDIUM }}>
          <Text
            style={{
              fontSize: scaleFont(30),
              marginRight: 10,
              color: Colors.Neutral_900,
            }}
          >
            •
          </Text>
          <Text style={styles.text}>Người dùng có thể lưu lịch sử tra cứu trên thiết bị để tiện theo dõi.</Text>
        </View>
        <View style={{ flexDirection: 'row', gap: Gap._MEDIUM }}>
          <Text
            style={{
              fontSize: scaleFont(30),
              marginRight: 10,
              color: Colors.Neutral_900,
            }}
          >
            •
          </Text>
          <Text style={styles.text}>Tính năng chia sẻ kết quả qua mạng xã hội không yêu cầu đăng nhập.</Text>
        </View>

        <Text style={styles.text}>4. ⚠️ Trách nhiệm người dùng</Text>
        <View style={{ flexDirection: 'row', gap: Gap._MEDIUM }}>
          <Text
            style={{
              fontSize: scaleFont(30),
              marginRight: 10,
              color: Colors.Neutral_900,
            }}
          >
            •
          </Text>
          <Text style={styles.text}>Người dùng chịu trách nhiệm với thông tin biển số xe đã nhập.</Text>
        </View>
        <View style={{ flexDirection: 'row', gap: Gap._MEDIUM }}>
          <Text
            style={{
              fontSize: scaleFont(30),
              marginRight: 10,
              color: Colors.Neutral_900,
            }}
          >
            •
          </Text>
          <Text style={styles.text}>
            Ứng dụng không chịu trách nhiệm với bất kỳ thiệt hại nào phát sinh do sử dụng sai mục đích.
          </Text>
        </View>
        <Text style={styles.text}>5. ✅ Chấp nhận điều khoản</Text>
        <View style={{ flexDirection: 'row', gap: Gap._MEDIUM }}>
          <Text
            style={{
              fontSize: scaleFont(30),
              marginRight: 10,
              color: Colors.Neutral_900,
            }}
          >
            •
          </Text>
          <Text style={styles.text}>Khi sử dụng ứng dụng, bạn đã đồng ý với toàn bộ điều khoản trên.</Text>
        </View>
        <View style={{ flexDirection: 'row', gap: Gap._MEDIUM }}>
          <Text
            style={{
              fontSize: scaleFont(30),
              marginRight: 10,
              color: Colors.Neutral_900,
            }}
          >
            •
          </Text>
          <Text style={styles.text}>Nội dung chính sách có thể được cập nhật mà không cần thông báo trước.</Text>
        </View>
        <Text style={styles.text}>📲 Cảm ơn bạn đã tin dùng ứng dụng tra cứu vi phạm giao thông!</Text>
      </View>
    </MyWrapper>
  );
};

export default PrivacyScreen;
