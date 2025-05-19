import React, { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { mainStackParamList } from '../../../navigation/type';
import { MyHeader, MyWrapper } from '@components';
import { styles } from './styles';
import { PremiumIcon } from '@src/utils/icon';

interface HomeScreenProps extends NativeStackScreenProps<mainStackParamList, 'HomeScreen'> {}
const HomeScreen: FC<HomeScreenProps> = () => {
  return (
    <MyWrapper isSafe>
      <MyHeader
        title="Trang chủ"
        rightComponent={
          <TouchableOpacity onPress={() => {}}>
            <PremiumIcon />
          </TouchableOpacity>
        }
      />
      <View style={styles.container}></View>
    </MyWrapper>
  );
};

export default HomeScreen;
