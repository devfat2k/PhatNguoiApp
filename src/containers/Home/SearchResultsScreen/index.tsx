import React, { FC, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { mainStackParamList } from '../../../navigation/type';
import { MyDivider, MyEmptyData, MyHeader, MyWrapper } from '@components';
import { Colors } from '@src/utils';
import { ArrowDownIcon, ArrowTopIcon, CalendarIcon, CarIcon, WarningPrimaryIcon } from '@src/utils/icon';
import { GlobalCenter } from '@src/utils/styles/typography';
import { Gap } from '@src/utils/styles/spacing';
import { scaleHeight } from '@src/utils/styles/mixins';
import { styles } from './styles';
import dayjs from 'dayjs';
import { formatLicensePlate } from '@src/utils/helpers/string';

interface SearchResultsScreenProps extends NativeStackScreenProps<mainStackParamList, 'SearchResultsScreen'> {}
const SearchResultsScreen: FC<SearchResultsScreenProps> = ({ route }) => {
  const { data } = route.params;
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
            <Text style={styles.textPlate}>{formatLicensePlate(data?.licensePlate) || 'xx-xx.xxx'}</Text>
            <View style={styles.centerLeft}>
              <CalendarIcon />
              <Text style={styles.textTimeSearch}>
                Thời điểm tra cứu: <Text style={styles.textTime}>{dayjs().format('DD/MM/YYYY HH:MM')}</Text>
              </Text>
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center' }}>
          <View style={{ ...GlobalCenter.center, gap: Gap._MEDIUM }}>
            <WarningPrimaryIcon />
            <Text style={styles.textResult}>Kết quả vi phạm</Text>
          </View>
          <Text style={styles.textFound}>{`Bạn có ${data?.violations.length} lỗi vi phạm được tìm thấy`}</Text>
          {/* <View style={styles.containerDou}>
            <View style={styles.containerUnConviction}>
              <Text style={styles.textUnConviction}>{`3 chưa xử phạt`}</Text>
            </View>
            <View style={styles.containerUnConviction}>
              <Text style={styles.textConviction}>{`1 đã xử phạt`}</Text>
            </View>
          </View> */}
        </View>
        <FlatList
          data={data?.violations || []}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {
            const isExpanded = expandedItem === index;
            return (
              <TouchableOpacity style={styles.containerItemViolation} onPress={() => toggleExpand(index)}>
                <View style={{ ...GlobalCenter.centerBetween }}>
                  <Text style={styles.textTitleLaw}>{`Vi Phạm ${index + 1}`}</Text>
                  {isExpanded ? <ArrowTopIcon /> : <ArrowDownIcon />}
                </View>
                {isExpanded && (
                  <View style={styles.detailContainer}>
                    <View style={styles.detailRow}>
                      <View style={{ flex: 1 }}>
                        <Text style={styles.textTitleItem}>Ngày vi phạm:</Text>
                      </View>
                      <View style={{ flex: 2 }}>
                        <Text style={styles.textContentItem}>{item?.violationTime}</Text>
                      </View>
                    </View>
                    <MyDivider height={1} color={Colors.Neutral_0} />
                    <View style={styles.detailRow}>
                      <View style={{ flex: 1 }}>
                        <Text style={styles.textTitleItem}>Màu biển số:</Text>
                      </View>
                      <View style={{ flex: 2 }}>
                        <Text style={styles.textContentItem}>{item?.plateColor}</Text>
                      </View>
                    </View>
                    <MyDivider height={1} color={Colors.Neutral_0} />
                    <View style={styles.detailRow}>
                      <View style={{ flex: 1 }}>
                        <Text style={styles.textTitleItem}>Loại phương tiện:</Text>
                      </View>
                      <View style={{ flex: 2 }}>
                        <Text style={styles.textContentItem}>{item?.vehicleType}</Text>
                      </View>
                    </View>
                    <MyDivider height={1} color={Colors.Neutral_0} />
                    <View style={styles.detailRow}>
                      <View style={{ flex: 1 }}>
                        <Text style={styles.textTitleItem}>Địa điểm:</Text>
                      </View>
                      <View style={{ flex: 2 }}>
                        <Text style={styles.textContentItem}>{item?.violationLocation}</Text>
                      </View>
                    </View>
                    <MyDivider height={1} color={Colors.Neutral_0} />
                    <View style={styles.detailRow}>
                      <View style={{ flex: 1 }}>
                        <Text style={styles.textTitleItem}>Lỗi:</Text>
                      </View>
                      <View style={{ flex: 2 }}>
                        <Text style={styles.textContentItem}>{item?.violationBehavior}</Text>
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
                          <Text style={styles.textConviction}>{item?.status}</Text>
                        </View>
                      </View>
                    </View>
                    <MyDivider height={1} color={Colors.Neutral_0} />

                    <View style={styles.detailRow}>
                      <View style={{ flex: 1 }}>
                        <Text style={styles.textTitleItem}>Nơi giải quyết:</Text>
                      </View>
                      <View style={{ flex: 2 }}>
                        <Text
                          style={styles.textContentItem}
                        >{`${item?.resolutionPlaces[0]?.name} - ${item?.resolutionPlaces[0]?.address}`}</Text>
                      </View>
                    </View>
                  </View>
                )}
              </TouchableOpacity>
            );
          }}
          contentContainerStyle={{ paddingTop: scaleHeight(16) }}
          ListEmptyComponent={
            <MyEmptyData text={`Không có phạt nguội nào được ghi nhận.\n Tiếp tục lái xe an toàn nhé!`} />
          }
        />
      </View>
    </MyWrapper>
  );
};

export default SearchResultsScreen;
