import React, { FC, useContext, useState } from 'react';
import { FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { mainStackParamList } from '../../../navigation/type';
import { MyDivider, MyEmptyData, MyHeader, MyImage, MyModalConfirm, MyWrapper } from '@components';
import { styles } from './styles';
import {
  ArrowDownIcon,
  ArrowTopIcon,
  BackPrimaryIcon,
  CalendarIcon,
  DownloadIcon,
  EditIcon,
  EyeIcon,
  MarkerIcon,
  OtoIcon,
  ScheduleIcon,
  ShareIcon,
  TrashIcon,
  WarningPrimaryIcon,
} from '@src/utils/icon';
import { Gap, Padding } from '@src/utils/styles/spacing';
import { scaleHeight, scaleWidth } from '@src/utils/styles/mixins';
import { GlobalCenter } from '@src/utils/styles/typography';
import { Colors } from '@src/utils';
import { mockDataViolation } from '@src/containers/Home/SearchResultsScreen/constants';
import { formatStringToMoney } from '@src/utils/helpers/string';
import { GlobalContext } from '@src/context';
interface VehicleDetailScreenProps extends NativeStackScreenProps<mainStackParamList, 'VehicleDetailScreen'> {}
const VehicleDetailScreen: FC<VehicleDetailScreenProps> = () => {
  const { showMessage } = useContext(GlobalContext);
  const [isShowModalDelete, setIsShowModalDelete] = useState<boolean>(false);
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const toggleExpand = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };
  return (
    <MyWrapper isSafe style={{ backgroundColor: '#F2F4F7' }}>
      <MyHeader
        title="Chi tiết xe"
        goBack
        icon={<BackPrimaryIcon />}
        rightComponent={
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: Gap._XLARGE,
            }}
          >
            <TouchableOpacity>
              <EditIcon />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsShowModalDelete(true)}>
              <TrashIcon />
            </TouchableOpacity>
          </View>
        }
      />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.containerInfo}>
          <View style={{ alignItems: 'center' }}>
            <View style={styles.containerCar}>
              <OtoIcon />
            </View>
            <Text style={styles.text1}>Xe của ba</Text>
            <Text style={styles.text2}>30A-123.45</Text>
          </View>
          <View style={styles.containerGap}>
            <MarkerIcon />
            <Text style={styles.text3}>Tỉnh đăng ký:</Text>
            <Text style={styles.text4}>Hà Nội</Text>
          </View>
          <View style={styles.containerGap}>
            <CalendarIcon />
            <Text style={styles.text3}>Thời gian cập nhật:</Text>
            <Text style={styles.text4}>21/04/2025 09:00 </Text>
          </View>
          <View style={styles.containerGap}>
            <ScheduleIcon />
            <Text style={styles.text3}>Sắp sửa đăng kiểm</Text>
          </View>
          <View style={styles.containerImgCar}>
            {[1, 2, 3, 4, 5].map((_, index) => {
              return <MyImage key={index} source={{ uri: '' }} style={styles.imgCar} />;
            })}
          </View>
        </View>
        <View style={{ alignItems: 'center', marginVertical: scaleHeight(16) }}>
          <View style={{ ...GlobalCenter.center, gap: Gap._MEDIUM }}>
            <WarningPrimaryIcon />
            <Text style={styles.textResult}>Kết quả vi phạm</Text>
          </View>
          <Text style={styles.textFound}>Bạn có 4 lỗi vi phạm được tìm thấy</Text>
          <View style={styles.containerDou}>
            <View style={styles.containerUnConviction}>
              <Text style={styles.textUnConviction}>{`3 chưa xử phạt`}</Text>
            </View>
            <View style={styles.containerConviction}>
              <Text style={styles.textConviction}>{`1 đã xử phạt`}</Text>
            </View>
          </View>
        </View>
        <FlatList
          data={mockDataViolation || []}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
          renderItem={({ item, index }) => {
            const isExpanded = expandedItem === index;
            return (
              <TouchableOpacity style={styles.containerItemViolation} onPress={() => toggleExpand(index)}>
                <View style={{ ...GlobalCenter.centerBetween }}>
                  <Text style={styles.textTitleLaw}>{item.name}</Text>
                  {isExpanded ? <ArrowTopIcon /> : <ArrowDownIcon />}
                </View>
                {isExpanded && (
                  <View style={styles.detailContainer}>
                    <View style={styles.detailRow}>
                      <View style={{ flex: 1 }}>
                        <Text style={styles.textTitleItem}>Ngày vi phạm:</Text>
                      </View>
                      <View style={{ flex: 2 }}>
                        <Text style={styles.textContentItem}>{item.date}</Text>
                      </View>
                    </View>
                    <MyDivider height={1} color={Colors.Neutral_0} />
                    <View style={styles.detailRow}>
                      <View style={{ flex: 1 }}>
                        <Text style={styles.textTitleItem}>Địa điểm:</Text>
                      </View>
                      <View style={{ flex: 2 }}>
                        <Text style={styles.textContentItem}>{item.location}</Text>
                      </View>
                    </View>
                    <MyDivider height={1} color={Colors.Neutral_0} />
                    <View style={styles.detailRow}>
                      <View style={{ flex: 1 }}>
                        <Text style={styles.textTitleItem}>Lỗi:</Text>
                      </View>
                      <View style={{ flex: 2 }}>
                        <Text style={styles.textContentItem}>{item.crime}</Text>
                      </View>
                    </View>
                    <MyDivider height={1} color={Colors.Neutral_0} />
                    <View style={styles.detailRow}>
                      <View style={{ flex: 1 }}>
                        <Text style={styles.textTitleItem}>Trạng thái:</Text>
                      </View>
                      <View style={{ flex: 2 }}>
                        <View style={styles.statusFee}>
                          <View style={styles.dot} />
                          <Text style={styles.textConviction}>{item.status}</Text>
                        </View>
                      </View>
                    </View>
                    <MyDivider height={1} color={Colors.Neutral_0} />
                    <View style={styles.detailRow}>
                      <View style={{ flex: 1 }}>
                        <Text style={styles.textTitleItem}>Số quyết định xử phạt:</Text>
                      </View>
                      <View style={{ flex: 2 }}>
                        <Text style={styles.textContentItem}>{item.decisionNumber}</Text>
                      </View>
                    </View>
                    <MyDivider height={1} color={Colors.Neutral_0} />
                    <View style={styles.detailRow}>
                      <View style={{ flex: 1 }}>
                        <Text style={styles.textTitleItem}>Mức phạt:</Text>
                      </View>
                      <View style={{ flex: 2 }}>
                        <Text style={styles.textContentItem}>{formatStringToMoney(item.fine)}</Text>
                      </View>
                    </View>
                    <MyDivider height={1} color={Colors.Neutral_0} />
                    <View style={styles.detailRow}>
                      <View style={{ flex: 1 }}>
                        <Text style={styles.textTitleItem}>Nơi giải quyết:</Text>
                      </View>
                      <View style={{ flex: 2 }}>
                        <Text style={styles.textContentItem}>{item.enforcementUnit}</Text>
                      </View>
                    </View>
                    <MyDivider height={1} color={Colors.Neutral_0} />
                    <View style={styles.detailRow}>
                      <View style={{ flex: 1 }}>
                        <Text style={styles.textTitleItem}>Hướng dẫn nộp phạt:</Text>
                      </View>
                      <View style={{ flex: 2 }}>
                        <Text style={styles.textContentItem}>{item.handlingUnit}</Text>
                      </View>
                    </View>
                    <MyDivider height={1} color={Colors.Neutral_0} />
                    <View style={[styles.detailRow, { alignItems: 'center' }]}>
                      <View style={{ flex: 1 }}>
                        <Text style={styles.textTitleItem}>Xem hình ảnh/video vi phạm</Text>
                      </View>
                      <View style={{ flex: 2 }}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: Gap._MEDIUM }}>
                          <EyeIcon />
                          <Text style={styles.textSeeVideo}>Xem hình ảnh</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                )}
              </TouchableOpacity>
            );
          }}
          contentContainerStyle={{ paddingHorizontal: Padding._XLARGE }}
          ListEmptyComponent={
            <MyEmptyData text="Không có phạt nguội nào được ghi nhận. Tiếp tục lái xe an toàn nhé!" />
          }
        />

        <View
          style={{
            ...GlobalCenter.center,
            marginVertical: scaleHeight(8),
            gap: Gap._MEDIUM,
            paddingHorizontal: scaleWidth(16),
          }}
        >
          <TouchableOpacity style={styles.containerBtnDownShare}>
            <DownloadIcon />
            <Text style={styles.textBtn}>Tải kết quả</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerBtnDownShare}>
            <ShareIcon />
            <Text style={styles.textBtn}>Chia sẻ</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <MyModalConfirm
        isVisible={isShowModalDelete}
        setIsVisible={setIsShowModalDelete}
        icon={<TrashIcon />}
        confirmText="Xoá"
        title="Xoá phương tiện?"
        content="Bạn có chắc chắn muốn xóa phương tiện này khỏi danh sách theo dõi? Hành động này không thể hoàn tác."
        onPressConfirm={() => {
          setIsShowModalDelete(false);
          showMessage({
            type: 'success',
            text: 'Đã xoá lịch sử tra cứu!',
          });
        }}
      />
    </MyWrapper>
  );
};

export default VehicleDetailScreen;
