import { Colors } from '@src/utils';
import { scaleHeight, scaleWidth } from '@src/utils/styles/mixins';
import { Radius, Gap } from '@src/utils/styles/spacing';
import { TypographyStyle } from '@src/utils/styles/typography';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
    height: scaleHeight(96),
    borderRadius: Radius._LARGE,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Red_50,
    marginLeft: scaleWidth(8),
    gap: Gap._SMALL,
  },
  textDelete: {
    color: Colors.Red_500,
    ...TypographyStyle.BODY_SMALL_NORMAL_REGULAR,
  },
  textEdit: {
    color: Colors.Blue_500,
    ...TypographyStyle.BODY_SMALL_NORMAL_REGULAR,
  },
});
