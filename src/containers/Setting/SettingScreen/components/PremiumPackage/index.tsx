import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '@src/utils';
import { PremiumIcon } from '@src/utils/icon';
import { scaleHeight, scaleWidth } from '@src/utils/styles/mixins';
import { Gap, Padding, Radius } from '@src/utils/styles/spacing';
import { TypographyStyle } from '@src/utils/styles/typography';

interface PremiumPackageProps {}
const PremiumPackage: FC<PremiumPackageProps> = () => {
  return (
    <View style={styles.container}>
      <PremiumIcon />
      <View>
        <Text style={styles.text1}>Gói Premium của bạn sắp hết hạn</Text>
        <Text style={styles.text2}>Gia hạn để tiếp tục dùng đầy đủ tính năng, không gián đoạn!</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={styles.text3}> Còn lại: 3 ngày</Text>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.textBtn}>Gia hạn ngay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: scaleHeight(122),
    backgroundColor: Colors.Yellow_50,
    gap: Gap._LARGE,
    borderRadius: Radius._XLARGE,
    paddingVertical: Padding._LARGE,
    paddingHorizontal: Padding._XLARGE,
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: scaleHeight(24),
  },
  text1: {
    color: Colors.Neutral_900,
    ...TypographyStyle.BODY_REGULAR_NORMAL_MEDIUM,
  },
  text2: {
    width: '80%',
    color: Colors.Neutral_500,
    ...TypographyStyle.BODY_SMALL_NORMAL_REGULAR,
  },
  text3: {
    color: Colors.Yellow_500,
    ...TypographyStyle.BODY_REGULAR_TIGHT_MEDIUM,
  },
  btn: {
    width: scaleWidth(128),
    height: scaleHeight(36),
    backgroundColor: Colors.Primary_500,
    borderRadius: Radius._LARGE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBtn: {
    color: Colors.Neutral_0,
    ...TypographyStyle.BODY_REGULAR_TIGHT_REGULAR,
  },
});
export default PremiumPackage;
