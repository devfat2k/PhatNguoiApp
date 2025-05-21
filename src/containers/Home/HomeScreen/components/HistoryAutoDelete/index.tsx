import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '@src/utils';
import { CloseIcon, InfoIcon } from '@src/utils/icon';
import { scaleHeight, scaleWidth } from '@src/utils/styles/mixins';
import { Gap, Radius } from '@src/utils/styles/spacing';
import { TypographyStyle } from '@src/utils/styles/typography';

interface HistoryAutoDeleteProps {}
const HistoryAutoDelete: FC<HistoryAutoDeleteProps> = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: Gap._MEDIUM,
          }}
        >
          <InfoIcon />
          <Text style={styles.text1}>Lịch sử sẽ tự xoá sau 3 ngày</Text>
        </View>
        <TouchableOpacity>
          <CloseIcon />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginLeft: scaleWidth(28),
        }}
      >
        <Text style={styles.text2}>
          Nâng cấp lên Premium để lưu trữ không giới hạn và dễ dàng quản lý phương tiện của bạn.
        </Text>
      </View>
      <View style={{ alignItems: 'flex-end' }}>
        <TouchableOpacity style={styles.btnUpdate}>
          <Text style={styles.textBtn}>Nâng cấp ngay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: scaleHeight(132),
    backgroundColor: Colors.Blue_50,
    borderRadius: Radius._XLARGE,
    position: 'absolute',
    bottom: scaleHeight(20),
    paddingVertical: scaleHeight(12),
    paddingHorizontal: scaleWidth(16),
  },
  text1: {
    color: Colors.Neutral_900,
    ...TypographyStyle.BODY_REGULAR_NORMAL_MEDIUM,
  },
  text2: {
    color: Colors.Neutral_500,
    width: '90%',
    ...TypographyStyle.BODY_SMALL_NORMAL_MEDIUM,
  },
  btnUpdate: {
    width: scaleWidth(140),
    height: scaleHeight(36),
    backgroundColor: Colors.Blue_500,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Radius._LARGE,
    marginTop: scaleHeight(8),
  },
  textBtn: {
    color: Colors.Neutral_0,
    ...TypographyStyle.BODY_REGULAR_TIGHT_REGULAR,
  },
});
export default HistoryAutoDelete;
