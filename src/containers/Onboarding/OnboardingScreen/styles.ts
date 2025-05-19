import { Colors } from '@src/utils';
import { scaleHeight, scaleWidth } from '@src/utils/styles/mixins';
import { Padding, Radius, Size } from '@src/utils/styles/spacing';
import { TypographyStyle } from '@src/utils/styles/typography';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Padding._XLARGE,
  },
  textWelcome: {
    color: Colors.Neutral_500,
    ...TypographyStyle.BODY_REGULAR_NORMAL_REGULAR,
  },
  textTitle: {
    color: Colors.Neutral_900,
    ...TypographyStyle.HEADING_H2,
  },
  textContent: {
    color: Colors.Neutral_500,
    textAlign: 'center',
    ...TypographyStyle.BODY_REGULAR_NORMAL_REGULAR,
  },
  btn: {
    width: '100%',
    height: Size._4XLARGE,
    borderRadius: Radius._XLARGE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerCarousel: {
    width: scaleWidth(280),
    height: scaleHeight(280),
    backgroundColor: Colors.Neutral_100,
    borderRadius: Radius._3XLARGE,
  },
  textBtn: {
    color: Colors.Neutral_0,
    ...TypographyStyle.BODY_MEDIUM_TIGHT_BOLD,
  },
});
