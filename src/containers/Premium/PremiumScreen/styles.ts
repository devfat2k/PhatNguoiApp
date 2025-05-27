import { Colors } from '@src/utils';
import { scaleHeight, scaleWidth } from '@src/utils/styles/mixins';
import { Gap, Radius } from '@src/utils/styles/spacing';
import { TypographyStyle } from '@src/utils/styles/typography';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scaleWidth(20),
  },
  btnUpdate: {
    width: '100%',
    height: scaleHeight(56),
    backgroundColor: Colors.Primary_500,
    borderRadius: Radius._XLARGE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtn: {
    color: Colors.Neutral_0,
    ...TypographyStyle.BODY_MEDIUM_TIGHT_BOLD,
  },
  text1: {
    color: Colors.Neutral_900,
    ...TypographyStyle.BODY_REGULAR_NORMAL_REGULAR,
  },
  textPackage: {
    color: Colors.Neutral_900,
    ...TypographyStyle.BODY_MEDIUM_NORMAL_MEDIUM,
  },
  textNote: {
    color: Colors.Neutral_500,
    ...TypographyStyle.BODY_SMALL_NORMAL_REGULAR,
  },
  textPrice: {
    color: Colors.Neutral_500,
    ...TypographyStyle.BODY_MEDIUM_TIGHT_REGULAR,
  },
  textPromo: {
    color: Colors.Neutral_900,
    textAlign: 'left',
    width: '95%',
    paddingBottom: scaleHeight(8),
    ...TypographyStyle.BODY_MEDIUM_NORMAL_MEDIUM,
  },
  textTitlePromo: {
    color: Colors.Neutral_900,
    ...TypographyStyle.BODY_REGULAR_NORMAL_MEDIUM,
  },
  textContentPromo: {
    color: Colors.Neutral_500,
    ...TypographyStyle.BODY_REGULAR_NORMAL_REGULAR,
  },
  containerPackageActive: {
    width: '100%',
    height: scaleHeight(56),
    borderRadius: Radius._XLARGE,
    borderWidth: scaleWidth(1),
    borderColor: Colors.Primary_500,
    backgroundColor: Colors.Primary_50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: scaleHeight(8),
    padding: scaleWidth(16),
  },
  containerPackageInActive: {
    width: '100%',
    height: scaleHeight(56),
    borderRadius: Radius._XLARGE,
    borderWidth: scaleWidth(1),
    borderColor: Colors.Neutral_200,
    backgroundColor: Colors.Neutral_25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: scaleHeight(8),
    padding: scaleWidth(16),
  },
  containerPromo: {
    flexDirection: 'row',
    gap: Gap._MEDIUM,
    marginBottom: scaleHeight(8),
  },
});
