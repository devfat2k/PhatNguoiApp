import React, { FC, useContext, useRef, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { ArrowDownIcon, CarIcon, CloseIcon, TickedIcon, TrashIcon, UnTickIcon, WarningErrIcon } from '@src/utils/icon';
import { MyDivider, MyEmptyData, MyModalConfirm, MyModalWrapContent, MyWrapper } from '@src/components';
import { DataMockHistory, SortOptions } from '../../constants';
import { scaleHeight, scaleWidth } from '@src/utils/styles/mixins';
import { styles } from './styles';
import { GlobalCenter } from '@src/utils/styles/typography';
import { GlobalContext } from '@src/context';

interface LookupHistoryProps {}
const LookupHistory: FC<LookupHistoryProps> = () => {
  const { showMessage } = useContext(GlobalContext);
  const [isShowModalDelete, setIsShowModalDelete] = useState<boolean>(false);
  const [isShowModalSortBy, setIsShowModalSortBy] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>('ASC');
  const swipeableRef = useRef<Array<Swipeable | null>>([]);
  const openItemIndexRef = useRef<number | null>(null);
  const closeOtherSwipeables = (index: number) => {
    if (openItemIndexRef.current !== null && openItemIndexRef.current !== index) {
      swipeableRef.current[openItemIndexRef.current]?.close();
    }
    openItemIndexRef.current = index;
  };
  const renderRightActions = () => (
    <TouchableOpacity
      style={styles.rightComponent}
      onPress={() => {
        setIsShowModalDelete(true);
      }}
    >
      <TrashIcon />
      <Text style={styles.textDelete}>Xoá</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'flex-end' }}>
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
        data={DataMockHistory}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<MyEmptyData />}
        renderItem={({ item, index }) => (
          <Swipeable
            ref={ref => {
              swipeableRef.current[index] = ref;
            }}
            overshootRight
            renderRightActions={renderRightActions}
            onSwipeableOpen={() => closeOtherSwipeables(index)}
          >
            <View style={styles.containerItem}>
              <CarIcon style={{ borderRadius: 999 }} />
              <View style={{ justifyContent: 'center' }}>
                <Text style={styles.textPlate}>{item.licensePlate}</Text>
                <Text style={styles.textErr}>{`${item.violationCount} lỗi vi phạm`}</Text>
                <Text style={styles.textTimeSearch}>
                  Thời điểm tra cứu: <Text style={styles.textTime}>{item.lookupTime}</Text>
                </Text>
              </View>
            </View>
          </Swipeable>
        )}
        contentContainerStyle={{ paddingTop: scaleHeight(24) }}
      />
      <MyModalConfirm
        isVisible={isShowModalDelete}
        setIsVisible={setIsShowModalDelete}
        icon={<WarningErrIcon />}
        confirmText="Xoá"
        title="Xoá lịch sử tra cứu?"
        content="Bạn có chắc muốn xoá lịch sử tra cứu này"
        onPressConfirm={() => {
          setIsShowModalDelete(false);
          showMessage({
            type: 'success',
            text: 'Đã xoá lịch sử tra cứu!',
          });
        }}
      />
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
      {/* <HistoryAutoDelete />  temp */}
    </View>
  );
};
export default LookupHistory;
