import { Colors } from '@src/utils';
import { scaleHeight, scaleWidth } from '@src/utils/styles/mixins';
import { Radius } from '@src/utils/styles/spacing';
import { GlobalCenter, TypographyStyle } from '@src/utils/styles/typography';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scaleWidth(20),
  },
  containerType: {
    width: scaleWidth(184),
    height: scaleHeight(44),
    borderRadius: Radius._XLARGE,
    backgroundColor: Colors.Neutral_100,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scaleWidth(4),
  },
  centerBetween: {
    marginBottom: scaleHeight(12),
    ...GlobalCenter.centerBetween,
  },
  btnActive: {
    flex: 1,
    height: scaleHeight(36),
    borderRadius: Radius._LARGE,
    backgroundColor: Colors.Neutral_0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnInActive: {
    flex: 1,
    height: scaleHeight(36),
    borderRadius: Radius._LARGE,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textActive: {
    color: Colors.Primary_500,
    ...TypographyStyle.BODY_REGULAR_TIGHT_REGULAR,
  },
  textInActive: {
    color: Colors.Neutral_900,
    ...TypographyStyle.BODY_REGULAR_TIGHT_REGULAR,
  },
  textSeen: {
    color: Colors.Neutral_500,
    ...TypographyStyle.BODY_REGULAR_TIGHT_REGULAR,
  },
  containerItem: {
    width: '100%',
    paddingHorizontal: scaleWidth(16),
    paddingVertical: scaleHeight(12),
    flexDirection: 'row',
    alignItems: 'center',
  },
  dotBlue: {
    width: scaleWidth(8),
    height: scaleHeight(8),
    backgroundColor: Colors.Blue_500,
    borderRadius: Radius.FULL,
  },
  btnDetail: {
    width: scaleWidth(102),
    height: scaleHeight(36),
    borderRadius: Radius._LARGE,
    backgroundColor: Colors.Blue_50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textDetail: {
    color: Colors.Blue_500,
    ...TypographyStyle.BODY_REGULAR_TIGHT_REGULAR,
  },
  textTime: {
    color: Colors.Neutral_400,
    ...TypographyStyle.BODY_SMALL_NORMAL_REGULAR,
  },
  textContent: {
    color: Colors.Neutral_500,
    flexWrap: 'wrap',
    ...TypographyStyle.BODY_REGULAR_NORMAL_REGULAR,
  },
  textPlateNumber: {
    color: Colors.Neutral_900,
    ...TypographyStyle.BODY_REGULAR_NORMAL_BOLD,
  },
});
