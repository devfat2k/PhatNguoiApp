import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { MyImage, MyWrapper } from '@components';
import { scaleHeight, scaleWidth } from '@src/utils/styles/mixins';
import LinearGradient from 'react-native-linear-gradient';
import { useSharedValue } from 'react-native-reanimated';
import Carousel, { ICarouselInstance, Pagination } from 'react-native-reanimated-carousel';
import { CarouselList } from './contants';
import { Radius } from '@src/utils/styles/spacing';
import { Colors } from '@src/utils';
import { styles } from './styles';

interface OnboardingScreenProps {
  onDone: () => void;
}
const OnboardingScreen: FC<OnboardingScreenProps> = ({ onDone }) => {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };
  return (
    <MyWrapper isSafe>
      <View style={styles.container}>
        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
          <Carousel
            ref={ref}
            width={scaleWidth(280)}
            height={scaleHeight(280)}
            data={CarouselList}
            onProgressChange={progress}
            renderItem={({ item, index }) => (
              <MyImage key={index} source={item.image} style={{ width: scaleWidth(280), height: scaleHeight(280) }} />
            )}
          />
          <Pagination.Basic
            progress={progress}
            data={CarouselList}
            dotStyle={{
              width: scaleWidth(4),
              height: scaleHeight(4),
              borderRadius: Radius.FULL,
              backgroundColor: Colors.Neutral_500,
            }}
            containerStyle={{ gap: 5, marginTop: 10 }}
            onPress={onPressPagination}
            activeDotStyle={{
              backgroundColor: Colors.Primary_500,
            }}
          />
        </View>

        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ marginBottom: scaleHeight(24), alignItems: 'center' }}>
            <Text style={styles.textWelcome}>Chào mừng bạn đến với</Text>
            <Text style={styles.textTitle}>Tra Cứu Phạt Nguội</Text>
          </View>
          <Text style={styles.textContent}>
            Chỉ cần nhập biển số xe, chọn địa phương và hệ thống sẽ tự động tra cứu các vi phạm và phạt nguội liên quan
            đến xe của bạn
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => {}}>
            <LinearGradient
              style={styles.btn}
              colors={['#FDB022', '#12B76A']}
              start={{ x: 0.1, y: 0.1 }}
              end={{ x: 0.9, y: 0.1 }}
            >
              <Text style={styles.textBtn}>Trải nghiệm ngay</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </MyWrapper>
  );
};

export default OnboardingScreen;
