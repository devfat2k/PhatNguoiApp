import { Dimensions, PixelRatio } from 'react-native';

export const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const scaleFont = (size: number) => {
  return size;
};
export const getWidthRatio = (length: number) => {
  return (length * width) / 375;
};

export const getHeightRatio = (length: number) => {
  return (length * height) / 812;
};
const scale = (size: number) => PixelRatio.roundToNearestPixel((width / guidelineBaseWidth) * size);
const scaleHeight = (size: number) => PixelRatio.roundToNearestPixel((height / guidelineBaseHeight) * size);
const scaleWidth = (size: number) => PixelRatio.roundToNearestPixel((width / guidelineBaseWidth) * size);
export const scaleSize = (size: number) => PixelRatio.roundToNearestPixel((height / guidelineBaseHeight) * size);

const moderateScale = (size: number, factor = 0.5) => size + (scale(size) - size) * factor;

export { scale, moderateScale, scaleHeight, scaleWidth };
