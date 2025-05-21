import React, { FC, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { mainStackParamList } from '../../../navigation/type';
import { MyDivider, MyEmptyData, MyHeader, MyModalWrapContent, MyWrapper } from '@components';
import { Colors } from '@src/utils';
import {
  ArrowDownIcon,
  ArrowTopIcon,
  CalendarIcon,
  CarIcon,
  CloseIcon,
  DownloadIcon,
  EyeIcon,
  MarkerIcon,
  ShareIcon,
  TickedIcon,
  UnTickIcon,
  WarningPrimaryIcon,
} from '@src/utils/icon';
import { GlobalCenter } from '@src/utils/styles/typography';
import { Gap } from '@src/utils/styles/spacing';
import { scaleHeight, scaleWidth } from '@src/utils/styles/mixins';
import { SortOptions } from '../HomeScreen/constants';
import { mockDataViolation } from './constants';
import { formatStringToMoney } from '@src/utils/helpers/string';
import { styles } from './styles';
interface SearchResultsScreenProps extends NativeStackScreenProps<mainStackParamList, 'SearchResultsScreen'> {}
const SearchResultsScreen: FC<SearchResultsScreenProps> = () => {
  const [isShowModalSortBy, setIsShowModalSortBy] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>('ASC');
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const toggleExpand = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };
  return (
    <MyWrapper style={{ backgroundColor: Colors.Primary_500 }} isSafe>
      <MyHeader goBack title="Kết quả tra cứu" titleColor={Colors.Neutral_0} />
      <View style={styles.container}>
        <View style={styles.containerItem}>
          <CarIcon style={{ borderRadius: 999 }} />
          <View style={{ justifyContent: 'center' }}>
            <Text style={styles.textPlate}>30A-123.45</Text>
            <View style={styles.centerLeft}>
              <MarkerIcon />
              <Text style={styles.textTimeSearch}>
                Tỉnh đăng ký: <Text style={styles.textTime}>Hà Nội</Text>
              </Text>
            </View>
            <View style={styles.centerLeft}>
              <CalendarIcon />
              <Text style={styles.textTimeSearch}>
                Thời điểm tra cứu: <Text style={styles.textTime}>21/04/2025 09:00</Text>
              </Text>
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center' }}>
          <View style={{ ...GlobalCenter.center, gap: Gap._MEDIUM }}>
            <WarningPrimaryIcon />
            <Text style={styles.textResult}>Kết quả vi phạm</Text>
          </View>
          <Text style={styles.textFound}>Bạn có 4 lỗi vi phạm được tìm thấy</Text>
          <View style={styles.containerDou}>
            <View style={styles.containerUnConviction}>
              <Text style={styles.textUnConviction}>{`3 chưa xử phạt`}</Text>
            </View>
            <View style={styles.containerUnConviction}>
              <Text style={styles.textConviction}>{`1 đã xử phạt`}</Text>
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'flex-end', marginVertical: scaleHeight(16) }}>
          <TouchableOpacity
            style={styles.containerSort}
            onPress={() => {
              setIsShowModalSortBy(true);
            }}
          >
            <Text style={styles.textSort}>
              Sắp xếp theo: <Text style={styles.textValueSort}>Gần nhất</Text>
            </Text>
            <ArrowDownIcon />
          </TouchableOpacity>
        </View>
        <FlatList
          data={mockDataViolation || []}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
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
          contentContainerStyle={{ paddingTop: scaleHeight(16) }}
          ListEmptyComponent={
            <MyEmptyData text="Không có phạt nguội nào được ghi nhận. Tiếp tục lái xe an toàn nhé!" />
          }
        />
        <View style={{ ...GlobalCenter.center, marginVertical: scaleHeight(12), gap: Gap._MEDIUM }}>
          <TouchableOpacity style={styles.containerBtnDownShare}>
            <DownloadIcon />
            <Text style={styles.textBtn}>Tải kết quả</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerBtnDownShare}>
            <ShareIcon />
            <Text style={styles.textBtn}>Chia sẻ</Text>
          </TouchableOpacity>
        </View>
      </View>
      <MyModalWrapContent
        isVisible={isShowModalSortBy}
        onRequestClose={() => setIsShowModalSortBy(false)}
        onBackdropPress={() => setIsShowModalSortBy(false)}
      >
        <MyWrapper isSafe isModal>
          <View style={{ padding: scaleWidth(16), marginBottom: scaleHeight(24) }}>
            <View style={{ ...GlobalCenter.centerBetween }}>
              <Text style={styles.text}>Sắp xếp theo</Text>
              <TouchableOpacity onPress={() => setIsShowModalSortBy(false)}>
                <CloseIcon />
              </TouchableOpacity>
            </View>
            {SortOptions.map((item, index) => {
              const isTick = item.type === sortBy;
              return (
                <View key={index}>
                  <TouchableOpacity
                    style={styles.btnSort}
                    onPress={() => {
                      setSortBy(item.type);
                    }}
                  >
                    <Text style={styles.textSortBy}>{item.label}</Text>
                    {isTick ? <TickedIcon /> : <UnTickIcon />}
                  </TouchableOpacity>
                  {index % 2 === 0 && <MyDivider height={1} />}
                </View>
              );
            })}
          </View>
        </MyWrapper>
      </MyModalWrapContent>
    </MyWrapper>
  );
};

export default SearchResultsScreen;
