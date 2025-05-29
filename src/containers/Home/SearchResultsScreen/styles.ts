import { Colors } from '@src/utils';
import { scaleHeight, scaleWidth } from '@src/utils/styles/mixins';
import { Radius, Gap, Padding } from '@src/utils/styles/spacing';
import { GlobalCenter, TypographyStyle } from '@src/utils/styles/typography';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: scaleHeight(16),
    paddingHorizontal: scaleWidth(16),
    backgroundColor: Colors.Neutral_0,
  },
  containerSort: {
    width: scaleWidth(208),
    height: scaleHeight(36),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: Radius._LARGE,
    borderWidth: 1,
    borderColor: Colors.Neutral_200,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    gap: Gap._MEDIUM,
  },
  textSort: {
    color: Colors.Neutral_500,
    ...TypographyStyle.BODY_REGULAR_TIGHT_REGULAR,
  },
  textValueSort: {
    color: Colors.Neutral_900,
    ...TypographyStyle.BODY_REGULAR_TIGHT_REGULAR,
  },
  containerItem: {
    width: '100%',
    height: scaleHeight(94),
    borderRadius: Radius._XLARGE,
    backgroundColor: Colors.Neutral_50,
    flexDirection: 'row',
    marginBottom: scaleHeight(16),
    borderWidth: 1,
    borderColor: Colors.Neutral_100,
    gap: Gap._MEDIUM,
  },
  textPlate: {
    color: Colors.Primary_500,
    ...TypographyStyle.BODY_LARGE_NORMAL_BOLD,
  },
  textTimeSearch: {
    color: Colors.Neutral_500,
    ...TypographyStyle.BODY_SMALL_NORMAL_REGULAR,
  },
  textTime: {
    color: Colors.Neutral_900,
    ...TypographyStyle.BODY_SMALL_NORMAL_MEDIUM,
  },
  centerLeft: {
    width: '100%',
    gap: Gap._SMALL,
    marginTop: scaleHeight(4),
    ...GlobalCenter.centerLeft,
  },
  textResult: {
    color: Colors.Neutral_900,
    ...TypographyStyle.BODY_REGULAR_NORMAL_MEDIUM,
  },
  textFound: {
    color: Colors.Neutral_500,
    ...TypographyStyle.BODY_REGULAR_NORMAL_REGULAR,
  },
  containerUnConviction: {
    width: scaleWidth(116),
    height: scaleHeight(28),
    borderRadius: Radius._4XLARGE,
    backgroundColor: Colors.Yellow_50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Gap._MEDIUM,
  },
  containerConviction: {
    width: scaleWidth(97),
    height: scaleHeight(28),
    borderRadius: Radius._4XLARGE,
    backgroundColor: Colors.Green_50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Gap._MEDIUM,
  },
  textConviction: {
    color: Colors.Green_700,
    ...TypographyStyle.BODY_REGULAR_TIGHT_REGULAR,
  },
  textUnConviction: {
    color: Colors.Yellow_700,
    ...TypographyStyle.BODY_REGULAR_TIGHT_REGULAR,
  },
  containerDou: {
    ...GlobalCenter.center,
    gap: Gap._LARGE,
    marginTop: scaleHeight(12),
  },
  btnSort: {
    width: '100%',
    height: scaleHeight(56),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    paddingHorizontal: scaleWidth(8),
  },
  textSortBy: {
    color: Colors.Neutral_900,
    ...TypographyStyle.BODY_MEDIUM_NORMAL_MEDIUM,
  },
  text: {
    color: Colors.Neutral_900,
    ...TypographyStyle.BODY_LARGE_NORMAL_BOLD,
  },
  textTitleLaw: {
    color: Colors.Neutral_900,
    ...TypographyStyle.BODY_MEDIUM_NORMAL_MEDIUM,
  },
  textTitleItem: {
    color: Colors.Neutral_500,

    ...TypographyStyle.BODY_REGULAR_NORMAL_REGULAR,
  },
  textContentItem: {
    color: Colors.Neutral_900,

    ...TypographyStyle.BODY_REGULAR_NORMAL_REGULAR,
  },
  containerItemViolation: {
    flex: 1,
    borderRadius: Radius._XLARGE,
    backgroundColor: Colors.Neutral_100,

    padding: Padding._XLARGE,
    marginBottom: scaleHeight(12),
  },
  containerBtnDownShare: {
    flex: 1,
    height: scaleHeight(56),
    backgroundColor: 'transparent',
    borderRadius: Radius._XLARGE,
    borderWidth: scaleWidth(1),
    borderColor: Colors.Neutral_200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Gap._MEDIUM,
  },
  textBtn: {
    color: Colors.Neutral_500,
    ...TypographyStyle.BODY_MEDIUM_TIGHT_MEDIUM,
  },
  itemContent: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: Gap._MEDIUM,
  },
  itemUnExpan: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  detailContainer: {
    paddingVertical: scaleHeight(8),
    gap: Gap._LARGE,
  },
  detailRow: {
    flexDirection: 'row',
  },
  textSeeVideo: {
    color: Colors.Blue_500,
    ...TypographyStyle.BODY_REGULAR_TIGHT_REGULAR,
  },
  statusFee: {
    width: scaleWidth(110),
    height: scaleHeight(28),
    flexDirection: 'row',
    alignItems: 'center',
    gap: Gap._MEDIUM,
    borderRadius: Radius._2XLARGE,
    backgroundColor: Colors.Green_50,
    justifyContent: 'center',
  },
  dot: {
    width: scaleWidth(4),
    height: scaleHeight(4),
    backgroundColor: Colors.Primary_500,
    borderRadius: Radius.FULL,
  },
});
