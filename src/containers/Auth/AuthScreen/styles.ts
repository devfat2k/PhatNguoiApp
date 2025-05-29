import { Colors } from '@src/utils';
import { scaleHeight, scaleWidth } from '@src/utils/styles/mixins';
import { Gap, Padding, Radius } from '@src/utils/styles/spacing';
import { TypographyStyle } from '@src/utils/styles/typography';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Padding._2XLARGE,
    alignItems: 'center',
  },
  header: {
    height: scaleHeight(56),
    width: '100%',
    paddingHorizontal: Padding._2XLARGE,
    marginTop: scaleHeight(16),
  },
  btnBack: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Gap._MEDIUM,
  },
  textBack: {
    color: Colors.Neutral_500,
    ...TypographyStyle.BODY_REGULAR_NORMAL_REGULAR,
  },
  text1: {
    color: Colors.Neutral_900,
    textAlign: 'center',
    ...TypographyStyle.HEADING_H2,
  },
  text2: {
    color: Colors.Neutral_500,
    textAlign: 'center',
    ...TypographyStyle.BODY_REGULAR_NORMAL_REGULAR,
  },
  text3: {
    color: Colors.Neutral_500,
    ...TypographyStyle.BODY_REGULAR_TIGHT_REGULAR,
  },
  line: {
    width: scaleWidth(60),
    height: scaleHeight(0.5),
    backgroundColor: Colors.Neutral_500,
  },
  btn: {
    width: scaleWidth(101),
    height: scaleHeight(72),
    backgroundColor: Colors.Neutral_0,
    borderWidth: scaleWidth(1),
    borderRadius: Radius._XLARGE,
    borderColor: Colors.Neutral_200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
