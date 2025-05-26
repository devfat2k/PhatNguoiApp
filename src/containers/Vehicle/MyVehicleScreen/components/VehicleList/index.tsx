import React, { FC, useContext, useRef, useState } from 'react';
import { MyEmptyData, MyModalConfirm } from '@src/components';
import { TrashIcon, CarIcon, EditIcon } from '@src/utils/icon';
import { scaleHeight, scaleWidth } from '@src/utils/styles/mixins';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { styles } from './styles';
import { GlobalContext } from '@src/context';
import { Gap } from '@src/utils/styles/spacing';
import { Colors } from '@src/utils';
import { navigate } from '@src/navigation/RootNavigation';

interface VehicleListProps {
  data: any;
}
const VehicleList: FC<VehicleListProps> = ({ data }) => {
  const { showMessage } = useContext(GlobalContext);
  const [isShowModalDelete, setIsShowModalDelete] = useState<boolean>(false);
  const swipeableRef = useRef<Array<Swipeable | null>>([]);
  const openItemIndexRef = useRef<number | null>(null);
  const closeOtherSwipeables = (index: number) => {
    if (openItemIndexRef.current !== null && openItemIndexRef.current !== index) {
      swipeableRef.current[openItemIndexRef.current]?.close();
    }
    openItemIndexRef.current = index;
  };
  const renderRightActions = () => (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: Gap._SMALL,
        marginBottom: scaleHeight(20),
      }}
    >
      <TouchableOpacity
        style={[styles.rightComponent, { backgroundColor: Colors.Blue_50 }]}
        onPress={() => {
          setIsShowModalDelete(true);
        }}
      >
        <EditIcon />
        <Text style={styles.textEdit}>Chỉnh sửa</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.rightComponent}
        onPress={() => {
          setIsShowModalDelete(true);
        }}
      >
        <TrashIcon />
        <Text style={styles.textDelete}>Xoá</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <>
      <FlatList
        data={data || []}
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
            <TouchableOpacity style={styles.containerItem} onPress={() => navigate('VehicleDetailScreen')}>
              <CarIcon style={{ borderRadius: 999 }} />
              <View style={{ justifyContent: 'center' }}>
                <Text style={styles.textPlate}>{item.licensePlate}</Text>
                <Text style={styles.textErr}>{`${item.violationCount} lỗi vi phạm`}</Text>
                <Text style={styles.textTimeSearch}>Xe mới mua</Text>
              </View>
            </TouchableOpacity>
          </Swipeable>
        )}
        contentContainerStyle={{ paddingTop: scaleHeight(24), paddingHorizontal: scaleWidth(16) }}
      />
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
    </>
  );
};

export default VehicleList;
