import React, { FC, useRef } from 'react';
import { Platform, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { mainStackParamList } from '../../../navigation/type';
import { MyHeader, MyWrapper } from '@components';
import { MenuBarIcon } from '@src/utils/icon';
import { VehicleLookUp } from './components';
import { openDrawer } from '@src/navigation/RootNavigation';
import { BannerAd, BannerAdSize, TestIds, useForeground } from 'react-native-google-mobile-ads';
import { styles } from './styles';
const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';
interface HomeScreenProps extends NativeStackScreenProps<mainStackParamList, 'HomeScreen'> {}
const HomeScreen: FC<HomeScreenProps> = () => {
  const bannerRef = useRef<BannerAd>(null);
  useForeground(() => {
    Platform.OS === 'ios' && bannerRef.current?.load();
  });
  return (
    <MyWrapper isSafe>
      <MyHeader
        title="Trang chủ"
        rightComponent={
          <TouchableOpacity
            onPress={() => {
              openDrawer();
            }}
          >
            <MenuBarIcon />
          </TouchableOpacity>
        }
      />
      <View style={styles.container}>
        <VehicleLookUp />
      </View>
      <BannerAd ref={bannerRef} unitId={adUnitId} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} />
    </MyWrapper>
  );
};

export default HomeScreen;
