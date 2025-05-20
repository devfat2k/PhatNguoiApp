import { Colors } from '@src/utils';
import { scaleHeight, scaleWidth } from '@src/utils/styles/mixins';
import { Gap, Padding, Radius } from '@src/utils/styles/spacing';
import { GlobalCenter, TypographyStyle } from '@src/utils/styles/typography';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Padding._2XLARGE,
  },
  btnLogout: {
    width: '100%',
    height: scaleHeight(56),
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Radius._XLARGE,
    borderWidth: 1,
    borderColor: Colors.Primary_500,
    marginTop: scaleHeight(24),
  },
  textBtn: {
    color: Colors.Primary_500,
    ...TypographyStyle.BODY_MEDIUM_TIGHT_REGULAR,
  },
  containerOptions: {
    width: '100%',
    height: scaleHeight(56),
    paddingHorizontal: scaleWidth(2),
    ...GlobalCenter.centerBetween,
  },
  textLabel: {
    color: Colors.Neutral_900,
    ...TypographyStyle.BODY_REGULAR_NORMAL_REGULAR,
  },
  center: {
    gap: Gap._LARGE,
    ...GlobalCenter.center,
  },
});
