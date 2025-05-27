import { Colors } from '@src/utils';
import { scaleHeight, scaleWidth } from '@src/utils/styles/mixins';
import { Gap, Padding, Radius } from '@src/utils/styles/spacing';
import { TypographyStyle } from '@src/utils/styles/typography';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Padding._2XLARGE,
    backgroundColor: Colors.Neutral_0,
    paddingTop: Padding._XLARGE,
  },
  containerSwitch: {
    width: '100%',
    backgroundColor: Colors.Neutral_50,
    borderRadius: Radius._XLARGE,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Gap._MEDIUM,
    padding: Padding._XLARGE,
  },
  textSwitch: {
    color: Colors.Neutral_900,
    ...TypographyStyle.BODY_REGULAR_TIGHT_REGULAR,
  },
  text1: {
    color: Colors.Neutral_900,
    ...TypographyStyle.BODY_MEDIUM_TIGHT_MEDIUM,
  },
  containerGiveNoti: {
    width: '100%',
    borderRadius: Radius._XLARGE,
    backgroundColor: Colors.Neutral_50,
    marginTop: Padding._XLARGE,
    padding: Padding._XLARGE,
  },
  containerSelectedTime: {
    width: '100%',
    height: scaleHeight(48),
    marginBottom: Padding._XLARGE,
    backgroundColor: Colors.Neutral_0,
    borderRadius: Radius._XLARGE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: scaleWidth(1),
    borderColor: Colors.Neutral_200,
    padding: Padding._XLARGE,
  },
  textGive: {
    color: Colors.Neutral_900,
    ...TypographyStyle.BODY_REGULAR_TIGHT_REGULAR,
  },
});
