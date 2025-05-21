import React, { FC, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { mainStackParamList } from '../../../navigation/type';
import { MyEmptyData, MyHeader, MyWrapper } from '@components';
import { styles } from './styles';
import { EmptyNotiIcon, PremiumIcon, SeenIcon } from '@src/utils/icon';
import { NotiOptions, ViolationNotificationMock } from './constants';
import { GlobalCenter } from '@src/utils/styles/typography';
import { Gap } from '@src/utils/styles/spacing';
import { navigate } from '@src/navigation/RootNavigation';
interface NotificationScreenProps extends NativeStackScreenProps<mainStackParamList, 'NotificationScreen'> {}
const NotificationScreen: FC<NotificationScreenProps> = () => {
  const [typeNoti, setTypeNoti] = useState<number>(1);
  return (
    <MyWrapper isSafe>
      <MyHeader
        title="Thông báo"
        rightComponent={
          <TouchableOpacity onPress={() => {}}>
            <PremiumIcon />
          </TouchableOpacity>
        }
      />
      <View style={styles.container}>
        <View style={styles.centerBetween}>
          <View style={styles.containerType}>
            {NotiOptions.map((itemType, indexType) => {
              const isSelected = itemType.id === typeNoti;
              return (
                <TouchableOpacity
                  key={indexType}
                  style={isSelected ? styles.btnActive : styles.btnInActive}
                  onPress={() => setTypeNoti(itemType.id)}
                >
                  <Text style={isSelected ? styles.textActive : styles.textInActive}>{itemType.type}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <TouchableOpacity style={{ ...GlobalCenter.center, gap: Gap._MEDIUM }} onPress={() => {}}>
            <SeenIcon />
            <Text style={styles.textSeen}>Đã đọc tất cả</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={ViolationNotificationMock || []}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<MyEmptyData icon={<EmptyNotiIcon />} text="Chưa có thông báo nào!" />}
          renderItem={({ item }) => {
            return (
              <View style={styles.containerItem}>
                <View style={{ gap: Gap._MEDIUM, width: '90%' }}>
                  <Text style={styles.textTime}>21/04/2025 09:00 </Text>
                  <Text style={styles.textContent}>
                    Xe <Text style={styles.textPlateNumber}>{item.plateNumber}</Text> vừa bị ghi nhận vi phạm giao thông
                    tại Hà Nội vào ngày {item.dateTime}
                  </Text>
                  <TouchableOpacity
                    style={styles.btnDetail}
                    onPress={() => {
                      navigate('SearchResultsScreen');
                    }}
                  >
                    <Text style={styles.textDetail}>Xem chi tiết</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.dotBlue} />
              </View>
            );
          }}
        />
      </View>
    </MyWrapper>
  );
};

export default NotificationScreen;
