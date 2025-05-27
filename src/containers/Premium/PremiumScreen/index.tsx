import React, { FC, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { mainStackParamList } from '../../../navigation/type';
import { MyHeader, MyWrapper } from '@components';
import { styles } from './styles';
import { Colors } from '@src/utils';
import { CloseXIcon, QualityIcon, TickedIcon, UnTickIcon } from '@src/utils/icon';
import { PackageOptions, PromoPackage } from './constants';
import { GlobalCenter } from '@src/utils/styles/typography';
import { Gap } from '@src/utils/styles/spacing';
import { scaleHeight } from '@src/utils/styles/mixins';
import { goBack } from '@src/navigation/RootNavigation';

interface PremiumScreenProps extends NativeStackScreenProps<mainStackParamList, 'PremiumScreen'> {}
const PremiumScreen: FC<PremiumScreenProps> = () => {
  const [packageSelected, setPackageSelected] = useState<any>();
  return (
    <MyWrapper isSafe>
      <MyHeader
        title="Nâng cấp Premium"
        titleColor={Colors.Neutral_900}
        rightComponent={
          <TouchableOpacity onPress={() => goBack()}>
            <CloseXIcon />
          </TouchableOpacity>
        }
      />
      <View style={styles.container}>
        <View style={{ flex: 8 }}>
          <View style={{ gap: Gap._MEDIUM }}>
            <Text style={styles.text1}>Chọn gói phù hợp với bạn</Text>
            {PackageOptions.map((itemPk, indexPk) => {
              const isChecked = itemPk === packageSelected;
              return (
                <TouchableOpacity
                  key={indexPk}
                  style={isChecked ? styles.containerPackageActive : styles.containerPackageInActive}
                  onPress={() => {
                    setPackageSelected(itemPk);
                  }}
                >
                  <View style={{ ...GlobalCenter.centerLeft, gap: Gap._MEDIUM }}>
                    {itemPk.icon}
                    <Text style={styles.textPackage}>{itemPk.label}</Text>
                  </View>
                  <View style={{ ...GlobalCenter.centerLeft, gap: Gap._MEDIUM }}>
                    <Text style={styles.textPrice}>{itemPk.price}</Text>
                    {isChecked ? <TickedIcon /> : <UnTickIcon />}
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={{ marginTop: scaleHeight(16) }}>
            <Text style={styles.textPromo}>
              Nâng cấp ngay hôm nay để mở khóa toàn bộ tính năng và đảm bảo an tâm khi sử dụng phương tiện của bạn.
            </Text>
            {PromoPackage.map((itemPromo, indexPromo) => (
              <View key={indexPromo} style={styles.containerPromo}>
                <QualityIcon />
                <View style={{ width: '88%' }}>
                  <Text style={styles.textTitlePromo}>{itemPromo.title}</Text>
                  <Text style={styles.textContentPromo}>{itemPromo.content}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity style={styles.btnUpdate}>
            <Text style={styles.textBtn}>Nâng cấp ngay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </MyWrapper>
  );
};

export default PremiumScreen;
