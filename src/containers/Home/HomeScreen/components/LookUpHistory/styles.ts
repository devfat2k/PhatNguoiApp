import { Colors } from '@src/utils';
import { scaleHeight, scaleWidth } from '@src/utils/styles/mixins';
import { Gap, Radius } from '@src/utils/styles/spacing';
import { TypographyStyle } from '@src/utils/styles/typography';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: scaleHeight(24),
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
    color: Colors.Neutral_900,
    ...TypographyStyle.BODY_LARGE_NORMAL_MEDIUM,
  },
  textErr: {
    color: Colors.Yellow_500,
    ...TypographyStyle.BODY_REGULAR_NORMAL_REGULAR,
  },
  textTimeSearch: {
    color: Colors.Neutral_500,
    ...TypographyStyle.BODY_SMALL_NORMAL_REGULAR,
  },
  textTime: {
    color: Colors.Neutral_900,
    ...TypographyStyle.BODY_SMALL_NORMAL_MEDIUM,
  },
  rightComponent: {
    width: scaleWidth(80),
    height: scaleHeight(88),
    borderRadius: Radius._LARGE,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Red_50,
    marginLeft: scaleWidth(12),
  },
  textDelete: {
    color: Colors.Red_500,
    ...TypographyStyle.BODY_SMALL_NORMAL_REGULAR,
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
});
